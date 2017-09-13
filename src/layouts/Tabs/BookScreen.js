/*
 * @Author: shuaixc 
 * @Date: 2017-09-13 22:53:22 
 * @Last Modified by:   shuaixc 
 * @Last Modified time: 2017-09-13 22:53:22 
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
