import React from 'react';
import { createBottomTabNavigator } from 'react-navigation'
import GenesScreen from '../screens/GenesScreen'
import FavoriteGenesScreen from '../screens/FavoriteGenesScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors'


export default createBottomTabNavigator({
    Genes: {
      screen: GenesScreen,
      navigationOptions: {
        tabBarLabel: 'All',
      }
    },
    FavoriteGenes: {
      screen: FavoriteGenesScreen,
      navigationOptions: {
        tabBarLabel: 'Favorite',
      }
    }
  },
  {
    initialRouteName: 'Genes',
    headerMode : 'none',
    tabBarOptions: {
      activeTintColor: 'white',
      labelStyle: {
        fontSize: 14,
      },
      style: {
        backgroundColor: Colors.tintColor,
        borderTopWidth: 1,
        borderTopColor: 'white',
      },
      tabStyle: {
        paddingBottom: 10
      }
    }
  }
)