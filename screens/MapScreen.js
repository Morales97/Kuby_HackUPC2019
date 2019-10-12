import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, View, TouchableOpacity, FlatList} from 'react-native';
import MapView, {Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from "Kuby/components/Icon";



class MapScreen extends React.Component {

  render() {
    var data = [
      {
        key: "caca",
        lat: 41.39,
        lon: 2.11,
        name: 'Foo Place'
      },
      {
        key: "fdf",
        lat: 41.38,
        lon: 2.11,
        name: 'Foo Place 2',
      }
    ]
//sha d’iterar per cada location de la response guardada a this.state.data.body!!
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
                  <Text>Aquí hi ha una altra cafeteria'</Text>
                  <Text>descriptio</Text>
                  <Button
                    title="Open details"
                  />
                </TouchableOpacity>
              </Callout>
            </MapView.Marker>
            )
          )}



        {/*<MapView.Marker
          coordinate={{latitude: 41.3918313, longitude: 2.1155701}}
          //title={'Aquí hi ha una cafeteria'}
          title={this.state.data.body}
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
        </MapView.Marker>*/}
      </MapView>
    );
  }
}

export default MapScreen;
