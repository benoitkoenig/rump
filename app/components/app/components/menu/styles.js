import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  start: {
    width: '60%',
    marginTop: 60,
    marginLeft: '20%',
    paddingVertical: 24,
    borderColor: '#00d0c0',
    borderWidth: 1,
  },

  startText: {
    color: '#00d0c0',
    fontSize: 24,
    textAlign: 'center',
  },

  options: {
    marginTop: 120,
  },

  option: {
    flexDirection: 'row',
    marginTop: 10,
  },

  optionText: {
    color: '#fafafa',
    marginTop: 16,
  },

  divider: {
    backgroundColor: '#fafafa',
    marginHorizontal: 20,
  },

  picker: {
    backgroundColor: '#fafafa',
    height: 20,
    width: 40,
    marginTop: 15,
    marginHorizontal: 8,
    paddingLeft: 2,
  },

  pickerUnselected: {
    backgroundColor: '#c0c0c0',
    color: '#808080',
    height: 20,
    width: 40,
    marginTop: 15,
    marginHorizontal: 8,
    paddingLeft: 2,
  },
});
