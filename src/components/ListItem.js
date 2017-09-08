import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles/styles');
const { View, TouchableOpacity, Text, Image } = ReactNative;
import FitImage from 'react-native-fit-image';

class ListItem extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.li}>
          <Text style={styles.liTitle}>{this.props.item.title}</Text>

          <FitImage
            source={{uri: this.props.item.img }}
          />
          <Text style={styles.liText}>{this.props.item.preview}</Text>

        </View>
      </TouchableOpacity>
    );
  }
}

module.exports = ListItem;