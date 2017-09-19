/*
 * @Author: shuaixc 
 * @Date: 2017-09-13 9:13:14 
 * @Last Modified by: shuaixc
 * @Last Modified time: 2017-09-19 15:23:09
 */

import React from 'react';
import { Button, } from 'react-native';


export default class BookScreen extends React.Component {
	render() {
		return (
			<Button
				onPress={() => this.props.navigation.navigate('Notifications')}
				title="通讯录页面"
			/>
		);
	}
}
