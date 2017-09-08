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

    };
      this.itemsRef = this.getRef().child(this.props.navigation.state.params.id);
     

	}
  getRef() {
    return firebaseApp.database().ref('Noticias');
  }
 listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
       // get children as an array
      var items = [];

        items.push({
          img: snap.val().img,
          title: snap.val().title,
          preview: snap.val().preview,
          text: snap.val().text,
          _key: snap.key
        });

        this.setState({

        notice : items,
    });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {

    return (
      <View style={styles.container}>

        <NavbarBack title='Noticias' navigation = {this.props.navigation}/>
          <Text style={styles.paTitle}>{this.state.notice[0].title}</Text>
         <ScrollView>

          <Image
            style={{width: Dimensions.get('window').width, height: Dimensions.get('window').width * 0.5}}

            source={{uri: this.state.notice[0].img }}
          />

          <Text style={styles.liText}>{this.state.notice[0].text}</Text>
        </ScrollView>


      </View>
    )
  }

  
 
}