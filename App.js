import React from 'react'
import RootNavigation from './navigation/RootNavigation'
import { reaction } from 'mobx'
import { Provider } from 'mobx-react'
import ArtistsModel from './models/ArtistsModel'
import ArtworksModel from './models/ArtworksModel'
import GenesModel from './models/GenesModel'
import auth from './models/Auth'

const artistsModel = new ArtistsModel
const artworksModel = new ArtworksModel
const genesModel = new GenesModel

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
      <Provider artistsModel = {artistsModel}>
        <RootNavigation />
      </Provider>
    );
  }
}

export default App;