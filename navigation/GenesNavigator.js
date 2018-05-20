import { createStackNavigator } from 'react-navigation'
import GeneNavigator from './GeneNavigator'
import GenesTabNavigator from './GenesTabNavigator'


export default createStackNavigator({
    Genes: {
      screen: GenesTabNavigator
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