import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  styleModel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: 1,
    borderColor: '#000B3618',
    width: 361,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  stylecountry: {
    paddingVertical: 20,
  },
  viewModel: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    maxHeight: 450,
    alignItems: 'flex-start',
  },
  dropDownImage: {
    height: 35,
    width: 35,
    tintColor: 'gray',
  },
  crossButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: 35,
    width: 35,
    backgroundColor: '#00000010',
    borderRadius: 5,
  },
  crossStyle: {
    color: 'black',
    fontSize: 18,
  },
  countryNameStyle: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    padding: 15,
    borderBottomColor: '#00000008',
  },
  stateNameStyle: {
    flexDirection: 'row',
    gap: 15,
    paddingVertical: 5,
  },
});
