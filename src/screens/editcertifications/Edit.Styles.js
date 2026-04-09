import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: '20%',
    paddingHorizontal: 20,
    flex: 1,
  },
  headingContainer: {
    flexDirection: 'row',
  },
  arrow: {
    width: 15,
    height: 15,
  },
  titleText: {
    marginLeft: 90,
    fontWeight: 600,
  },
  modelContainer: {
    marginTop: 30,
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
    gap: 10,
  },
  monthStyle: {
    border: 1,
    borderColor: '#000B3618',
    flex: 2,
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
    width: '100%',
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
  imageContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  imageStyle: {
    width: '40%',
    height: 150,
    marginTop: 10,
  },
  subContainer: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  textRemove: {
    backgroundColor: '#00104010',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 10,
  },
  btnStyle: {
    backgroundColor: '#FF010110',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle1: {
    position: 'static',
    marginTop: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 15,
  },
});
