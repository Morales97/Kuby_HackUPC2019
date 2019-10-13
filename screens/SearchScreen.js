import React from 'react';
import { View, Text, Link, FlatList, ActivityIndicator, StyleSheet } from 'react-native';


class SearchScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://192.168.43.224:3000/books')
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
          renderItem={({item}) => <Text style={{fontSize: 15, topMargin: 20}}>{item.title}, {item.author}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}

export default SearchScreen;
