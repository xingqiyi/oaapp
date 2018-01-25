/*
 * @Author: shuaixc
 * @Date: 2017-09-13 10:53:25
 * @Last Modified by: shuaixc
 * @Last Modified time: 2018-01-23 22:47:43
 */
import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Flex, Button, WingBlank } from 'antd-mobile';


const propTypes = {
	navigation: PropTypes.object
};

/**
 *
 *
 * @export
 * @class AdminScreen
 * @extends {React.Component}
 */
class AdminScreen extends React.Component {
	render() {
		const { navigate } = this.props.navigation;

		return (
			<View>

				{/* <WingBlank>
					<Button
						style={styles.button}
						onClick={() => navigate('FlatListExample', { user: 'jim' })}>
						FlatListExample
					</Button>

					<Button
						className="btn"
						type="primary"
						size="small"
						inline
						icon="check-circle-o"
						style={styles.button}
						onClick={() => navigate('ListViewExample', { user: 'jim' })}>
						ListViewExample
					</Button>
				</WingBlank> */}

				<Flex direction='column' wrap='wrap' align='start' style={styles.flexContainer}>

					<Flex.Item style={styles.flexItem}>
						<Button
							style={styles.button}
							onClick={() =>
								navigate('FlatListExample', { user: 'jim' })
								// navigate('FlatListExample', { transition: 'forVerticalTop' })

							}>
							FlatListExample
						</Button>
					</Flex.Item>
					<Flex.Item style={styles.flexItem}>
						<Button

							style={styles.button}
							onClick={() => navigate('ListViewExample', { user: 'jim' })}>
							ListViewExample
						</Button>
					</Flex.Item>
					<Flex.Item style={styles.flexItem}>
						<Button
							className="btn"
							type="primary"
							size="small"
							inline
							icon="check-circle-o"
							style={styles.button}
							onClick={() => navigate('NewsDetail', { user: 'jim' })}
						>
							请求后台数据
						</Button>
					</Flex.Item>


					<Flex.Item style={styles.flexItem}>
						<Button
							className="btn"
							type="primary"
							size="small"
							inline
							icon="check-circle-o"
							style={styles.button}
							onClick={() => navigate('EchartsExample', { user: 'jim' })}
						>
							百度echarts
						</Button>
					</Flex.Item>


					{/*
					<Flex.Item style={styles.flexItem}>
						<Button
							className="btn"
							type="primary"
							size="small"
							inline
							icon="check-circle-o"
							style={styles.button}
							onClick={() => navigate('CameraExample', { user: 'jim' })}
						>
							拍照
						</Button>
					</Flex.Item>


					<Flex.Item style={styles.flexItem}>
						<Button
							className="btn"
							type="primary"
							size="small"
							inline
							icon="check-circle-o"
							style={styles.button}
							onClick={() => navigate('ImagePickerExample', { user: 'jim' })}
						>
							读取相册
						</Button>
					</Flex.Item>



					<Flex.Item style={styles.flexItem}>
						<Button
							className="btn"
							type="primary"
							size="small"
							inline
							icon="check-circle-o"
							style={styles.button}
							onClick={() => navigate('JpushExample', { user: 'jim' })}
						>
							Jpush 消息推送
						</Button>
					</Flex.Item>
						*/}


					<Flex.Item style={styles.flexItem}>
						<Button
							className="btn"
							type="primary"
							size="small"
							inline
							icon="check-circle-o"
							style={styles.button}
							onClick={() => navigate('CameraExample', { user: 'jim' })}
						>
							ddd
						</Button>
					</Flex.Item>
					<Flex.Item style={styles.flexItem}>
						<Button
							className="btn"
							type="primary"
							size="small"
							inline
							icon="check-circle-o"
							style={styles.button}
							onClick={() => navigate('ImagePickerExample', { user: 'jim' })}
						>
							sss
						</Button>
					</Flex.Item>
				</Flex>



			</View >
		);
	}

	// render() { 	return <Main {...this.props} />; }
}

const mapStateToProps = (state) => {
	const { admintes } = state;

	return { admintes };
};

const mapDispatchToProps = (dispatch) => {
	// const readActions = bindActionCreators(readCreators, dispatch); return
	// {readActions};

	return {};

};


const styles = StyleSheet.create({

	flexContainer: {
		height: '100%'
	},
	flexItem: {
		paddingLeft: 0,
		paddingRight: 0
	},
	button: {
		height: 30,
		width: '100%',
		margin: 10
	},
	icon: {
		width: 26,
		height: 26
	}
});




export default connect(mapStateToProps, mapDispatchToProps)(AdminScreen);

AdminScreen.propTypes = propTypes;
