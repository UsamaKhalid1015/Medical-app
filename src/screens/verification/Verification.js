import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppText from '../../../components/appText/AppText';
import { styles } from './Verify.styles';
import { TextInput } from 'react-native-gesture-handler';
import Button from '../../../components/button/Button';

const Verification = ({ navigation }) => {
  const handleNav = () => {
    navigation.navigate('createnewpassword');
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.belowMain1}>
        <Image
          style={styles.imageView3}
          source={require('./../../assets/images/app-icon.png')}
        />
        <AppText>EMTeam</AppText>
      </View>
      <View>
        <AppText style={styles.verifyCode}>Verification code</AppText>
        <Text style={styles.enterText}>
          Enter a code we just sent to your email
        </Text>
        <View style={styles.mainInput}>
          <TextInput style={styles.inputValue}>1</TextInput>
          <TextInput style={styles.inputValue}>2</TextInput>
          <TextInput style={styles.inputValue}>3</TextInput>
          <TextInput style={styles.inputValue}>4</TextInput>
          <TextInput style={styles.inputValue}>5</TextInput>
        </View>
        <Button
          onPress={handleNav}
          style={{ marginRight: 10 }}
          title={'Continue'}
        />
      </View>
      <View style={styles.line2}>
        <View style={styles.belowLine1}></View>
        <Text style={styles.orText1}>OR</Text>
        <View style={styles.belowLine1}></View>
      </View>
      <AppText style={styles.backText1}>Back to login</AppText>
    </View>
  );
};

export default Verification;
