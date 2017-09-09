import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';

import MsgScreen from './tabPages/MsgScreen';
import BookScreen from './tabPages/BookScreen';
import AdminScreen from './tabPages/AdminScreen';
import DiscoverScreen from './tabPages/DiscoverScreen';
import MineScreen from './tabPages/MineScreen';


// const msgIcon = require('./image/message.png');
// const bookIcon = require('./image/book.png');
// const adminIcon = require('./image/admin.png');
// const discoverIcon = require('./image/discover.png');
// const mineIcon = require('./image/mine.png');

const msgIcon = require('./image/mine.png');
const bookIcon = require('./image/mine.png');
const adminIcon = require('./image/mine.png');
const discoverIcon = require('./image/mine.png');
const mineIcon = require('./image/mine.png');


const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
});

const MainScreenNavigator = TabNavigator(
  {
    Msg: {
      screen: MsgScreen,
      navigationOptions: {
        title: '消息',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) =>
          <Image source={msgIcon} style={[styles.icon, { tintColor }]} />
      }
    },

    Book: {
      screen: BookScreen,
      navigationOptions: {
        title: '通讯录',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) =>
          <Image source={bookIcon} style={[styles.icon, { tintColor }]} />
      }
    },

    Admin: {
      screen: AdminScreen,
      navigationOptions: {
        title: '管理',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) =>
          <Image source={adminIcon} style={[styles.icon, { tintColor }]} />
      }
    },

    Discover: {
      screen: DiscoverScreen,
      navigationOptions: {
        title: '发现',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) =>
          <Image source={discoverIcon} style={[styles.icon, { tintColor }]} />


      }
    },

    Mine: {
      screen: MineScreen,
      navigationOptions: {
        title: '我的',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) =>
          <Image source={mineIcon} style={[styles.icon, { tintColor }]} />
      }
    }

  },

  {
    tabBarPosition: 'bottom',
    lazy: true, // 是否懒加载
    initialRouteName: 'Discover',

    tabBarOptions: {

      activeTintColor: '#29a1f7',
      inactiveTintColor: '#888',

      showIcon: true,

      pressOpacity: 0.1,


      style: {
        height: 60,
        // border: 'none',
        backgroundColor: '#ccc',
        zIndex: 0,
        position: 'relative'
      },


      // tabStyle: {
      //   backgroundColor: '#ccc',
      // },

      // labelStyle: {
      //   fontSize: 11,
      //   paddingVertical: 0,
      //   marginTop: -4
      // },
      // iconStyle: {
      //   marginTop: -3
      // },

    }

  }


);

export default MainScreenNavigator;
