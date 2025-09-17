import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const LogIn = () => {
  return (
    <>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <StatusBar barStyle={'dark-content'} />
        <View
          style={{
            justifyContent: 'space-between',
            gap: 10,
            flexDirection: 'row',
          }}
        >
          <View style={{ marginLeft: 20, marginTop: 100 }}>
            <View style={styles.imageView}>
              <Image
                style={styles.imageStyle}
                source={require('./src/assets/images/app-icon.png')}
              />
              <Text style={styles.titleStyle}>EMTeam</Text>
            </View>
          </View>
          <View style={{ marginTop: 60, marginRight: 20 }}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                backgroundColor: '#005AFF14',
                width: 147,
                height: 32,
                marginTop: 40,
                borderRadius: 22,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  backgroundColor: 'accent alpha/3',
                  color: '#0038DCD8',
                  fontSize: 14,
                  fontWeight: 500,
                  lineHeight: 20,
                  letterSpacing: 0,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 20,

            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: 'black',

              paddingBottom: 20,
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: 40,
              alignSelf: 'flex-start',
            }}
          >
            Login to your account
          </Text>
          <Text
            style={{
              fontSize: 14,
              textAlign: 'left',
              alignSelf: 'flex-start',
              marginBottom: 15,
              paddingLeft: 10,
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            Email
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              width: '100%',
              marginBottom: 30,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
            placeholder="example@gmail.com"
          />
          <Text
            style={{
              fontSize: 14,
              textAlign: 'left',
              alignSelf: 'flex-start',
              marginBottom: 15,
              paddingLeft: 10,
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            Password
          </Text>

          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              width: '100%',
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
            secureTextEntry={true}
            placeholder="Enter your password"
          />

          <Text
            style={{
              color: 'black',
              alignSelf: 'flex-end',
              fontWeight: 'bold',
              marginTop: 10,
            }}
          >
            Forgot password?
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              marginTop: 30,
              backgroundColor: '#2E62FF',
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                width: 290,
                height: 23,

                textAlign: 'center',
              }}
            >
              Continue with email
            </Text>
          </TouchableOpacity>
          <View style={styles.container}>
            <View style={styles.line}></View>
            <Text style={styles.textOr}>OR</Text>
            <View style={styles.line}></View>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              width: '100%',
              marginTop: 30,
              backgroundColor: 'white',
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: 'lightgrey',
            }}
          >
            <Image
              style={styles.imageStyle1}
              source={require('./src/assets/images/Google.png')}
            />

            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 14,

                height: 23,

                textAlign: 'center',
              }}
            >
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              marginTop: 30,
              backgroundColor: 'white',
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: 'lightgrey',
              gap: 10,
            }}
          >
            <Image
              style={styles.imageStyle1}
              source={require('./src/assets/images/Apple.png')}
            />
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 14,
                // width: 290,
                height: 16,

                textAlign: 'center',
              }}
            >
              Continue with Apple
            </Text>
          </TouchableOpacity>
          <Text style={styles.lastText}>© 2024 Solver Healthcare LLC.</Text>
          <Text style={styles.lastText1}>
            All rights reserved. Patent Pending.
          </Text>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  imageView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  imageStyle: {
    height: 32,
    width: 32,
    objectFit: 'contain',
  },
  imageStyle1: {
    height: 25,
    width: 25,
    objectFit: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lastText: {
    marginTop: 80,
    color: 'black',
  },
  lastText1: {
    color: 'black',
  },
  line: {
    borderWidth: 1,
    borderRightWidth: 150,
    borderColor: '#000B3618',
  },

  container: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LogIn;
