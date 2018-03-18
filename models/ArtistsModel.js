import {observable, action} from 'mobx'
import auth from './Auth'


class ArtistsModel {

  @observable artists = []
  @observable page = 1

  constructor() {
  }
  

  load() {
    if (auth.xapp_token != null) {
      console.log(`auth token ${auth.xapp_token}`)
      console.log('load artists')
    }
    else{
      console.log(`auth.xapp_token = ${auth.xapp_token}`)
    }
  }

}

export default ArtistsModel