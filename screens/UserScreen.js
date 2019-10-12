import React from 'react';
import { View, Text } from 'react-native';

class UserScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>USER Screen!</Text>
      </View>
    );
  }
}

export default UserScreen;