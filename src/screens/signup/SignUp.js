import {
  Image,
  KeyboardAvoidingView,
  Linking,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AppText from '../../../components/appText/AppText';
import Button from '../../../components/button/Button';
import { styles } from './Signup.Style';
import { ScrollView } from 'react-native';

const SignUp = ({ navigation }) => {
  const handleNav = () => {
    navigation.navigate('recoverypassword');
  };
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.mainContainer}>
        <Text>SignUp Screen here is </Text>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <StatusBar barStyle={'dark-content'} />
          <View style={styles.miniMain}>
            <View>
              <View style={styles.imageView}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/images/app-icon.png')}
                />
                <Text style={styles.titleStyle}>EMTeam</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity style={styles.loginStyle} activeOpacity={0.7}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.accountContainer}>
            <AppText style={styles.accountText}>Create an account</AppText>
            <AppText style={styles.emailText}>Email</AppText>

            <TextInput
              style={styles.emailInput}
              placeholder="example@gmail.com"
            />
            <Text style={styles.passwordText}>Password</Text>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={true}
              placeholder="Enter your password"
            ></TextInput>
            <Text style={styles.forgotText}>Forgot password?</Text>
            <Button
              style={styles.emailContinue}
              onPress={handleNav}
              title={'Continue with email'}
              textColor="white"
            />
            <View style={styles.container}>
              <View style={styles.line}></View>
              <Text style={styles.textOr}>OR</Text>
              <View style={styles.line}></View>
            </View>
            <TouchableOpacity style={styles.touchGoogle} activeOpacity={0.7}>
              <Image
                style={styles.imageStyle1}
                source={require('../../assets/images/Google.png')}
              />

              <Text style={styles.continueText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchApple} activeOpacity={0.7}>
              <Image
                style={styles.imageStyle1}
                source={require('../../assets/images/Apple.png')}
              />
              <Text style={styles.appleText}>Continue with Apple</Text>
            </TouchableOpacity>
            <View style={styles.lineApple}>
              <View style={styles.lineApple1}></View>
            </View>
            <Text style={styles.underApple}>
              By signing up you agree to the
            </Text>
            <Text
              style={styles.linkText}
              onPress={() => Linking.openURL(' Terms of Services ')}
            >
              Terms of Services and Privacy Policy
            </Text>

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

export default SignUp;
