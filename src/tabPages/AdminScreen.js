
import React from 'react';
import { View, Button } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
	navigation: PropTypes.func,
};
AdminScreen.propTypes = propTypes;

export default class AdminScreen extends React.Component {
	render() {

		const { navigate } = this.props.navigation;

		return (
			<View>
				<Button
					onPress={() => this.props.navigation.navigate('Notifications')}
					title="管理页面"
				/>
				<Button
					onPress={() => navigate('ListViewExample', { user: 'jim' })}
					title="ListViewExample"
				/>
			</View>

		);
	}
}


