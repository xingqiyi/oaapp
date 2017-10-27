/*
 * @Author: shuaixc 
 * @Date: 2017-09-12 09:25:01 
 * @Last Modified by: shuaixc
 * @Last Modified time: 2017-10-27 17:06:11
 */
import React from 'react';
import PropTypes from 'prop-types';

import Html from '../../components/base/Html';


import {
	ScrollView,
	View,
	Text,
	StyleSheet,
	Dimensions,
	Platform
} from 'react-native';



const { height, width } = Dimensions.get('window');
const topicAuthorWidth = 100;
const authorImgHeight = 40;
const contentPadding = 15;
const propTypes = {
	navigation: PropTypes.object,
};



/**
 * 
 * 
 * @export
 * @class NewsContent
 * @extends {React.Component}
 */
export default class NewsContent extends React.Component {
	static navigationOptions = {
		title: '新闻详情2'
	};

	constructor(props) {
		super(props);
		this.state = { showText: 'aaa' };
	}

	componentDidMount() {



	}

	_renderTopicHtml(topic) {
		return (
			<View style={styles.content}>
				<Html
					router={this.props.router}
					content={topic.content} />
			</View>
		);

		// if (this.state.didFocus && topic && topic.content) {
		// 	return (
		// 		<View style={styles.content}>
		// 			<Html
		// 				router={this.props.router}
		// 				content={topic.content} />
		// 		</View>
		// 	);
		// }
		// return (
		// 	<Spinner
		// 		size='large'
		// 		animating
		// 		style={{ marginTop: 20 }} />
		// );


	}


	render() {



		const { params } = this.props.navigation.state;

		// const { item } = this.props;
		const item = params.item;


		return (
			<ScrollView>

				{/* <View style={[{ margin: 10 }]}>
					<Text>id:{params.id}</Text>
				</View> */}

				{this._renderTopicHtml(item)}
			</ScrollView>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: width,
		backgroundColor: 'white',
		height: height
	},
	header: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingRight: 20,
		paddingLeft: 20,
		paddingTop: Platform.OS === 'ios' ? 20 : 0
	},
	authorWrapper: {
		width: topicAuthorWidth - 40,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	authorImg: {
		width: authorImgHeight,
		height: authorImgHeight,
		borderRadius: authorImgHeight / 2
	},
	author: {
		paddingBottom: 12,
		color: 'rgba(255,255,255,0.7)',
		fontSize: 12
	},
	titleWrapper: {
		width: width - topicAuthorWidth - 20,
		flexDirection: 'column',
		paddingTop: 10,
		paddingBottom: 10
	},
	title: {
		color: 'rgba(255,255,255,0.9)',
		justifyContent: 'flex-end'
	},
	titleFooter: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		marginTop: 20
	},
	date: {
		width: 100,
		flexDirection: 'row'
	},
	dateText: {
		color: 'rgba(255,255,255,0.5)',
		fontSize: 12
	},
	dateIcon: {
		width: 12,
		height: 16,
		marginRight: 8
	},
	like: {
		width: 20,
		flexDirection: 'row'
	},
	likeIcon: {
		width: 20,
		height: 16,
		marginRight: 8
	},
	content: {
		paddingRight: contentPadding,
		paddingLeft: contentPadding,
		paddingTop: contentPadding,
		paddingBottom: contentPadding,
		backgroundColor: 'white'
	}
});

NewsContent.propTypes = propTypes;
