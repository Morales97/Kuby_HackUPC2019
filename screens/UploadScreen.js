
import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Alert , TouchableOpacity, TextInput, StyleSheet} from 'react-native';

class UploadScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isbn: '', title: '', author: '', locName: ''};
  }

  render(){
    return(
      <View style={{flex: 1, paddingTop:20, backgroundColor: '#f5efdf' }}>

          <Text style={{
            height: 150,
            top: 50,
            textAlign: 'center',
            color: 'black',
            fontSize: 25,
            fontWeight: 'bold'}}> Upload your book! </Text>
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
          <TextInput
            style={{height: 60, left: 30, width: 340, backgroundColor: '#f2e4bd', top: 60}}
            placeholder="Location"
            onChangeText={(text) => this.setState({locName: text})}
          />

      <TouchableOpacity
        style={{alignSelf: 'center', position: 'absolute', top: 500}}
        //source={require('Kuby/images/icons/map.png')}
        onPress={() => {
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
            //this.setState({isbn: '', title: '', author: ''});
        }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold'}}> Send </Text>
      </TouchableOpacity>
    </View>

    );
  }

}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#f5efdf'
   },
   inputBox: {
       width: 300,
       backgroundColor: '#eeeeee',
       borderRadius: 25,
       paddingHorizontal: 16,
       fontSize: 16,
       color: '#002f6c',
       marginVertical: 10
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
