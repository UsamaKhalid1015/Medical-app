import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './Role.styles';
import ProgressBar from '../../../components/progressBar/ProgressBar';
import AppText from '../../../components/appText/AppText';
import Button from '../../../components/button/Button';

const RolePractice = ({ navigation }) => {
  const handleNav = () => {
    navigation.navigate('currentlyworking');
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainViewarrow}>
        <Image
          style={styles.arrow}
          source={require('./../../assets/images/Vector.png')}
        />
        <ProgressBar progress={'50%'} />

        <AppText style={styles.emtText}>
          Which role would you like to practice?
        </AppText>
        <View style={styles.fourbutton}>
          <TouchableOpacity activeOpacity={0.7} style={styles.notActively}>
            <AppText style={styles.amNotText}>EMT</AppText>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.notActively}>
            <AppText style={styles.amNotText}>AEMT</AppText>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.notActively}>
            <AppText style={styles.amNotText}>Parademic</AppText>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.notActively}>
            <AppText style={styles.amNotText}>EMR</AppText>
          </TouchableOpacity>
        </View>
      </View>
      <Button
        style={styles.buttonBottom}
        onPress={handleNav}
        title={'Continue'}
      />
    </View>
  );
};

export default RolePractice;
