import React from 'react';
import PropTypes from 'prop-types';

import Api from '../utils/api';

// import { View, Text } from "react-native";

import {ScrollView, View, Text} from 'react-native';

const propTypes = {
	navigation: PropTypes.object
};

 

/**
 *
 *
 * @export
 * @class ListViewExample
 * @extends {React.Component}
 */
export default class ListViewExample extends React.Component {
		static navigationOptions = {
			title: '新闻详情2'
		};

		constructor(props) {
			super(props);
			this.state = {
				showText: 'aaa'
			};
		}

		componentDidMount() {
			console.log('componentDidMount');

			Api
				.getRepos()
				.then(res => {
					this.setState({
						showText: JSON.stringify(res)
					});
				});
		}
		componentWillUnmount() {
			console.log('componentWillUnmount');
		}

		render() {
			const {params} = this.props.navigation.state;
			return (
				<ScrollView>
					<View style={[{
						margin: 10
					}
					]}>
						<Text>请求后台数据示例:</Text>
						<Text>fetch:</Text>
						<Text>Chat with {params.user + this.state.showText}</Text>
					</View>
				</ScrollView>
			);
		}
}

ListViewExample.propTypes = propTypes;
