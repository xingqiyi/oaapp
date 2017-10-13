/*
 * @Author: shuaixc
 * @Date: 2017-09-13 10:53:25
 * @Last Modified by: shuaixc
 * @Last Modified time: 2017-10-13 17:48:12
 */
import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { Flex, Button } from 'antd-mobile';


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

				<Flex>


					<Flex.Item style={{ paddingLeft: 0, paddingRight: 0 }}>
						<Button
							className="btn"
							type="primary"
							size="small"
							inline
							icon="check-circle-o"
							style={{
								margin: 10
							}}
							onClick={() => navigate('FlatListExample', { user: 'jim' })}>
							FlatListExample
						</Button>
					</Flex.Item>
					<Flex.Item style={{ paddingLeft: 0, paddingRight: 0 }}>
						<Button
							className="btn"
							type="primary"
							size="small"
							inline
							icon="check-circle-o"
							style={{
								margin: 5
							}}
							onClick={() => navigate('ListViewExample', { user: 'jim' })}>
							ListViewExample
						</Button>
					</Flex.Item>
					<Flex.Item style={{ paddingLeft: 0, paddingRight: 0 }}>
						<Button
							className="btn"
							type="primary"
							size="small"
							inline
							icon="check-circle-o"
							style={{ margin: 10 }}
							onClick={() => navigate('NewsDetail', { user: 'jim' })}
						>
							请求后台数据
						</Button>
					</Flex.Item>

				</Flex>

				<Flex>
					<Flex.Item>
						<Button
							className="btn"
							type="primary"
							size="small"
							inline
							icon="check-circle-o"
							style={{ margin: 10 }}
							onClick={() => navigate('EchartsExample', { user: 'jim' })}
						>
							百度echarts
						</Button>
					</Flex.Item>
					<Flex.Item>
						<Button
							className="btn"
							type="primary"
							size="small"
							inline
							icon="check-circle-o"
							style={{ margin: 10 }}
							onClick={() => navigate('CameraExample', { user: 'jim' })}
						>
							拍照
						</Button>
					</Flex.Item>
					<Flex.Item>
						<Button
							className="btn"
							type="primary"
							size="small"
							inline
							icon="check-circle-o"
							style={{ margin: 10 }}
							onClick={() => navigate('ImagePickerExample', { user: 'jim' })}
						>
							读取相册
						</Button>
					</Flex.Item>
				</Flex>

			</View>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminScreen);

AdminScreen.propTypes = propTypes;
