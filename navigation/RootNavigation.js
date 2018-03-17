import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import ArtistsScreen from '../screens/ArtistsScreen';
import ArtworksScreen from '../screens/ArtworksScreen';

export default DrawerNavigator({
    Artists: {
      screen: ArtistsScreen
    },
    Artworks: {
      screen: ArtworksScreen
    }
  },
  {
    initialRouteName: 'Artists'
  }
);