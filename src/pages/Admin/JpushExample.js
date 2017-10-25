
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

import { Flex, Button } from 'antd-mobile';


import PropTypes from 'prop-types';


import JPushModule from 'jpush-react-native';


const propTypes = {
	news: PropTypes.object,
	newsActions: PropTypes.object,
};

let navigate;


class JpushExample extends React.Component {

	constructor(props) {
		super(props);
		// this.state = {
		// 	dataSource: new ListView.DataSource({
		// 		rowHasChanged: (row1, row2) => row1 !== row2
		// 	}),
		// 	typeIds: [],
		// 	typeList: {}
		// };
	}

	jpushcb(resultCode) {
		console.log('cb of jpush:', resultCode);
	}

	componentDidMount() {
		const { newsActions } = this.props;
		//console.info('newsList,newsAction:', newsActions);
		// newsActions.requestNewsList(false, true, 2);


		// JPushModule.notifyJSDidLoad(this.jpushcb);

		JPushModule.addReceiveCustomMsgListener((message) => {
			//这是默认的通知消息
			this.setState({ pushMsg: message });
		});

		JPushModule.addReceiveNotificationListener((map) => {

			//自定义推送的消息
			console.log('alertContent: ' + map.alertContent);

			//extra是可选配置上的附件字段
			console.log('extras: ' + map.extras);

			var message = JSON.parse(map.extras);
			this.storeDB(message);//我这里是把内容存在了数据库里面，你可以把这里的message放到state里面显示出来
			//这里面解析json数据，并存在数据库中，同时显示在通知栏上
		});

		//点击通知进入应用的主页，相当于跳转到制定的页面
		JPushModule.addReceiveOpenNotificationListener((map) => {
			console.log('Opening notification!', JSON.stringify(map));
			alert(JSON.stringify(map));
			navigate('NewsDetail2', { user: 'jim' });

			// this.props.navigator.replace({ name: 'HomePage', component: HomePage });

		});

	}

	componentWillUnmount() {
		JPushModule.removeReceiveCustomMsgListener();
		JPushModule.removeReceiveNotificationListener();
	}



	render() {

		const { news } = this.props;

		navigate = this.props.navigation.navigate;

		console.info(news);


		return (
			<View>
				<Text>Hello, Jpush!</Text>







			</View>
		);
	}
}


export default JpushExample;

JpushExample.propTypes = propTypes;

