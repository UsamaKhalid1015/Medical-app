import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
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
  amNotText: {
    alignSelf: 'flex-start',
    paddingTop: 14,
    fontSize: 18,
  },
  fourbutton: {
    marginTop: 20,
  },
  notActively: {
    border: 1,
    borderColor: '#000B3618',
    width: '100%',
    height: 56,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
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
