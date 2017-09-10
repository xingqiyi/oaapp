
import React from 'react';
import { Button } from 'react-native';

export default class MsgScreen extends React.Component {
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
				title="消息页面"
			/>
		);
	}
}
