import React from 'react'
import RootNavigation from './navigation/RootNavigation'
import { reaction } from 'mobx'
import { Provider } from 'mobx-react'
import auth from './models/Auth'
import ArtsyModel from './models/ArtsyModel'
import ArtsySettings from './constants/ArtsySettings'
import FavoriteModel from './models/FavoriteModel'
import ArtsySearch from './models/ArtsySearch'


const artistsModel = new ArtsyModel({
  collection: 'artists',
  href: ArtsySettings.artistsQuery,
  limit: ArtsySettings.queryLimit
})

const artworksModel = new ArtsyModel({
  collection: 'artworks',
  href: ArtsySettings.arworksQuery,
  limit: ArtsySettings.queryLimit
})

const genesModel = new ArtsyModel({
  collection: 'genes',
  href: ArtsySettings.genesQuery,
  limit: ArtsySettings.queryLimit
})

const artsySearch = new ArtsySearch()


const favoriteArtists = new FavoriteModel({collection: 'artists', indexField: 'name'})


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
        artsySearch = {artsySearch}
        favoriteArtists = {favoriteArtists}>
        <RootNavigation />
      </Provider>
    );
  }
}

export default App;