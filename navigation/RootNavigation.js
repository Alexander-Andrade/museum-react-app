import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import ArtistsNavigator from './ArtistsNavigator'
import ArtworksNavigator from './ArtworksNavigator'
import GenesNavigator from './GenesNavigator'


export default createDrawerNavigator({
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