import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: '20%',
    paddingHorizontal: 20,
    flex: 1,
  },
  subContainer: {
    marginTop: 40,
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
    // width: 350,
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
  bottomButton: {
    position: 'static',
    width: '100%',
    bottom: 15,
  },
  arrowSkip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skipNow: {
    color: 'black',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputImage: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: 1,
    borderWidth: 0.5,
    height: 150,
    width: '100%',
    // marginTop: 10,
    borderStyle: 'dashed',
    borderColor: '#00063332',
    backgroundColor: '#00005506',
    borderRadius: 8,
    textAlign: 'center',
    marginTop: 20,
  },
  clickUploading: {
    textAlign: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  uploadImage: {
    height: 30,
    width: 30,
  },
  imagefont: {
    marginTop: 10,
  },
  certificateText: {
    color: 'black',
    marginTop: 20,
    fontWeight: 'bold',
  },
});
