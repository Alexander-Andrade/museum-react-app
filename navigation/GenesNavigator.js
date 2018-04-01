import { StackNavigator } from 'react-navigation'
import GeneNavigator from './GeneNavigator'
import GenesScreen from '../screens/GenesScreen'

export default StackNavigator({
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