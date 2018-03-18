import { observable, action } from 'mobx'
import axios from 'axios'


class Auth {

  @observable xapp_token = null
  client_id = "955426187614c5788d9d"
  client_secret = "5f02c457cbf359584460733ee9dfd476"

  constructor () {
    this.set_token()
  }

  @action
  async set_token() {
    try {
      const query = `https://api.artsy.net/api/tokens/xapp_token?client_id=${this.client_id}&client_secret=${this.client_secret}`
      const response = await axios.post(query)
      this.xapp_token = response.data.token
    } catch (e) {
      console.log(e)
    }
  }

}

const auth = new Auth

export default auth