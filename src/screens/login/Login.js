import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { styles } from './Login.Style';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../components/button/Button';

const Login = () => {
  const navigation = useNavigation();
  const [securePassword, setSecurePassword] = useState(true);

  const handleNav = () => {
    navigation.navigate('signup1');
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.mainContainer}>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <StatusBar barStyle={'dark-content'} />

          <View style={styles.topView}>
            <View style={styles.imageView}>
              <Image
                style={styles.imageStyle}
                source={require('./../../assets/images/app-icon.png')}
              />
              <Text style={styles.titleStyle}>EMTeam</Text>
            </View>

            <TouchableOpacity style={styles.touchAccount} activeOpacity={0.7}>
              <Text style={styles.accountText}>Create an account</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.accountContainer}>
            <Text style={styles.loginText}>Login to your account</Text>

            <Text style={styles.emailText}>Email</Text>
            <TextInput
              style={styles.emailInput}
              placeholder="example@gmail.com"
            />

            <Text style={styles.passwordText}>Password</Text>

            {/* PASSWORD FIELD WITH EYE ICON */}
            <View style={{ position: 'relative', width: '100%' }}>
              <TextInput
                style={styles.enterpasswordText}
                secureTextEntry={securePassword}
                placeholder="Enter your password"
              />

              <TouchableOpacity
                style={styles.hidepass}
                onPress={() => setSecurePassword(!securePassword)}
              >
                <Image
                  style={styles.passwordHide}
                  source={
                    securePassword
                      ? require('./../../assets/images/eye.png')
                      : require('./../../assets/images/eye-open.png')
                  }
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.forgotText}>Forgot password?</Text>

            <Button
              style={styles.btnContinue}
              onPress={handleNav}
              title={'Continue with email '}
              textColor={'white'}
            />

            <View style={styles.container}>
              <View style={styles.line}></View>
              <Text>OR</Text>
              <View style={styles.line}></View>
            </View>

            <TouchableOpacity style={styles.touchImage} activeOpacity={0.7}>
              <Image
                style={styles.imageStyle1}
                source={require('./../../assets/images/Google.png')}
              />
              <Text style={styles.googleText}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchApple} activeOpacity={0.7}>
              <Image
                style={styles.imageStyle1}
                source={require('./../../assets/images/Apple.png')}
              />
              <Text style={styles.appleText}>Continue with Apple</Text>
            </TouchableOpacity>

            <Text style={styles.lastText}>© 2024 Solver Healthcare LLC.</Text>
            <Text style={styles.lastText1}>
              All rights reserved. Patent Pending.
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

export default Login;
