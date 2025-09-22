import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imagestyle: {
    width: 32,
    height: 32,
    objectFit: 'contain',
  },
  textstyle2: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
  },
  topView: {
    marginLeft: 20,
    marginTop: 100,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingBottom: 18,
  },
  recoveryStyle: {
    paddingHorizontal: 25,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 20,
    alignSelf: 'flex-start',
  },
  recoveryStyle1: {
    fontSize: 18,
  },
  enterEmail: {
    fontSize: 13,
    paddingTop: 10,
  },
  email: {
    paddingTop: 20,
    fontSize: 15,
    paddingBottom: 5,
  },
  inputEmail: {
    height: 40,
    borderWidth: 1,
    borderColor: '#00073527',
    borderRadius: 5,
  },
  line1: {
    marginTop: 30,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  belowLine: {
    borderWidth: 1,
    borderRightWidth: 150,
    border: 1,
    borderColor: '#000B3618',
  },
  backText: {
    paddingTop: 60,
    textAlign: 'center',
    fontSize: 16,
  },
});
