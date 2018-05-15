import { createStackNavigator } from 'react-navigation'
import ArtworkScreen from '../screens/ArtworkScreen'
import ArtistScreen from '../screens/ArtistScreen'


export default createStackNavigator({
    Artwork: {
      screen: ArtworkScreen
    },
    Artist: {
      screen: ArtistScreen
    }
  },
  {
    headerMode : 'none',
    initialRouteName: 'Artwork',
  }
)
