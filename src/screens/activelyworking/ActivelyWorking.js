import React, { TouchableOpacity } from 'react-native';
import { View, Image, Text } from 'react-native';
import { styles } from './Actively.styles';
import AppText from '../../../components/appText/AppText';

const ActivelyWorking = () => {
  return (
    <View style={styles.mainViewarrow}>
      <View>
        <Image
          style={styles.arrow}
          source={require('../../assets/images/Vector.png')}
        />
      </View>
      <AppText style={styles.emtText}>Are you actively working as an</AppText>
      <AppText style={styles.emtText1}>EMT, AEMT, Paramedic or EMR?</AppText>
      <TouchableOpacity activeOpacity={0.7} style={styles.notActively}>
        <AppText style={styles.amNotText}>I am not actively working</AppText>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} style={styles.notActively1}>
        <AppText style={styles.amText}>I am actively working</AppText>
      </TouchableOpacity>
    </View>
  );
};

export default ActivelyWorking;
