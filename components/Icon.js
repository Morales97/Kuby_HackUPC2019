import React from 'react';
import { Image } from 'react-native';

const Icon = ({ name }) => {
  if (name === 'map') {
    return (
      <Image
        source={require('../images/icons/map.png')}
        style={{ width: 25, height: 25 }}
      />
    );
  } else if (name === 'search') {
    return (
      <Image
        source={require('../images/icons/search.png')}
        style={{ width: 25, height: 25 }}
      />
    );
  } else if (name === 'upload') {
    return (
      <Image
        source={require('../images/icons/upload.png')}
        style={{ width: 25, height: 25 }}
      />
    );
  } else if (name === 'user') {
    return (
      <Image
        source={require('../images/icons/user.png')}
        style={{ width: 25, height: 25 }}
      />
    );
  } else if (name === 'pin') {
    return (
      <Image
        source={require('../images/icons/pin.png')}
        style={{ width: 15, height: 25 }}
      />
    );
  } else if (name === 'list') {
    return (
      <Image
        source={require('../images/icons/list.png')}
        style={{ width: 15, height: 25 }}
      />
    );
  }
};

export default Icon;
