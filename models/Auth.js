import { observable, action, computed } from 'mobx'
import axios from 'axios'
import { AsyncStorage } from 'react-native'
import moment from 'moment'
import _ from 'lodash'
class Auth {

  @observable xapp_token = null
  expires_at = null
  client_id = "955426187614c5788d9d"
  client_secret = "5f02c457cbf359584460733ee9dfd476"

  constructor () {
    (async () => {
      this.token()
    })()
  }



  @action
  async fetchTokenFromApi() {
    try {
      const query = `https://api.artsy.net/api/tokens/xapp_token?client_id=${this.client_id}&client_secret=${this.client_secret}`
      const response = await axios.post(query)
      this.xapp_token = response.data.token
      this.expires_at = response.data.expires_at
    } catch (e) {
      console.log(e)
    }
  }
  
  @action
  async fetchTokenFromStorage() {
    try {
      const artsyToken = JSON.parse(await AsyncStorage.getItem('artsyToken'))
      this.xapp_token = _.get(artsyToken, 'token', null)
      this.expires_at = _.get(artsyToken, 'expires_at', null)
    } catch (e) {
      console.log(e)
    }
  }

  isValid() {
    if(_.isEmpty(this.xapp_token) || _.isEmpty(this.expires_at)) {
      return false
    }
    if(moment(this.expires_at) < moment()) {
      return false
    }
    return true
  }

  async saveToStorage() {
    try {
      await AsyncStorage.setItem('artsyToken', JSON.stringify({
        token: this.xapp_token,
        expires_at: this.expires_at
      }))
    } catch (e) {
      console.log(e)
    }
  }


  async token() {
    await this.fetchTokenFromStorage()
    if(!this.isValid()) {
      await this.fetchTokenFromApi()
      this.saveToStorage()
    }
    return this.xapp_token
  }
}

const auth = new Auth

export default auth