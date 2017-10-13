
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




import ImagePicker from 'react-native-image-picker';


import PropTypes from 'prop-types';

const propTypes = {
	news: PropTypes.object,
	newsActions: PropTypes.object,
};


class ImagePickerExample extends React.Component {

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



				<Text style={styles.capture} onPress={this.takePicture.bind(this)}>[选择]</Text>




			</View>
		);
	}

	takePicture() {
		var options = {
			title: 'Select Avatar',
			customButtons: [
				{ name: 'fb', title: 'Choose Photo from Facebook' },
			],
			storageOptions: {
				skipBackup: true,
				path: 'images'
			}
		};

		/**
		 * The first arg is the options object for customization (it can also be null or omitted for default options),
		 * The second arg is the callback which sends object: response (more info below in README)
		 */
		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled image picker');
			}
			else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			}
			else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			}
			else {
				let source = { uri: response.uri };

				// You can also display the image using data:
				// let source = { uri: 'data:image/jpeg;base64,' + response.data };

				this.setState({
					avatarSource: source
				});
			}
		});
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

export default ImagePickerExample;

ImagePickerExample.propTypes = propTypes;

