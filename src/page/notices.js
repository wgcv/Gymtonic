import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  AlertIOS,
  TouchableHighlight
} from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

const Navbar = require('../components/Navbar');
const ActionButton = require('../components/ActionButton');
const ListItem = require('../components/ListItem');
const styles = require('../styles/styles');
/*
const firebaseConfig = {
  apiKey: "AAAA5xkBimw:APA91bHHb8E3xxqneGWq20xkRg4hUv3XDbk19A5sBEfavXPrE5Ox03HW7wNgwFclDchSRg95F4s5DrPAm0tGconrNtAt58vG1dNbI5BNU3XDqm6d-H4VAHoFpxyD14LDsTw3TWT5IeSY",
  authDomain: "https://gymtonic-cfe19.firebaseapp.com",
  databaseURL: "https://gymtonic-cfe19.firebaseio.com",
  storageBucket: "gs://gymtonic-cfe19.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
*/
import firebaseApp from '../components/firebase';

export default class Noticies extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('Noticias');
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          img: child.val().img,
          title: child.val().title,
          preview: child.val().preview,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {
    return (
      <View style={styles.container}>

        <Navbar title="Gymtonic" navigation = {this.props.navigation}/>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          enableEmptySections={true}
          style={styles.listview}>
          </ListView>

      </View>
    )
  }

  _addItem() {
    AlertIOS.prompt(
      'Add New Item',
      null,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ title: text })
          }
        },
      ],
      'plain-text'
    );
  }

  _renderItem(item) {

    const onPress = () => {this.props.navigation.navigate('Notice', { id: item._key})};

    return (
      <ListItem item={item} onPress={onPress} />
    );
  }
}