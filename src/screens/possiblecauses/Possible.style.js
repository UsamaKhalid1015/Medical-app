import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  mainViewarrow: {
    paddingHorizontal: 10,
    marginTop: 100,
  },
  threecomponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  clock: {
    width: 18,
    height: 18,
  },
  Time: {
    backgroundColor: '#005AFF14',
    flexDirection: 'row',
    padding: 8,
    borderRadius: 20,
  },
  minuteHours: {
    color: '#001959EA',
    fontWeight: 500,
    fontSize: 14,
    marginLeft: 5,
  },
  arrow: {
    width: 18,
    height: 16,
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
    width: 361,
    height: 56,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  bottomButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  pageStyle: {
    width: 16,
    height: 20,
  },
  bottomReport: {
    backgroundColor: '#00104010',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 16,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    width: '95%',
  },
  pageimage: {
    flexDirection: 'row',
    gap: 10,
  },
  cardStyle: {
    backgroundColor: '#2E62FF',
    paddingLeft: 12,
    paddingRight: 12,
    padding: 6,
    borderRadius: 24,
  },
  textView: {
    color: 'white',
    fontSize: 14,
    fontWeight: 500,
  },
});
