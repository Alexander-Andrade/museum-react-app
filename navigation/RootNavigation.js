import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import ArtistsNavigator from './ArtistsNavigator'
import ArtworksScreen from '../screens/ArtworksScreen'



export default DrawerNavigator({
    Artists: {
      screen: ArtistsNavigator
    },
    Artworks: {
      screen: ArtworksScreen
    }
  },
  {
    initialRouteName: 'Artists'
  }
);