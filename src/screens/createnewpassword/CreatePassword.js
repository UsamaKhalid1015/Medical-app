import React from 'react';
import { Text, Image, TextInput, View } from 'react-native';
import AppText from '../../../components/appText/AppText';
import Button from '../../../components/button/Button';
import { styles } from './Createpassword.styles';

const CreatePassword = ({ navigation }) => {
  const handleNav = () => {
    navigation.navigate('activelyworking');
  };
  return (
    <View style={styles.mainView1}>
      <View style={styles.imagetextView}>
        <Image
          style={styles.imageView}
          source={require('../../assets/images/app-icon.png')}
        />
        <AppText>EMTeam</AppText>
      </View>
      <View>
        <AppText style={styles.newPasswrod}>Create a new Password</AppText>
        <Text style={styles.passwrodText}>Password</Text>
        <TextInput style={styles.inputPassword} secureTextEntry={true} />
        <Text style={styles.repeateText}>Repeate password</Text>
        <TextInput style={styles.inputRepeate} secureTextEntry={true} />
        <Button onPress={handleNav} title={'Update password'} />
      </View>
      <View style={styles.line3}>
        <View style={styles.belowLine2}></View>
        <Text>OR</Text>
        <View style={styles.belowLine2}></View>
      </View>
      <AppText style={styles.backText1}>Back to login</AppText>
    </View>
  );
};

export default CreatePassword;
