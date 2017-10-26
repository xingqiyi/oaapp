/*
 * @Author: shuaixc 
 * @Date: 2017-09-13 08:53:28 
 * @Last Modified by: shuaixc
 * @Last Modified time: 2017-10-26 11:03:14
 */
import React from 'react';
import { Button } from 'antd-mobile';

export default class ChatContainer extends React.Component {
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
			// 	title="消息页面"
			// />


			<Button style={{ margin: 10 }}

				className="btn"
				type="primary"
				inline
				icon="check-circle-o"

				onClick={() => navigate('FlatListExample', { user: 'jim' })}>
				消息页面
			</Button>
		);
	}
} 