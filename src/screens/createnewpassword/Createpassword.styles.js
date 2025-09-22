import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  imageView: {
    width: 32,
    height: 32,
    objectFit: 'contain',
  },
  mainView1: {
    marginTop: 100,
    paddingHorizontal: 20,
  },
  imagetextView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  newPasswrod: {
    marginTop: 40,
    fontSize: 20,
  },
  passwrodText: {
    marginTop: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  inputPassword: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    borderColor: '#00073527',
  },
  repeateText: {
    marginTop: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  inputRepeate: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    borderColor: '#00073527',
  },
  line3: {
    marginTop: 30,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  belowLine2: {
    borderWidth: 1,
    borderRightWidth: 150,
    border: 1,
    borderColor: '#000B3618',
  },
  backText1: {
    paddingTop: 60,
    textAlign: 'center',
    fontSize: 16,
  },
});
