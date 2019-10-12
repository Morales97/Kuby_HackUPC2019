
import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Alert , TouchableOpacity, TextInput} from 'react-native';

class UploadScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isbn: '', title: '', author: ''};
  }

  render(){
    return(
      <View style={{flex: 1, paddingTop:20, backgroundColor: '#f5efdf' }}>

          <Text style={{
            height: 150,
            top: 50,
            textAlign: 'center',
            color: 'black',
            fontSize: 30}}> Upload your book! </Text>
          <TextInput
            style={{height: 60, left: 30, width: 340, backgroundColor: '#f2e4bd'}}
            placeholder="ISBN"
            onChangeText={(text) => this.setState({isbn: text})}
          />
          <TextInput
            style={{height: 60, left: 30, width: 340, backgroundColor: '#f2e4bd', top: 20}}
            placeholder="Title"
            onChangeText={(text) => this.setState({title: text})}
          />
          <TextInput
            style={{height: 60, left: 30, width: 340, backgroundColor: '#f2e4bd', top: 40}}
            placeholder="Author"
            onChangeText={(text) => this.setState({author: text})}
          />

      <TouchableOpacity
        style={{alignSelf: 'center', position: 'absolute', top: 450}}
        //source={require('Kuby/images/icons/map.png')}
        onPress={() => {
          fetch('http://192.168.43.117:3000/books', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify({
                isbn: this.state.isbn,
                title: this.state.title,
                author: this.state.author
              })
            });
            //this.setState({isbn: '', title: '', author: ''});
        }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold'}}> Send </Text>
      </TouchableOpacity>
    </View>

    );
  }
}

export default UploadScreen;
