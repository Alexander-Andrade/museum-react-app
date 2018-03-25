import React from 'react'
import RootNavigation from './navigation/RootNavigation'
import { reaction } from 'mobx'
import { Provider } from 'mobx-react'
import ArtistsModel from './models/ArtistsModel'
import auth from './models/Auth'

const artistsModel = new ArtistsModel

reaction( () => auth.xapp_token, 
          (xapp_token, reaction) => { 
            artistsModel.loadNext()
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