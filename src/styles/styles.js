const React = require('react-native')
const {StyleSheet, Platform} = React
const constants = {
  actionColor: '#24CE84'
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  listview: {
    flex: 1,
  },
  GridView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridTextStrong:{
  color: '#A5AEBC',
  fontWeight: "600",
  fontSize: 13,
  paddingLeft: 5,

  },
  gridText:{
  color: '#BDC4CF',
  fontSize: 11,
  paddingLeft: 7,

  },
  gridLi: {
    margin: 3,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems:'center',
  },
  li: {
    backgroundColor: '#F4F8FD',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 35,
  },
  liContainer: {
    flex: 2,
  },
  liTitle: {

    color: '#37393D',
    fontSize: 18,
    fontWeight: "600",
    paddingLeft: 5,

    paddingBottom: 10,
  },
  paTitle: {
    textAlign:'center',
    color: '#37393D',
    fontSize: 18,
    fontWeight: "600",
    paddingLeft: 5,
    paddingTop: 10,

    paddingBottom: 10,
  },
  liText: {
    paddingTop: 25,
    color: '#37393D',
    fontSize: 16,
     paddingLeft: 10,

  },
  navbar: {
    paddingLeft: 15,
    backgroundColor: '#06B2A6',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',

  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  navbarTitle: {  
  
    textAlign: 'center',
    justifyContent: 'center',

    color: '#fff',
    fontSize: 18,
    fontWeight: "500"

  },
  statusbar: {
    height: (Platform.OS === 'ios') ? 20 : 0, //this is just to test if the platform is iOS to give it a height of 20, else, no height (Android apps have their own status bar)
    backgroundColor: "white",
  },
  center: {
    textAlign: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
})

module.exports = styles
module.exports.constants = constants;