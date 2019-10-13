import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, View, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import MapView, {Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from "Kuby/components/Icon";


class MapScreen extends React.Component {

  render() {

    var data = [
      {
        key: "5da26ac42e27b1664374f285",
        lat: 41.403899,
        lon: 2.173844,
        name: 'Sagrada Família'
      },
      {
        key: "5da26b0ac0c0c266569b177a",
        lat: 41.386964,
        lon: 2.17007,
        name: 'Plaça Catalunya',
      },
      {
        key: "5da26b0ac0c0c266569b177a",
        lat: 41.388489,
        lon: 2.112031,
        name: 'UPC',
      },
      {
        key: "5da26b0ac0c0c266569b177a",
        lat: 41.413629,
        lon: 2.152936,
        name: 'Parc Güell',
      },
      {
        key: "5da26b0ac0c0c266569b177a",
        lat: 41.389638,
        lon: 2.152664,
        name: 'Hospital Clínic',
      }
    ];

    return (
      <MapView
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: 41.3918313,
          longitude: 2.1155701,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>

          {data.map(marker => (
            <MapView.Marker
              coordinate={{latitude: marker.lat, longitude: marker.lon}}
              title={marker.name}
            >
              <Callout>
                <TouchableOpacity onPress={this.onOpenDetails}>
                  <Text>{marker.name}</Text>
                  <Text>*description*</Text>
                  <Button
                    title="Open details"
                  />
                </TouchableOpacity>
              </Callout>
            </MapView.Marker>
            )
          )}

      </MapView>
    );
  }
}

export default MapScreen;
