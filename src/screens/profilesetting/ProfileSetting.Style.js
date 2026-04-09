import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: '20%',
    paddingHorizontal: 20,
    justifyContent: 'space-between', // 🔥 Important
  },

  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  arrow: {
    width: 15,
    height: 15,
  },

  titleText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
  },

  subConainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  avatarImage: {
    width: 120,
    height: 120,
  },

  carouselImage: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    borderRadius: 40,
    marginVertical: 20,
  },

  miniContainer: {
    marginTop: 10,
  },

  personalText: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: '600',
  },

  email: {
    paddingTop: 20,
    fontSize: 15,
    paddingBottom: 5,
  },

  inputEmail: {
    height: 45,
    borderWidth: 1,
    borderColor: '#00073527',
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '100%',
  },

  buttonContainer: {
    paddingBottom: 20,
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
