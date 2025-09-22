import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 10,
    marginTop: 100,
  },
  imageView3: {
    width: 32,
    height: 32,
    objectFit: 'contain',
  },
  belowMain1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  verifyCode: {
    marginTop: 50,
    fontSize: 20,
  },
  enterText: {
    marginTop: 10,
  },
  mainInput: {
    flexDirection: 'row',
    gap: 10,
  },
  inputValue: {
    textAlign: 'center',
    borderWidth: 1,
    width: 60,
    marginTop: 10,
    borderRadius: 10,
    borderColor: '#E0E1E6',
  },
  line2: {
    marginTop: 30,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  belowLine1: {
    borderWidth: 1,
    borderRightWidth: 150,
    border: 1,
    borderColor: '#000B3618',
  },
  backText1: {
    paddingTop: 60,
    textAlign: 'center',
    fontSize: 16,
  },
});
