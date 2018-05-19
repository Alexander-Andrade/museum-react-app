import { createStackNavigator } from 'react-navigation'
// import ArtistsScreen from '../screens/ArtistsScreen'
import ArtistNavigator from './ArtistNavigator'
import ArtistsTabNavigator from './ArtistsTabNavigator'

export default createStackNavigator({
    Artists: {
      screen: ArtistsTabNavigator
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