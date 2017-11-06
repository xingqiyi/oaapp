/*
 * @Author: shuaixc 
 * @Date: 2017-09-12 09:25:01 
 * @Last Modified by: shuaixc
 * @Last Modified time: 2017-11-06 11:18:05
 */
import React from 'react';
import PropTypes from 'prop-types';

import {
	TouchableOpacity,
	Image,
	ScrollView,
	View,
	Text,
	StyleSheet,
	Dimensions,
	Platform
} from 'react-native';


import Html from '../../components/base/Html';

import Spinner from '../../components/base/Spinner';

import CommentOverlay from '../../components/CommentOverlay';
import { genColor, parseImgUrl } from '../../utils';





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
		header: null,//不显示header
		title: '新闻内容'
	};

	constructor(props) {
		super(props);
		this.state = { showText: 'aaa' };

		this.headerColor = genColor();
		this.state = {
			didFocus: false
		};
	}

	componentDidMount() {
		// const { from, actions, id, topic } = this.props;
		// if (from !== 'comment' && topic) {
		// 	actions.getTopicById(id);
		// }

		// this.setState({
		// 	didFocus: true
		// });


		// setTimeout 和直接写的执行顺序会不一样
		setTimeout(() => {
			this.setState({
				didFocus: true
			});
		});

	}


	componentWillFocus(haveFocus) {
		alert('willFocus');
	}
	componentDidFocus(haveFocus) {
		alert('didFocus');
		if (!haveFocus) {
			setTimeout(() => {
				this.setState({
					didFocus: true
				});
			});
		}
	}

	renderCommentOverlay(topic) {
		return (
			// <CommentOverlay
			// 	onPress={() => {
			// 		this.props.router.toComment({
			// 			topic: topic,
			// 			id: topic.id
			// 		});
			// 	}}
			// 	replyCount={topic.reply_count}
			// />
			<CommentOverlay
				//replyCount={topic.reply_count}
				replyCount={33}
			/>

		);
	}

	renderTopicHtml(topic) {
		// return (
		// 	<View style={styles.content}>
		// 		<Html
		// 			router={this.props.router}
		// 			content={topic.content} />
		// 	</View>
		// );

		if (this.state.didFocus && topic && topic.content) {
			// if (topic && topic.content) {
			return (
				<View style={styles.content}>
					<Html
						router={this.props.router}
						content={topic.content} />
				</View>
			);
		}
		return (
			<Spinner
				size='large'
				animating
				style={{ marginTop: 20 }} />
		);


	}


	renderContent(topic) {
		if (topic) {
			const imgUri = parseImgUrl(topic.author.avatar_url);
			const authorName = topic.author.loginname;

			return (
				<ScrollView>
					<View style={[styles.header, { backgroundColor: this.headerColor }]}>
						<View style={styles.authorTouchable}>
							<View style={styles.authorWrapper}>
								<TouchableOpacity
								>
									<Image
										source={{ uri: imgUri }}
										style={styles.authorImg} />
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.titleWrapper}>
							<Text style={styles.title}>
								{topic.title}
							</Text>

						</View>
					</View>

					{this.renderTopicHtml(topic)}
				</ScrollView>
			);
		}

		return (
			<Spinner
				size='large'
				animating
				style={{ marginTop: 20 }} />
		);


	}

	render() {
		const { params } = this.props.navigation.state;

		// const { item } = this.props;
		const item = params.item;

		return (
			// <ScrollView>

			// 	{this.renderTopicHtml(item)}
			// </ScrollView>

			<View style={[styles.container]}>
				{this.renderContent(item)}

				{/* {this.props.topic && this.state.didFocus && this.props.from !== 'comment' && this.renderCommentOverlay(topic)} */}

				{item && this.renderCommentOverlay(item)}

			</View>
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

		paddingBottom: 20,
		paddingRight: 20,
		paddingLeft: 20,

		// paddingTop: Platform.OS === 'ios' ? 20 : 0
		paddingTop: 20
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
