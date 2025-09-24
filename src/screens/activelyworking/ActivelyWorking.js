import React, { TouchableOpacity } from 'react-native';
import { View, Image, Text } from 'react-native';
import { styles } from './Actively.styles';
import AppText from '../../../components/appText/AppText';
import ProgressBar from '../../../components/progressBar/ProgressBar';
import { Button } from 'react-native/types_generated/index';

const ActivelyWorking = () => {
  return (
    <View style={styles.mainViewarrow}>
      <View>
        <Image
          style={styles.arrow}
          source={require('../../assets/images/Vector.png')}
        />
        <ProgressBar progress={'30%'} />
      </View>
      <AppText style={styles.emtText}>Are you actively working as an</AppText>
      <AppText style={styles.emtText1}>EMT, AEMT, Paramedic or EMR?</AppText>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.notActively}
        //   selectedOption === 'not working' && styles.selectedOption,
        // ]
        // onPress={() => handleSelect('working')}
      >
        <AppText style={styles.amNotText}>
          I am not actively working
          {/* {selectedOption === 'working' ? '✅ ' : ''}  */}
        </AppText>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.notActively1}
        // onPress={handleContinue}
      >
        <AppText style={styles.amText}>I am actively working</AppText>
      </TouchableOpacity>
      {/* <Button title={'Continue'} /> */}
    </View>
  );
};

export default ActivelyWorking;
