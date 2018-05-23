import {observable, action} from 'mobx'
import auth from './Auth'
import axios from 'axios'
import _ from 'lodash'
import URL from 'url-parse'
import ArtsySettings from '../constants/ArtsySettings'

class ArtsyModel {

  @observable list = []
  @observable next_href = null
  @observable current_href = null
  @observable prev_hrefs = []
  @observable loading = false

  
  constructor(params){
    this.next_href = params.href
    this.limit = _.isEmpty(params.limit) ?  ArtsySettings.queryLimit : params.limit
    this.collection = params.collection 
  }

  async load(href) {
    this.loading = true
    const token = await auth.token()
    
    href = this._limitSize(href)
    
    // console.log(href)
    let response = null
    try{
      response = await axios.get(href, {
        headers: {
          "X-XAPP-Token": token
        }
      })
      
      this.list = _.get(response, `data._embedded.${this.collection}`, [])
      // console.log(this.list.map((el)=> el.slug || el.name))
    }catch(e){
      // console.log(e)
    }
    this.loading = false
    
    return response
  }

  @action
  async loadNext() {
    if (auth.xapp_token != null) {
  
      const response = await this.load(this.next_href)
      
      if (this.current_href != null) {
        this.prev_hrefs.push(this.current_href)
      }
      
      this.current_href = this.next_href 
      this.next_href = _.get(response, 'data._links.next.href')
    }
  }

  _limitSize(href) {
    let url = new URL(href, true)
    query = url.query
    query.size = this.limit.toString()
    url.set('query',query)
    return url.href
  }

  @action
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
}

export default ArtsyModel