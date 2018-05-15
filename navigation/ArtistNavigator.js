import { createStackNavigator } from 'react-navigation'
import ArtistScreen from '../screens/ArtistScreen'
import ArtworkScreen from '../screens/ArtworkScreen'

export default createStackNavigator({
    Artist: {
      screen: ArtistScreen
    },
    Artwork: {
        screen: ArtworkScreen
    }
  },
  {
    initialRouteName: 'Artist',
    headerMode : 'none'
  }
)