import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AppText from '../appText/AppText';
import { styles } from './CategoryTrauma.style';
import ProgressBar from '../progressBar/ProgressBar';
const CategoryTrauma = ({
  percent,
  title1,
  title2,
  title3,
  showCompleted = true,
  showProgress = false,
  progressValue = 0,
  showPercent = true,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.firstcategory}>
        <View style={styles.container}>
          <Image
            source={require('../../src/assets/images/teddy.png')}
            style={[styles.image, styles.bottomImage]}
          />
          <Image
            source={require('../../src/assets/images/doctor.png')}
            style={[styles.image, styles.topImage]}
          />
          {showPercent && (
            <View style={styles.percentageContainer}>
              <Text style={styles.percentageText}>{percent}%</Text>
            </View>
          )}
        </View>

        <View style={styles.traumaContainer}>
          <AppText style={styles.traumaText}>{title1}</AppText>
          <Text style={styles.CompletedText}>{title2}</Text>
        </View>
        {showCompleted && (
          <View style={styles.completeText}>
            <Text style={styles.completeStyle}>{title3}</Text>
          </View>
        )}
        {showProgress && (
          <View style={{ width: '20%' }}>
            <ProgressBar progress={progressValue} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CategoryTrauma;
