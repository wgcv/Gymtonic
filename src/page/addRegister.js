import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  AlertIOS,
  TouchableHighlight,
  Picker,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import DatePicker from 'react-native-datepicker'

const Navbar = require('../components/Navbar');
const ActionButton = require('../components/ActionButton');
const GridItem = require('../components/GridItem');
const styles = require('../styles/styles');

import firebaseApp from '../components/firebase';

export default class Noticies extends React.Component {
	constructor(props) {
    super(props);
    this.state = {date:"09/07/2017"}
    this.state = {type:"velocity"}
    this.state = {time: "45" };
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('wgcv');

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
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {
    return (
    	<TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container}>

        <Navbar title="Gymtonic" navigation = {this.props.navigation}/>
        <Text style={{fontSize: 16,fontWeight: '500'}} >Time:</Text>
         <TextInput keyboardType="numeric"
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
       onChangeText={(time) => this.setState({time})}

        value={this.state.text}
      />
       
		 <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="MM/D/YYYY"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
       <Picker
  		selectedValue={this.state.type}
  onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
  <Picker.Item label="Velocity" value="velocity" />
  <Picker.Item label="Resistence" value="resistence" />
   <Picker.Item label="Force" value="force" />

</Picker>
        <ActionButton onPress={this._addItem.bind(this)} title="Save" />
      </View>
      </TouchableWithoutFeedback>

    )
  }

  _addItem() {
             this.itemsRef.push({ date: this.state.date, type:this.state.type, time:this.state.time});
    this.props.navigation.navigate('Activity');
  }

  
}