import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles/styles');
const { View, TouchableOpacity, Text, Image } = ReactNative;
import FitImage from 'react-native-fit-image';

class GridItem extends Component {
  render() {
  	var color ='';
  	var icon='';
  	var spliyDate =this.props.item.date.split("/");
	var date = new Date(spliyDate[1], spliyDate[0] - 1, spliyDate[2])
	var dayName = date.toString().split(' ')[0];


	switch(this.props.item.type) {
    case 'force':
        color = '#969FAB';
        icon = require('../images/dumbbellIcon.png');
        break;
    case 'velocity':
        color = '#8A61BD';
        icon = require('../images/timeIcon.png');
        break;
    case 'resistence':
        color = '#FFBB52';
        icon = require('../images/shoesIcon.png');
        break;
	}
	    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={[styles.gridLi,{backgroundColor: color}]} >

        <View >
        <Image
          style={{width: 55, height: 55}}
                    source={icon} />
         </View>
        </View>

          <View>
          <Text style={styles.gridTextStrong}>{dayName} {spliyDate[1]}</Text>
          <Text style={styles.gridText}>{this.props.item.time} Min</Text>
        </View>


      </TouchableOpacity>
    );
  }
}

module.exports = GridItem;