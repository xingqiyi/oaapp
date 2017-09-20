
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { Flex, Button } from 'antd-mobile';


import PropTypes from 'prop-types';

const propTypes = {
	news: PropTypes.object,
	newsActions: PropTypes.object,
};


class NewsList extends React.Component {

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

		newsActions.requestNewsList(false, true, 2);
	}

	onRefresh = () => {
		const { newsActions } = this.props;
		newsActions.requestNewsList(false, true, 2);
	};

	render() {

		const { news } = this.props;

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


				


			</View>
		);
	}
}


export default NewsList;

NewsList.propTypes = propTypes;