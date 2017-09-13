/*
 * @Author: shuaixc 
 * @Date: 2017-09-13 22:53:25 
 * @Last Modified by:   shuaixc 
 * @Last Modified time: 2017-09-13 22:53:25 
 */
import React from 'react';
import { View, Button } from 'react-native';
import PropTypes from 'prop-types';


const propTypes = {
	navigation: PropTypes.object
};

/**
 *
 *
 * @export
 * @class AdminScreen
 * @extends {React.Component}
 */
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

AdminScreen.propTypes = propTypes;
