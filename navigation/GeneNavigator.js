import { StackNavigator } from 'react-navigation'
import GeneScreen from '../screens/GeneScreen'
import ArtistScreen from '../screens/ArtistScreen'




export default StackNavigator({
    Gene: {
      screen: GeneScreen
    },
    // Artist: {
    //   screen: ArtistScreen
    // }
  },
  {
    headerMode : 'none',
    initialRouteName: 'Gene',
  }
)
