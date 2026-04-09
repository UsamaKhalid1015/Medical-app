import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: '20%',
  },
  imagestyle: {
    width: '10%',
    height: 32,
    objectFit: 'contain',
  },
  textstyle2: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  recoveryStyle: {
    width: '100%',
    marginTop: 30,
  },
  recoveryStyle1: {
    fontSize: 18,
  },
  enterEmail: {
    fontSize: 13,
    paddingTop: '5%',
  },
  email: {
    paddingTop: '10%',
    fontSize: 15,
    paddingBottom: '1%',
  },
  inputEmail: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 30,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  line1: {
    marginTop: '12%',
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  belowLine: {
    borderWidth: 1,
    width: '43%',
    borderColor: '#000B3618',
  },
  backText: {
    paddingTop: '20%',
    textAlign: 'center',
    fontSize: 16,
  },
  recoveryButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
