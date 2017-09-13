/*
 * @Author: shuaixc 
 * @Date: 2017-09-12 22:14:18 
 * @Last Modified by: shuaixc
 * @Last Modified time: 2017-09-13 23:20:22
 */
import { StackNavigator } from 'react-navigation';
import MainScreenNavigator from './MainScreenNavigator';


import NewsDetailScreen from './Discover/NewsDetailScreen';
import NewsDetailScreen2 from './Discover/NewsDetailScreen2';
import ListViewExample from './Admin/ListViewExample';

const OAApp = StackNavigator(	
	{
		Home: { screen: MainScreenNavigator },
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


export default OAApp;
