
import React from 'react';
import {
	Image,
	Dimensions,
	StyleSheet,
	Text,
	TouchableHighlight,
	View
} from 'react-native';
import { Flex, Button } from 'antd-mobile';




import Camera from 'react-native-camera';



import PropTypes from 'prop-types';

const propTypes = {
	news: PropTypes.object,
	newsActions: PropTypes.object,
};


class CameraExample extends React.Component {

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

	// onRefresh = () => {
	// };

	render() {

		const { news } = this.props;

		console.info(news);


		return (
			<View style={styles.container}>


				<Camera
					ref={(cam) => {
						this.camera = cam;
					}}
					style={styles.preview}
					aspect={Camera.constants.Aspect.fill}>
					<Text style={styles.capture} onPress={this.takePicture.bind(this)}>[拍照]</Text>
				</Camera>



			</View>
		);
	}

	takePicture() {
		const options = {};
		//options.location = ...
		this.camera.capture({ metadata: options })
			.then((data) => console.log(data))
			.catch(err => console.error(err));
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
	},
	preview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	capture: {
		flex: 0,
		backgroundColor: '#fff',
		borderRadius: 5,
		color: '#000',
		padding: 10,
		margin: 40
	}
});

export default CameraExample;

CameraExample.propTypes = propTypes;

