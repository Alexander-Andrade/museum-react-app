import React from 'react'
import RootNavigation from './navigation/RootNavigation'
import { reaction } from 'mobx'
import { Provider } from 'mobx-react'
import ArtistsModel from './models/ArtistsModel'
import ArtworksModel from './models/ArtworksModel'
import GenesModel from './models/GenesModel'
import auth from './models/Auth'
import Datastore from 'react-native-local-mongodb'

const artistsModel = new ArtistsModel
const artworksModel = new ArtworksModel
const genesModel = new GenesModel

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