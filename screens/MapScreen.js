import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, View, TouchableOpacity} from 'react-native';
import MapView, {Callout, PROVIDER_GOOGLE} from 'react-native-maps';

var markers = [
  {
    latitude: 41.39,
    longitude: 2.11,
    title: 'Foo Place',
    subtitle: '1234 Foo Drive',
  },
];

class MapScreen extends React.Component {
  onOpenDetails() {
    console.log("Super console log")
    alert("Pressedd")
  }
  render() {
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
        <MapView.Marker
          coordinate={{latitude: 41.3918313, longitude: 2.1155701}}
          title={'Aquí hi ha una cafeteria'}
          description={'description'}
        />
        <MapView.Marker
          coordinate={{latitude: 41.3718313, longitude: 2.1255701}}
          title={'Aquí hi ha una altra cafeteria'}
          description={'description'}
        >
          <View><Text>TODO: Poner icono</Text></View>
          <Callout>
            <TouchableOpacity onPress={this.onOpenDetails}>
              <Text>Aquí hi ha una altra cafeteria'</Text>
              <Text>descriptio</Text>
              <Button
                title="Open details"
              />
            </TouchableOpacity>
          </Callout>
        </MapView.Marker>
      </MapView>
    );
  }
}

export default MapScreen;
