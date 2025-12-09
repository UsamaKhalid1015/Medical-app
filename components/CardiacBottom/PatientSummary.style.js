import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chipscontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
  },
  chip: {
    backgroundColor: '#00104010',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  text: {
    color: '#000107E1',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 20,
  },
  historyText: {
    marginLeft: 20,
    fontSize: 16,
    color: '#1E1F24',
    fontWeight: 400,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 4,
    marginLeft: 20,
    color: '#1E1F24',
  },
  sectionText: {
    marginLeft: 20,
    color: '#1E1F24',
    fontWeight: 400,
    marginRight: 30,
  },
  vitalscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginRight: 30,
  },
  vital: {
    fontSize: 16,
    fontWeight: 600,
  },
  beginButton: {
    fontWeight: 10,
    position: 'relative',
    bottom: 30,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 60,
  },
});
