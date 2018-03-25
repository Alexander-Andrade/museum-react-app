import {observable, action} from 'mobx'
import auth from './Auth'
import axios from 'axios'

class ArtistsModel {

  @observable artists = []
  @observable size = 5
  @observable next_href = `https://api.artsy.net/api/artists?artworks=true&sort=-trending&size=${this.size}`
  @observable prev_hrefs = []

  async _load() {
    const response = await axios.get(this.next_href, {
      headers: {
        "X-XAPP-Token": auth.xapp_token 
      }
    })
    this.artists = response.data._embedded.artists
    return response
  }

  async loadNext() {
    if (auth.xapp_token != null) {
      
      const response = await this._load()

      this.prev_hrefs.push(this.next_href) 
      this.next_href = response.data._links.next.href
      console.log(this.artists)
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

export default ArtistsModel