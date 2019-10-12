import React from 'react';
import { View, Text } from 'react-native';

class UserScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5efdf' }}>
        <Text>USER Screen!</Text>
      </View>
    );
  }
}

export default UserScreen;
