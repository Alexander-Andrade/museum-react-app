import { createStackNavigator } from 'react-navigation'
import GeneNavigator from './GeneNavigator'
import GenesScreen from '../screens/GenesScreen'

export default createStackNavigator({
    Genes: {
      screen: GenesScreen
    },
    Gene: {
      screen: GeneNavigator
    }
  },
  {
    initialRouteName: 'Genes',
    headerMode : 'none'
  }
)