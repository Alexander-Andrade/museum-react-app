import { StackNavigator } from 'react-navigation'
import ArtworkScreen from '../screens/ArtworkScreen'
import ArtistNavigator from './ArtistNavigator'


export default StackNavigator({
    Artwork: {
      screen: ArtworkScreen
    },
    Artist: {
      screen: ArtistNavigator
    }
  },
  {
    headerMode : 'none',
    initialRouteName: 'Artwork',
  }
)
