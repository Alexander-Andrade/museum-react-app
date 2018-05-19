import React from 'react';
import { createBottomTabNavigator } from 'react-navigation'
import ArtistsScreen from '../screens/ArtistsScreen'
import FavoriteArtistsScreen from '../screens/FavoriteArtistsScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors'


export default createBottomTabNavigator({
    Artists: {
      screen: ArtistsScreen,
      navigationOptions: {
        tabBarLabel: 'All',
      }
    },
    FavoriteArtists: {
      screen: FavoriteArtistsScreen,
      navigationOptions: {
        tabBarLabel: 'Favorite',
      }
    }
  },

  {
    initialRouteName: 'Artists',
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
        alignItems: 'center',
    justifyContent: 'center',
      },
    }
  }
)