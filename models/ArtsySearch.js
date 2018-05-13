import { observable, action, computed } from 'mobx'
import axios from 'axios'
import auth from './Auth'
import URL from 'url-parse'
import ArtsySettings from '../constants/ArtsySettings'
import _ from 'lodash'

class ArtsySearchModel {
  @observable searchResults = []
  @observable active = false
  type = ""
  @observable text = ""
  

  @action
  async search(text, type) {
    if(!_.isEmpty(text)) {
      const token = await auth.token()
      const serachQueryStr = this.searchQuery(text, type)
     
      response = await axios.get(serachQueryStr, {
        headers: {
          "X-XAPP-Token": token
        }
      })
      
      this.type = type
      this.text = text
      this.searchResults = response.data._embedded.results

    }
  }


  @action
  activate() {
    this.active = true
  }

  @action 
  disactivate() {
    this.active = false
    this.searchResults = []
    this.type = ""
    this.text = ""
  }

  searchQuery(text, type) {
    let str = text.replace(' ', '+')
    return `${ArtsySettings.searchPath}?q=${str}&size=${ArtsySettings.searchLimit}&type=${type}`
  }

  @computed get results(){
    return this.active ? this.searchResults : null
  }

  async loadResult(result) {
    const token = await auth.token()
    const response = await axios.get(result._links.self.href, {
      headers: {
        "X-XAPP-Token": token
      }
    })
    return _.get(response, 'data')
  }
}

export default ArtsySearchModel