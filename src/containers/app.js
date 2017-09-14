/*
 * @Author: shuaixc 
 * @Date: 2017-09-12 22:14:18 
 * @Last Modified by: shuaixc
 * @Last Modified time: 2017-09-14 22:14:39
 */

 
import React from 'react';
import { Image, StyleSheet } from 'react-native';


import { StackNavigator ,TabNavigator} from 'react-navigation';


// import MainScreenNavigator from './MainScreenNavigator';


import NewsDetailScreen from '../pages/Discover/NewsDetailScreen';
import NewsDetailScreen2 from '../pages/Discover/NewsDetailScreen2';
import ListViewExample from '../pages/Admin/ListViewExample';


import ChatScreen from './Chat';
import BookScreen from './Book';
import AdminScreen from './Admin';
import DiscoverScreen from './Discover';
import MineScreen from './Mine';

 
const msgIcon = require('../image/mine.png');
const bookIcon = require('../image/mine.png');
const adminIcon = require('../image/mine.png');
const discoverIcon = require('../image/mine.png');
const mineIcon = require('../image/mine.png');


const styles = StyleSheet.create({
	icon: {
		width: 26,
		height: 26
	}
});


const TabContainer = TabNavigator(
	{
		Msg: {
			screen: ChatScreen,
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


const App = StackNavigator(	
	{
		Home: { screen: TabContainer },
		NewsDetail: { screen: NewsDetailScreen },
		NewsDetail2: {
		// `NewsDetailScreen2`是一个React组件，将作为屏幕的主要内容。
			screen: NewsDetailScreen2,
			// 当`ProfileScreen`由StackNavigator加载时，它将被赋予“navigation”属性。
			// 可选：在Web应用程序中深链接或使用react-navigation导航时，将使用此路径：
			//  path: 'people/:name',
			// 从路径中提取动作(action)和路由参数.
			// 可选：覆盖屏幕的`navigationOptions`（即每个组件中的`navigationOptions`）
			navigationOptions: ({ navigation }) => ({
				title: `${navigation.state.params.name}'s Profile'`,
			}),

		},

		ListViewExample: { screen: ListViewExample },

	}
	// ,
	// {
	// 	mode:'modal',
	// }
);


export default App;
