import {observable, action} from 'mobx'
import auth from './Auth'
import axios from 'axios'
import _ from 'lodash'

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

  async load(href) {
    this.loading = true
    const response = await axios.get(href, {
      headers: {
        "X-XAPP-Token": auth.xapp_token 
      }
    })
    this.loading = false
    this.list = _.get(response, `data._embedded.${this.model_name}`)
    
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


  async saveAndLoad(href) {
    if (auth.xapp_token != null) {

      const response = await this.load(href)
      this.prev_hrefs.push(this.current_href)
      this.current_href = href
      console.log(`list: ${this.list != undefined}`)
    }
  }
}

export default ArtsyModel