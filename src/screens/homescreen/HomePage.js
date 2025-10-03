import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './Home.styles';

const HomePage = () => {
  return (
    <View styles={styles.mainView}>
      <View style={styles.imagetextView}>
        <Image style={styles} />
      </View>
    </View>
  );
};

export default HomePage;
