import { StackNavigator } from 'react-navigation'
import ArtworksScreen from '../screens/ArtworksScreen'
import ArtworkScreen from '../screens/ArtworkScreen'


export default StackNavigator({
    Artworks: {
      screen: ArtworksScreen
    },
    Artwork: {
      screen: ArtworkScreen
    }
  },
  {
    initialRouteName: 'Artworks',
    headerMode : 'none'
  }
)