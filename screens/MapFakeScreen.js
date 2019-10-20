import React from 'react';
import { View, Text, Link, FlatList, ActivityIndicator, StyleSheet } from 'react-native';


class MapFakeScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://192.168.1.34:3000/locations')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20, backgroundColor: '#f5efdf'}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) =>
              <Text style={{fontSize: 15, marginTop: 5}}>{item.name} lat: {item.lat} lon: {item.lon} </Text>
          }
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}


export default MapFakeScreen;
