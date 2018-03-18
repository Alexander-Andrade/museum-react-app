import {observable, action} from 'mobx'
import auth from './Auth'
import axios from 'axios'

class ArtistsModel {

  @observable artists = []
  @observable page = 1
  @observable size = 2
  @observable next_href = `https://api.artsy.net/api/artists?artworks=true&sort=-trending&size=${this.size}`

  constructor() {
  }
  

  async load() {
    if (auth.xapp_token != null) {
      const response = await axios.get(this.next_href, {
        headers: {
          "X-XAPP-Token": auth.xapp_token 
        }
      })

      this.artists = response.data._embedded.artists
      this.next_href = response.data._links.next.href
      console.log(this.artists)
      console.log(this.next_href)
    }
  }

}

export default ArtistsModel