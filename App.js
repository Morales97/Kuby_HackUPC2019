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
import MapScreen from "./screens/MapScreen";
import MapFakeScreen from "./screens/MapFakeScreen";
import SearchScreen from "./screens/SearchScreen";
import ListBooksScreen from "./screens/ListBooksScreen";
import UploadScreen from "./screens/UploadScreen";
import UserScreen from "./screens/UserScreen";
import Icon from "./components/Icon";

const AppNavigator = createBottomTabNavigator(
  {
    Map: {
        screen: MapScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="map" size={20}/>
          )
        },
    },
    Search: {
        screen: SearchScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="search" size={20}/>
          )
        },
    },
    List: {
        screen: ListBooksScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="list" size={20}/>
          )
        },
    },
    Upload: {
        screen: UploadScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="upload" size={20}/>
          )
        },
    },
    User: {
        screen: UserScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="user" size={20}/>
          )
        },
    },
  },
  {
    initialRouteName: 'Map',
    tabBarOptions: {
      showLabel: 'False',
      activeTintColor: 'white',
      inactiveTintColor: 'black',
      activeBackgroundColor: '#697094',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#f2933f',
      },
    },
  }
);


export default createAppContainer(AppNavigator);
