import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 8,
    fontFamily: 'Hind-Medium',
    fontSize: 16,
    color: 'midnightblue',
  },
  deleteButtonContainer: {
    height: '100%',
    paddingLeft: 16,
    paddingRight: 0,
    marginRight: 0,
    marginLeft: 0,
  },
  deleteButton: {
    backgroundColor: 'transparent',
    paddingRight: 0,
  },
})