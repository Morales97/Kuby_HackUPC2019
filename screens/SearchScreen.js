import React from 'react';
import { View, Text, Link, FlatList, ActivityIndicator, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


class SearchScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isWaitingForInput: true }
  }

  getBooksByTitle(word){
    return fetch('http://192.168.1.34:3000/findBook/' + word)
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
    if(this.state.isWaitingForInput){
      return(
        <View style={{flex: 1, paddingTop:20, backgroundColor: '#f5efdf' }}>

          <Text style={{
            height: 150,
            top: 50,
            textAlign: 'center',
            color: 'black',
            fontSize: 25,
            fontWeight: 'bold'}}> Search books by title </Text>
          <TextInput
            style={{height: 60, left: 30, width: 340, backgroundColor: '#f2e4bd'}}
            placeholder="Type here"
            onChangeText={(text) => this.setState({searchWord: text})}
          />

          <TouchableOpacity
            style={{alignSelf: 'center', position: 'absolute', top: 500}}
            onPress={() => {
              this.getBooksByTitle(this.state.searchWord);
              this.setState({isWaitingForInput: false})
            }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold'}}> GO! </Text>
          </TouchableOpacity>

        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20, backgroundColor: '#f5efdf'}}>

        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text style={{fontSize: 15, marginTop: 5}}>{item.title}, {item.author}</Text>}
          keyExtractor={({id}, index) => id}
        />

        <TouchableOpacity
          style={{alignSelf: 'center', position: 'absolute', top: 500}}
          onPress={() => {
            this.setState({
              isWaitingForInput: true,
              dataSource: '',
            })
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold'}}> Go back to Search </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default SearchScreen;
