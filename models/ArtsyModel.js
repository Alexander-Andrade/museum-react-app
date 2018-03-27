import {observable, action} from 'mobx'
import auth from './Auth'
import axios from 'axios'
import _ from 'lodash'

class ArtsyModel {

  @observable list = []
  @observable next_href = ""
  @observable prev_hrefs = []

  constructor(start_href){
    this.next_href = start_href
    this.model_name = this.next_href.match(/api\/([a-z]+)\?/)[1]
    console.log(`model ${this.model_name}`)
  }

  async _load() {
    const response = await axios.get(this.next_href, {
      headers: {
        "X-XAPP-Token": auth.xapp_token 
      }
    })
    this.list = _.get(response, `data._embedded.${this.model_name}`) 
    return response
  }

  async loadNext() {
    if (auth.xapp_token != null) {
      
      const response = await this._load()

      this.prev_hrefs.push(this.next_href) 
      this.next_href = response.data._links.next.href
      console.log(this.list)
      console.log(this.next_href)
    }
  }

  
  async loadPrev(){
    if (auth.xapp_token != null) {
      
      if(this.prev_hrefs.length != 0){
        this.next_href = this.prev_hrefs.pop()
        const response = await this._load()
      }

    }
  }
}

export default ArtsyModel