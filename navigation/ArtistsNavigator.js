import { StackNavigator } from 'react-navigation'
import ArtistScreen from '../screens/ArtistScreen'
import ArtistsScreen from '../screens/ArtistsScreen'

export default StackNavigator({
    Artists: {
      screen: ArtistsScreen
    },
    Artist: {
      screen: ArtistScreen
    }
  },
  {
    initialRouteName: 'Artists',
    headerMode : 'none'
  }
)