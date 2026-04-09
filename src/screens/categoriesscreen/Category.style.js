import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  mainView: {
    marginTop: '20%',
    paddingHorizontal: 20,
    flex: 1,
  },
  mainScroll: {
    backgroundColor: 'white',
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
    marginRight: 20,
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
});
