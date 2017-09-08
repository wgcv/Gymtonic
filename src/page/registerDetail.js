import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ListView,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import FitImage from 'react-native-fit-image';

const NavbarBack = require('../components/NavbarBack');
const ActionButton = require('../components/ActionButton');
const ListItem = require('../components/ListItem');
const styles = require('../styles/styles');
import firebaseApp from '../components/firebase';


export default class Noticies extends React.Component {

	constructor(props) {
    super(props); 
    this.state = {
    	    notice : ['asdasd'],
			exerciseText : [],
    };
      this.itemsRef = this.getRef().child('wgcv').child(this.props.navigation.state.params.id);
     

	}
  getRef() {
    return firebaseApp.database().ref('Register');
  }
  listenForItems(itemsRef) {
  	exerciseText =[];
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      	var exercise = [];
    	snap.forEach((exChild) => {

    		if(snap.val().date != exChild.val() && snap.val().type != exChild.val() && snap.val().time != exChild.val()){
    		exercise.push({
          	distance: exChild.val().distance,
          	repetition: exChild.val().repetition,
          	time: exChild.val().time,
          	type: exChild.val().type,
          	weight: exChild.val().weight,
          	_key: exChild.key
    		});
    		console.log(exChild.val());
    		}
    	       });
        items.push({
          date: snap.val().date,
          type: snap.val().type,
          time: snap.val().time,

          exercise: exercise,
          _key: snap.key
        });
  	items[0].exercise.forEach((child) => {
  		     exerciseText.push(<Text>{child.type}: {child.time} min - {child.repetition} Veces - {child.weight} Lb - {child.distance} M </Text>);


  	});
  	this.setState({
  		exerciseText:exerciseText
      });
      this.setState({
        notice: items,
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {

    return (
      <View style={styles.container}>

        <NavbarBack title='Registro' navigation = {this.props.navigation}/>
                    <Text style={styles.paTitle}>{this.state.notice[0].type}</Text>
         <ScrollView>


          <Text style={styles.liText}>Fecha: {this.state.notice[0].date} </Text>
          <Text style={styles.liText}>Tiempo: {this.state.notice[0].time} min</Text>
          <Text style={styles.paTitle}>Lista de ejercicios</Text>

        {this.state.exerciseText}

        </ScrollView>

      </View>
    )
  }

  
 
}