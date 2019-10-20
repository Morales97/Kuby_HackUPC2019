
import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Alert , TouchableOpacity, TextInput, StyleSheet} from 'react-native';

class UploadScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isbn: '', title: '', author: '', locName: ''};
  }

  uploadBook(){
    fetch('http://192.168.1.34:3000/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        isbn: this.state.isbn,
        title: this.state.title,
        author: this.state.author,
        locName: this.state.locName
      })
    });
  }

  render(){

    return(
      <View style={{flex: 1, paddingTop:20, backgroundColor: '#f5efdf' }}>

          <Text style={styles.title}> Upload your book! </Text>
          <TextInput
            style={styles.inputBox}
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
          <TextInput
            style={{height: 60, left: 30, width: 340, backgroundColor: '#f2e4bd', top: 60}}
            placeholder="Location"
            onChangeText={(text) => this.setState({locName: text})}
          />

      <TouchableOpacity
        style={{alignSelf: 'center', position: 'absolute', top: 500}}
        onPress={() => {
          this.uploadBook();
        }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold'}}> Send </Text>
      </TouchableOpacity>
    </View>
    );

  }

}

const styles = StyleSheet.create({
   title: {
     height: 150,
     top: 50,
     textAlign: 'center',
     color: 'black',
     fontSize: 25,
     fontWeight: 'bold'
   },
   inputBox: {
       height: 60,
       left: 30,
       width: 340,
       backgroundColor: '#f2e4bd'
   },
   button: {
       width: 300,
       backgroundColor: '#4f83cc',
       borderRadius: 25,
       marginVertical: 10,
       paddingVertical: 12
   },
   buttonText: {
       fontSize: 16,
       fontWeight: '500',
       color: '#ffffff',
       textAlign: 'center'
   },
   welcomeText: {
       fontWeight: 'bold',
       fontSize: 25,
   }
})


export default UploadScreen;
