import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  arrow: {
    width: 18,
    height: 16,
    marginBottom: 20,
  },
  mainViewarrow: {
    paddingHorizontal: 10,
    marginTop: 100,
  },
  certificationText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  formStyle: {
    marginTop: 40,
  },
  certificateText: {
    color: 'black',
    marginTop: 20,
    fontWeight: 'bold',
  },
  certificateText1: {
    color: 'black',
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  dateMonth: {
    flexDirection: 'row',
    gap: 20,
  },
  monthStyle: {
    border: 1,
    borderColor: '#000B3618',
    width: 170,
    height: 40,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  license: {
    border: 1,
    borderColor: '#000B3618',
    width: 361,
    height: 56,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  licenseText: {
    marginTop: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  bottomButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  arrowSkip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skipNow: {
    color: 'black',
    // alignSelf: 'flex-end',
  },
});
