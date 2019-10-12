
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


class MapScreen extends React.Component {
  render() {
    return (
      <MapView
         style={{ flex: 1 }}
         provider={PROVIDER_GOOGLE}
         showsUserLocation
         initialRegion={{
         latitude: 41.3918313,
         longitude: 2.1155701,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421}}
      />
    );

  }
};


export default MapScreen;
