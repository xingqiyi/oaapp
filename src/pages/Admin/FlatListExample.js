
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableHighlight } from 'react-native';

import { Flex, Button } from 'antd-mobile';


import PropTypes from 'prop-types';


const propTypes = {
	news: PropTypes.object,
	newsActions: PropTypes.object,
	navigation: PropTypes.object

};

let listData;
let navigate;

const addIcon = require('../../image/add.png');
let headerRight = (
	<TouchableHighlight onPress={() => navigate('NewsDetail2', { user: 'jim' })}>

		<Image
			style={[{
				height: 24,
				width: 24,
				marginRight: 8
			}
			]}



			source={
				addIcon
			} />
	</TouchableHighlight>

);

listData = [
	{ key: 'a', value: 'aaaaaaaa' },
	{ key: 'b', value: 'bbbbbbbb' },
	{ key: 'c', value: 'cccccccc' },
	{ key: 'd', value: 'dddddddd' },
	{ key: 'e', value: 'eeeeeeee' },
	{ key: 'f', value: 'ffffffff' },
	{ key: 'g', value: 'gggggggg' },
	{ key: 'h', value: 'hhhhhhhh' },
	{ key: 'i', value: 'iiiiiiii' },
	{ key: 'j', value: 'jjjjjjjj' }
];
class FlatListExample extends React.Component {
	static navigationOptions = {
		headerRight: headerRight,
		title: 'FlatList'

	};

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

	componentDidMount() {
		const { newsActions } = this.props;
		console.info('newsList,newsAction:', newsActions);

		// newsActions.requestNewsList(false, true, 2);
	}

	onRefresh = () => {
		const { newsActions } = this.props;
		// newsActions.requestNewsList(false, true, 2);

		listData.sort(() => Math.random() < 0.5);

	};

	render() {

		const { news } = this.props;

		({ navigate } = this.props.navigation);


		console.info(news);


		return (
			<View>
				<Text>Hello, my first Chat App!</Text>
				<Button
					className="btn"
					type="primary"
					size="small"
					inline
					icon="check-circle-o"
					style={{
						margin: 20
					}}
					onClick={() =>
						this.onRefresh()
					}>
					ListViewExample
				</Button>


				<FlatList
					data={listData}
					renderItem={({ item }) => <Text>{item.value}</Text>}
				/>




			</View>
		);
	}
}


export default FlatListExample;

FlatListExample.propTypes = propTypes;

