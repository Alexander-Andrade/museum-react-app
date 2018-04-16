import {observable, action} from 'mobx'
import auth from './Auth'
import axios from 'axios'
import _ from 'lodash'
import URL from 'url-parse'

class ArtsyModel {

  @observable list = []
  @observable next_href = null
  @observable current_href = null
  @observable prev_hrefs = []
  @observable loading = false

  constructor(start_href){
    this.next_href = start_href
    this.model_name = this.next_href.match(/api\/([a-z]+)\?/)[1]
  }


  async load(href, limit = null) {
    this.loading = true
    const token = await auth.token()
    if(limit != null){
      href = this._limitSize(href, limit)
    }
    console.log(href)
    let response = null
    try{
      response = await axios.get(href, {
        headers: {
          "X-XAPP-Token": token
        },
        timeout: 2000
      })
      
      this.list = _.get(response, `data._embedded.${this.model_name}`, [])
    }catch(e){
      console.log(e)
    }
    this.loading = false
    
    return response
  }

  async loadNext() {
    if (auth.xapp_token != null) {
  
      const response = await this.load(this.next_href)
      
      if (this.current_href != null) {
        this.prev_hrefs.push(this.current_href)
      }
      
      this.current_href = this.next_href 
      this.next_href = response.data._links.next.href
    }
  }

  _limitSize(href, limit) {
    let url = new URL(href, true)
    query = url.query
    query.size = limit.toString()
    url.set('query',query)
    return url.href
  }

  async loadPrev(){
    if (auth.xapp_token != null) {
      
      if(this.prev_hrefs.length != 0){
        href = this.prev_hrefs.pop()
        const response = await this.load(href)
        this.current_href = href
        this.next_href = response.data._links.next.href
      }

    }
  }


  async saveAndLoad(href, limit = null) {
    if (auth.xapp_token != null) {

      this.prev_hrefs.push(this.current_href)
      const response = await this.load(href, limit)
      this.current_href = href
    }
  }
}

export default ArtsyModel