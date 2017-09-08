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
const GridItem = require('../components/GridItem');
const styles = require('../styles/styles');

import firebaseApp from '../components/firebase';

export default class Noticies extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('wgcv').orderByKey();
  }

  getRef() {
    return firebaseApp.database().ref('Register');
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
      	var exercise = [];
    	child.forEach((exChild) => {

    		if(child.val().date != exChild.val() && child.val().type != exChild.val && child.val().time != exChild.val()){
    		exercise.push({
          	distance: exChild.val().distance,
          	repetition: exChild.val().repetition,
          	time: exChild.val().time,
          	type: exChild.val().weight,
          	weight: exChild.val().type,
          	_key: exChild.key
    		});
    		}
    	});
        items.push({
          date: child.val().date,
          type: child.val().type,
          time: child.val().time,

          exercise: exercise,
          _key: child.key
        });
        
      });
      console.log(items);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items.reverse())
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
          contentContainerStyle={styles.GridView}>
          </ListView>
        <ActionButton onPress={this._addItem.bind(this)} title="Add" />
      </View>
    )
  }

  _addItem() {
    this.props.navigation.navigate('AddRegister');
  }

  _renderItem(item) {

    const onPress = () => {this.props.navigation.navigate('RegisterDetail', { id: item._key})};

    return (
      <GridItem item={item} onPress={onPress} />
    );
  }
}