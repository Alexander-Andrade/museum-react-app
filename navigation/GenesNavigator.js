import { StackNavigator } from 'react-navigation'
import GeneScreen from '../screens/GeneScreen'
import GenesScreen from '../screens/GenesScreen'

export default StackNavigator({
    Genes: {
      screen: GenesScreen
    },
    Gene: {
      screen: GeneScreen
    }
  },
  {
    initialRouteName: 'Genes',
    headerMode : 'none'
  }
)