import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  mainContainer: {
    marginTop: '20%',
    paddingHorizontal: 20,
  },
  headingContainer: {
    flexDirection: 'row',
  },
  arrow: {
    width: 20,
    height: 20,
  },
  titleText: {
    marginLeft: 90,
    fontWeight: 600,
  },
  patientImage: {
    height: 56,
    width: 56,
    borderRadius: 10,
  },
  patientDetailContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F7F9',
  },
  patientAge: {
    fontSize: 17,
    fontWeight: 600,
    lineHeight: 24,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  startButton: {
    marginRight: 20,
  },
});
