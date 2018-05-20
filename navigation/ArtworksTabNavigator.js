import React from 'react';
import { createBottomTabNavigator } from 'react-navigation'
import ArtworksScreen from '../screens/ArtworksScreen'
import FavoriteArtworksScreen from '../screens/FavoriteArtworksScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors'


export default createBottomTabNavigator({
    Artworks: {
      screen: ArtworksScreen,
      navigationOptions: {
        tabBarLabel: 'All',
      }
    },
    FavoriteArtworks: {
      screen: FavoriteArtworksScreen,
      navigationOptions: {
        tabBarLabel: 'Favorite',
      }
    }
  },
  {
    initialRouteName: 'Artworks',
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