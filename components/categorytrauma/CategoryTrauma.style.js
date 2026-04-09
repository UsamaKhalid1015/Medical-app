import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  mainView: {
    marginTop: 100,
    // marginLeft: 20,
    // marginRight: 20,
  },
  categoryLogo: {
    width: 24,
    height: 24,
  },
  catelogo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 28,
  },
  container: {
    width: 40,
    height: 40,
    flexDirection: 'row',
  },

  image: {
    width: 46,
    height: 46,
  },
  bottomImage: {
    position: 'absolute',
    right: 6,
    top: 10,
  },
  topImage: {
    bottom: 5,
  },
  firstcategory: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  completeText: {
    backgroundColor: '#46A758',
    borderRadius: 20,
    alignSelf: 'flex-start',
    paddingVertical: 3,
    paddingHorizontal: 6,
    color: 'white',
  },
  traumaContainer: {
    flex: 1,
    marginLeft: 20,
  },
  traumaText: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 24,
  },
  completeStyle: {
    color: 'white',
  },
  CompletedText: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
  },
  percentageContainer: {
    position: 'absolute',
    alignSelf: 'flex-start',
    top: '80%',
    backgroundColor: '#2E62FF',
    borderRadius: 20,
    height: 22,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  percentageText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  usama: {
    flexDirection: 'row',
  },
  progress: {
    width: '10%',
  },
});
