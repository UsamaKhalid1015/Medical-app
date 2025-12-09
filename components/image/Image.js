import React from 'react';
import { Image } from 'react-native';
import { styles } from './Image.style';

const CustomImage = ({ source, style }) => {
  return (
    <Image
      style={[styles.imageStyle, style]}
      source={source}
      resizeMode="cover"
    />
  );
};

export default CustomImage;
