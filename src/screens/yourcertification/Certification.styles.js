import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: '20%',
  },
  arrow: {
    width: 18,
    height: 16,
    marginBottom: 20,
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
  bottomButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  arrowSkip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skipNow: {
    color: 'black',
  },
  inputImage: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: 1,
    borderWidth: 0.5,
    height: 132,
    width: '100%',
    marginTop: 10,
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
});
