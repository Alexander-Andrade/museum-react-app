import {observable, action} from 'mobx'
import auth from './Auth'
import axios from 'axios'

class ArtistsModel {

  @observable artists = []
  @observable page = 1

  constructor() {
  }
  

  async load() {
    if (auth.xapp_token != null) {
      const response = await axios.get("https://api.artsy.net/api/artists?size=5",{
        headers: {
          "X-XAPP-Token": auth.xapp_token 
        }
      })

      console.log(response)
    }
  }

}

export default ArtistsModel