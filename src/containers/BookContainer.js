/*
 * @Author: shuaixc 
 * @Date: 2017-09-13 9:13:14 
 * @Last Modified by: shuaixc
 * @Last Modified time: 2017-10-26 11:02:36
 */



import React from 'react';
import { Button } from 'antd-mobile';

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
			// <Button
			// 	onPress={() => this.props.navigation.navigate('Notifications')}
			// 	title="通讯录页面"
			// />

			<Button style={{ margin: 10 }}

				className="btn"
				type="primary"
				inline
				icon="check-circle-o"

				onClick={() => navigate('FlatListExample', { user: 'jim' })}>
				通讯录页面
			</Button>


		);
	}
} 