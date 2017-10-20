
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
// import ImagePicker from 'react-native-image-crop-picker';


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



				<Text style={styles.capture} onPress={this.takePicture.bind(this)}>[选择图片]</Text>




			</View>
		);
	}

	takePicture() {

		var options = {
			//底部弹出框选项
			title: '请选择',
			cancelButtonTitle: '取消',
			takePhotoButtonTitle: '拍照',
			chooseFromLibraryButtonTitle: '选择相册',
			quality: 0.75,
			allowsEditing: true,
			noData: false,
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


		// ImagePicker.openPicker({
		// 	multiple: true
		// }).then(images => {
		// 	console.log(images);
		// });



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
		height: '8%',
		padding: 10,
		margin: 40
	}
});

export default ImagePickerExample;

ImagePickerExample.propTypes = propTypes;

