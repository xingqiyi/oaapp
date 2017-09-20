/*
 * @Author: shuaixc 
 * @Date: 2017-09-13 9:13:14 
 * @Last Modified by: shuaixc
 * @Last Modified time: 2017-09-20 17:20:56
 */



import React from 'react';
import { Button } from 'react-native';

export default class BookContainer extends React.Component {
	// static navigationOptions = {
	//   // tabBarLabel: "消息",
	//   // headerTitle: "消息",
	//   title: ' 消息',
	//   // Note: By default the icon is only shown on iOS. Search the showIcon option below.
	//   tabBarIcon: ({ tintColor }) =>
	//     <Image source={bookIcon} style={[styles.icon, { tintColor }]} />
	// };

	render() {
		return (
			<Button
				onPress={() => this.props.navigation.navigate('Notifications')}
				title="通讯录页面"
			/>
		);
	}
} 