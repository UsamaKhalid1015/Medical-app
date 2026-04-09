import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainView: {
    marginTop: '20%',
    paddingHorizontal: 20,
    flex: 1,
  },
  imageView3: {
    width: '10%',
    height: 32,
    objectFit: 'contain',
  },
  belowMain1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  verifyCode: {
    marginTop: 30,
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
    width: '17%',
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
    borderColor: '#000B3618',
    width: '43%',
  },
  backText1: {
    paddingTop: 60,
    textAlign: 'center',
    fontSize: 16,
  },
  btnContinue: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
