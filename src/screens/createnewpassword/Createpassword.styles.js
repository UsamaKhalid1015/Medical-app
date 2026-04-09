import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  imageView: {
    width: '10%',
    height: 32,
    objectFit: 'contain',
  },
  mainView1: {
    marginTop: '20%',
    paddingHorizontal: 20,
    flex: 1,
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
    width: '100%',
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
    width: '100%',
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
    width: '43%',
    borderColor: '#000B3618',
  },
  backText1: {
    paddingTop: 60,
    textAlign: 'center',
    fontSize: 16,
  },
  btnUpdate: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
