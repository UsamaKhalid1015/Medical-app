import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  forColor: {
    backgroundColor: 'white',
    flex: 1,
  },
  mainContainer: {
    marginTop: '20%',
    paddingHorizontal: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  statslogo: {
    height: 24,
    width: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
  },
  viewpoints: {
    marginTop: 34,
    borderWidth: 1,
    borderColor: '#0000000F',
    padding: 16,
    borderRadius: 16,
  },
  starview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ptsview: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
  },
  textpoints: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
  },
  starstyle: {
    width: 28,
    height: 26,
  },
  ptsstyle: {
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.1,
    color: '#00B1FF',
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
  },
  percentage: {
    fontSize: 20,
  },
  longestContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  latestText: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 24,
  },
});
