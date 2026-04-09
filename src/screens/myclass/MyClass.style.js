import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: '20%',
    paddingHorizontal: 20,
    // backgroundColor: 'white',
  },
  mainScroll: {
    backgroundColor: 'white',
  },
  capSize: {
    width: 24,
    height: 24,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  myClass: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 600,
  },
  percentagContainer: {
    marginTop: 30,
  },
  averageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: 16,
    borderColor: '#00073527',
  },
  averageScore: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 24,
    color: 'black',
  },
  percentage: {
    fontSize: 20,
  },
  longestContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  collectionContainer: {
    marginTop: 20,
  },
  scenarioContainer: {
    marginTop: 40,
  },
  scanerioText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 500,
  },
});
