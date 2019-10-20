import React from 'react';
import { View, Text, Link, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';


class ListBooksScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  getBooks(){
    return fetch('http://192.168.1.34:3000/books')
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

  componentDidMount(){
    this.getBooks();
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
      <View style={{flex: 2, paddingTop:80, backgroundColor: '#f5efdf'}}>

        <TouchableOpacity
          style={{alignSelf: 'center', position: 'absolute', marginTop: 30}}
          onPress={() => {
            this.getBooks();
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'blue'}}> Click to refresh </Text>
        </TouchableOpacity>

        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text style={{fontSize: 15, marginTop: 5}}>{item.title}, {item.author}</Text>}
          keyExtractor={({id}, index) => id}
        />
        
      </View>
    );
  }
}

export default ListBooksScreen;
