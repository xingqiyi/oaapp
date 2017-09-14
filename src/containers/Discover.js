/*
 * @Author: shuaixc 
 * @Date: 2017-09-13 22:53:18 
 * @Last Modified by: shuaixc
 * @Last Modified time: 2017-09-14 09:58:28
 */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { Flex, Button } from 'antd-mobile';


const bookIcon = require('../image/logo.png');


const styles = StyleSheet.create({
	icon: {
		width: 26,
		height: 26
	}
});

export default class DiscoverScreen extends React.Component {
	// static navigationOptions = {
	//   title: "发现"
	// };

	static navigationOptions = {
		title: '发现',
		// Note: By default the icon is only shown on iOS. Search the showIcon option below.
		tabBarIcon: ({ tintColor }) =>
			(<Image
				source={bookIcon}
				style={[styles.icon, { tintColor }]}
			/>)
	};
	render() {
		const { navigate } = this.props.navigation;

		return (
			<View>
				<Text>Hello, my first Chat App!</Text>



				<Flex>
					<Button
						className="btn"
						type="primary"
						size="small"
						inline
						icon="check-circle-o"
						style={{ margin: 20 }}
						onClick={() => navigate('NewsDetail', { user: 'jim' })}
					>
						新闻
					</Button>

				</Flex>



			</View>
		);
	}
}
