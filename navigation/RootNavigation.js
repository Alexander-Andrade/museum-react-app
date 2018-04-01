import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import ArtistsNavigator from './ArtistsNavigator'
import ArtworksNavigator from './ArtworksNavigator'
import GenesNavigator from './GenesNavigator'


export default DrawerNavigator({
    Artists: {
      screen: ArtistsNavigator
    },
    Artworks: {
      screen: ArtworksNavigator
    },
    Genes: {
      screen: GenesNavigator
    }
  },
  {
    initialRouteName: 'Artists'
  }
);