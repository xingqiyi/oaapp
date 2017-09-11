import React from 'react';
import PropTypes from 'prop-types';

// import { View, Text } from "react-native";

import { ScrollView, View, Text, Button } from 'react-native';
import { Grid } from 'antd-mobile';

const data = Array.from(new Array(9)).map((_val, i) => ({
	icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
	text: `名字${i}`
}));


const propTypes = {
	navigation: PropTypes.func,
};
NewsDetailScreen.propTypes = propTypes;

export default class NewsDetailScreen extends React.Component {
	static navigationOptions = {
		title: '新闻详情'
	};

	constructor() {
		super();
		this.state = {
			val: 0
		};
	}

	componentDidMount() {
		this.setState({ val: this.state.val + 1 });
		console.log(this.state.val);    // 第 1 次 log

		this.setState({ val: this.state.val + 1 });
		console.log(this.state.val);    // 第 2 次 log


		setTimeout(() => {
			this.setState({ val: this.state.val + 1 });
			console.log(this.state.val);  // 第 3 次 log

			this.setState({ val: this.state.val + 1 });
			console.log(this.state.val);  // 第 4 次 log
		}, 0);
	}



	render() {
		const { params } = this.props.navigation.state;
		const { navigate } = this.props.navigation;

		return (
			<ScrollView>

				<Button
					onPress={() => navigate('NewsDetail2', { user: 'jim' })}
					title="新闻详情2"
				/>

				<View style={[{ margin: 10 }]}>
					<Text>Grid 示例</Text>
					<Text>
						Chat with {params.user}
					</Text>
				</View>
				<View style={[{ padding: 10 }]}>
					<Grid data={data} hasLine={false} />
				</View>

				<View style={[{ margin: 10 }]}>
					<Text>走马灯</Text>
				</View>
				<Grid
					data={data}
					columnNum={3}
					isCarousel
				// onClick={(_el, index) => {
				//   // alert(index)
				//   console.log('index:', index);
				// }
				// }
				/>
			</ScrollView>
		);
	}
}
