// import { useNavigation } from '@react-navigation/native';
import React from 'react-native';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import AppText from '../../../components/appText/AppText';
import { styles } from './Recovery.styles';
import Button from '../../../components/button/Button';

const RecoveryPassword = ({ navigation }) => {
  const handleNav = () => {
    navigation.navigate('verification');
  };

  return (
    <View>
      <View style={styles.topView}>
        <Image
          style={styles.imagestyle}
          source={require('./../../assets/images/app-icon.png')}
        />
        <AppText>EMTeam</AppText>
      </View>
      <View style={styles.recoveryStyle}>
        <AppText style={styles.recoveryStyle1}>Recovery Password</AppText>
        <Text style={styles.enterEmail}>
          Enter your email and we will send a recovery link.
        </Text>
        <AppText style={styles.email}>Email</AppText>
        <TextInput
          style={styles.inputEmail}
          placeholder="example@gmail.com"
        ></TextInput>
        <Button onPress={handleNav} title={'Recovery Password'} />
      </View>
      <View style={styles.line1}>
        <View style={styles.belowLine}></View>
        <Text style={styles.orText}>OR</Text>
        <View style={styles.belowLine}></View>
      </View>
      <AppText style={styles.backText}>Back to login</AppText>
    </View>
  );
};
const style = StyleSheet.create({
  recoveryStyle: {
    fontSize: 30,
  },
});
export default RecoveryPassword;
