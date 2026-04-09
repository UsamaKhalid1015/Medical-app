import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  practiceStyle: {
    fontSize: 16,
    fontWeight: 600,
  },
  bottomSheetTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#000B3618',
    padding: 10,
    width: 393,
    alignSelf: 'center',
  },
  borderTop: {
    borderBottomWidth: 1,
    borderBottomColor: '#000B3618',
    width: 393,
    alignSelf: 'center',
    marginTop: 100,
  },
  descriptionText: {
    marginTop: 30,
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
    marginRight: 10,
  },
  bottomSheetButton: {
    flexDirection: 'row',
    gap: 10,
  },
  leavingstyle: {
    width: '50%',
    alignItems: 'center',
    backgroundColor: '#00104010',
    textAlign: 'center',
  },
  practicingStyle: {
    width: '50%',
    alignItems: 'center',
  },
  textX: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
