import React from 'react';
import { StackNavigator } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import Sec from '../screens/SecScreen';

export default StackNavigator({
    Main: {
      screen: MainScreen
    },
    Sec: {
      screen: Sec
    }
  },
  {
    initialRouteName: 'Main'
  }
);