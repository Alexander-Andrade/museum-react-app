import { StackNavigator } from 'react-navigation'
import ArtworksScreen from '../screens/ArtworksScreen'
import ArtworkNavigator from './ArtworkNavigator'

export default StackNavigator({
    Artworks: {
      screen: ArtworksScreen
    },
    Artwork: {
      screen: ArtworkNavigator
    }
  },
  {
    initialRouteName: 'Artworks',
    headerMode : 'none'
  }
)