import { createStackNavigator } from 'react-navigation'
import ArtworksScreen from '../screens/ArtworksScreen'
import ArtworkNavigator from './ArtworkNavigator'
import ArtworksTabNavigator from './ArtworksTabNavigator'

export default createStackNavigator({
    Artworks: {
      screen: ArtworksTabNavigator
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