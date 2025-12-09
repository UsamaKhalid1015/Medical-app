import React from 'react';
import { View, Text } from 'react-native';
import AppText from '../appText/AppText';
import { styles } from './Text.style';

const Textheading = ({ title, style, description, backgroundColor }) => {
  return (
    <View style={styles.random}>
      <View style={styles.imageLine}>
        <View
          style={[
            styles.leftBorder,
            style,
            { backgroundColor: backgroundColor },
          ]}
        />
        <AppText style={[styles.randomText, style]}>{title}</AppText>
      </View>

      <View style={styles.textContainer}>
        <Text style={[styles.styleTextKnowledge, style]}>{description}</Text>
      </View>
    </View>
  );
};

export default Textheading;
