import React from 'react';

import Api from '../utils/api';

// import { View, Text } from "react-native";

import { ScrollView, View, Text } from 'react-native';

export default class NewsDetailScreen2 extends React.Component {
		static navigationOptions = {
			title: '新闻详情2'
		};

		constructor(props) {
			super(props);
			this.state = { showText: 'aaa' };
		}

		render() {
			const { params } = this.props.navigation.state;
 
     
			Api.getRepos()
				.then((res)=>{ 
					this.setState({showText: JSON.stringify(res)});
				}
				);

			return (
				<ScrollView>

					<View style={[{ margin: 10 }]}>
						<Text>Grid 示例</Text>
						<Text>
            Chat with {params.user+ this.state.showText} 
						</Text>
					</View>

				</ScrollView>
			);
		}
}
