/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// Local imports
import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";


const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    User: UserScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);

