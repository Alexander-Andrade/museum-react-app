import { createStackNavigator } from 'react-navigation'
import ArtistScreen from '../screens/ArtistScreen'
import ArtistsScreen from '../screens/ArtistsScreen'
import ArtistNavigator from './ArtistNavigator'

export default createStackNavigator({
    Artists: {
      screen: ArtistsScreen
    },
    Artist: {
      screen: ArtistNavigator
    }
  },
  {
    initialRouteName: 'Artists',
    headerMode : 'none'
  }
)