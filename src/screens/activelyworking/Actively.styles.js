import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  mainViewarrow: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: '20%',
  },
  arrow: {
    width: '5%',
    height: 16,
    marginBottom: 20,
  },
  emtText: {
    marginTop: 50,
    fontSize: 20,
  },
  emtText1: {
    fontSize: 20,
  },
  progressBar: {
    width: '10%',
  },
  notActively: {
    border: 1,
    borderColor: '#000B3618',
    width: '100%',
    height: 56,
    marginTop: 40,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  amNotText: {
    alignSelf: 'flex-start',
    fontSize: 18,
    paddingTop: 14,
  },
  amText: {
    fontSize: 18,
  },
  bottomButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
