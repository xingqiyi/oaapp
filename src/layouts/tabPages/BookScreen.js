
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
