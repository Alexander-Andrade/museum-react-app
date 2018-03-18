import React from 'react'
import RootNavigation from './navigation/RootNavigation'
import { autorun } from 'mobx'
import { Provider } from 'mobx-react'
import ArtistsModel from './models/ArtistsModel'

const artistsModel = new ArtistsModel

autorun(() => artistsModel.load())

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