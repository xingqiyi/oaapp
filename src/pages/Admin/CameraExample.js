
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



import Spinner from '../../components/base/Spinner';


import Camera from 'react-native-camera';



import PropTypes from 'prop-types';

const propTypes = {
	news: PropTypes.object,
	newsActions: PropTypes.object,
};

let myCamera;

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

		this.state = {
			didFocus: false
		};


		myCamera = <Camera
			ref={(cam) => {
				this.camera = cam;
			}}
			style={styles.preview}
			aspect={Camera.constants.Aspect.fill}>
			<Text style={styles.capture} onPress={this.takePicture.bind(this)}>[拍照]</Text>
		</Camera>;

	}




	componentDidMount() {
		const { newsActions } = this.props;
		console.info('newsList,newsAction:', newsActions);

		// newsActions.requestNewsList(false, true, 2);
		setTimeout(() => {
			this.setState({
				didFocus: true
			});
		});
	}

	// onRefresh = () => {
	// };


	renderCamera() {
		if (this.state.didFocus) {
			// return (
			// 	<Camera
			// 		ref={(cam) => {
			// 			this.camera = cam;
			// 		}}
			// 		style={styles.preview}
			// 		aspect={Camera.constants.Aspect.fill}>
			// 		<Text style={styles.capture} onPress={this.takePicture.bind(this)}>[拍照]</Text>
			// 	</Camera>
			// );

			return myCamera;
		}
		return (
			<View style={styles.loadingContainer}>


				<Text style={styles.loadingText}>正在加载...</Text>
				{/* <Spinner
					size='large'
					animating
					style={{ marginTop: 20 }} /> */}

			</View >

		);
	}

	render() {

		const { news } = this.props;

		console.info(news);


		return (
			<View style={styles.container}>

				<View style={styles.cameraBox}>
				</View>

				{this.renderCamera()}

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

		justifyContent: 'center',
		alignItems: 'center',
	},
	preview: {

		height: '100%',
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
	},

	loadingContainer: {
		width: '100%',
		height: '100%',
		backgroundColor: '#000',
		justifyContent: 'center',
		alignItems: 'center'
	},

	cameraBox: {
		width: 200,
		height: 200,

		zIndex: 1,
		position: 'absolute',

		borderWidth: 1,
		borderColor: '#00f',

		// justifyContent: 'center',
		// alignItems: 'center'

	},
	loadingText: {
		color: '#fff',
		fontSize: 16,

	}

});

export default CameraExample;

CameraExample.propTypes = propTypes;

