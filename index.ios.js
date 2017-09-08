/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

import Notices from './src/page/notices';
import Notice from './src/page/notice';
import RegisterDetail from './src/page/registerDetail';
import Register from './src/page/register';
import AddRegister from './src/page/addRegister';



const Menu = DrawerNavigator({
  Noticias: {
    screen: Notices,
  },
  Activity: {
    screen: Register,
  },
}
);
const MyApp = StackNavigator({
  menu: {
    screen: Menu,
  },
  Notice: {
    screen: Notice,
},
  RegisterDetail: {
    screen: RegisterDetail,
} ,
AddRegister: {
    screen: AddRegister,
  },
},
{
    headerMode:'none',
}
);

export default class Gymtonic extends Component {
  // Initialize Firebase

  render() {
    return (
        <MyApp />

    );
  }

}
AppRegistry.registerComponent('Gymtonic', () => Gymtonic);
