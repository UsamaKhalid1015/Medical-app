import { Image, View } from 'react-native';
import { styles } from './Collagen.styles';
import React from 'react';

const Collage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../src/assets/images/teddy.png')}
        style={[styles.image, styles.bottomImage]}
      />
      <Image
        source={require('../../src/assets/images/doctor.png')}
        style={[styles.image, styles.topImage]}
      />
    </View>
  );
};

export default Collage;
