import React from 'react'
import RootNavigation from './navigation/RootNavigation'
import { reaction } from 'mobx'
import { Provider } from 'mobx-react'
import auth from './models/Auth'
import Datastore from 'react-native-local-mongodb'
import ArtsyModel from './models/ArtsyModel'
import ArtsySettings from './constants/ArtsySettings'

const artistsModel = new ArtsyModel({
  collection: 'artists',
  href: "https://api.artsy.net/api/artists?artworks=true&sort=-trending",
  limit: ArtsySettings.queryLimit
})

const artworksModel = new ArtsyModel({
  collection: 'artworks',
  href: "https://api.artsy.net/api/artworks",
  limit: ArtsySettings.queryLimit
})

const genesModel = new ArtsyModel({
  collection: 'genes',
  href: "https://api.artsy.net/api/genes",
  limit: ArtsySettings.queryLimit
})

const artistsStore = new Datastore({filename: 'artists', autoload: true})
const artworksStore = new Datastore({filename: 'artworks', autoload: true})
const genesStore = new Datastore({filename: 'genes', autoload: true})


reaction( () => auth.xapp_token, 
          (xapp_token, reaction) => { 
            artistsModel.loadNext()
            artworksModel.loadNext()
            genesModel.loadNext()
            reaction.dispose()
          }
        )

        
class App extends React.Component {
  render() {
    return (
      <Provider 
        artistsModel = {artistsModel}
        artworksModel = {artworksModel}
        genesModel = {genesModel}
        artistsStore = {artistsStore}
        artworksStore = {artworksStore}
        genesStore = {genesStore}>
        <RootNavigation />
      </Provider>
    );
  }
}

export default App;