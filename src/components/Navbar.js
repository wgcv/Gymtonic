'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles/styles');
const { StyleSheet, Text, View, Button, TouchableOpacity, Image, Platform} = ReactNative;
import { DrawerNavigator, StackNavigator } from 'react-navigation';

class Navbar extends Component {

  constructor(props) {
       super(props);

     }


  render() {
        const { navigate } = this.props.navigation;

    return (

      <View>
        <View style={styles.statusbar}/>
        <View style={[styles.navbar, this.props.style  || {}]}>
        <View style={styles.leftContainer}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
        <Image
          style={{width: 25, height: 20}}
        source={require('../images/hamburgerMenu.png')}
         />
        </TouchableOpacity>
        </View>
          <Text style={styles.navbarTitle}>{this.props.title}</Text>

        <View style={styles.rightContainer}>

          </View>
               </View>

      </View>
    );
  }
  _onPressButton(){

      this.props.navigation.navigate('DrawerOpen');
     }
}

module.exports = Navbar;
