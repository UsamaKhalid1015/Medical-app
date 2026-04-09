import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#EAF2FF',
  },
  mainView1: {
    paddingHorizontal: 20,
    flex: 1,
    marginTop: '20%',
  },
  scenario: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 16,
  },
  scenariocompleted: {
    fontSize: 18,
    fontWeight: 600,
    color: 'black',
    lineHeight: 24,
  },
  pts: {
    fontSize: 48,
    color: '#00B1FF',
    fontWeight: 'bold',
    lineHeight: 56,
  },
  accuracy: {
    fontSize: 16,
    color: '#297C3B',
    fontWeight: 500,
    marginTop: 5,
  },
  try: {
    borderWidth: 1,
    borderColor: '#00073527',
    color: 'black',
    fontSize: 18,
    fontWeight: 500,
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 100,
  },
  message: {
    height: 24,
    width: '10%',
  },
  messageBox: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: 'white',
    padding: 20,
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#0A60FF',
    borderRadius: 12,
  },
  letText: {
    fontSize: 16,
    fontWeight: 500,
    color: 'black',
    lineHeight: 20,
  },
  shareText: {
    fontSize: 16,
    lineHeight: 20,
  },
  previous: {
    marginTop: 30,
  },
  previousText: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 500,
  },
  btnstyle: {
    backgroundColor: '#00104010',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContinue: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
  },
});
