/*
 * @Author: shuaixc
 * @Date: 2017-09-13 10:53:25
 * @Last Modified by: shuaixc
 * @Last Modified time: 2017-09-19 15:22:23
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
					<Button
						className="btn"
						type="primary"
						size="small"
						inline
						icon="check-circle-o"
						style={{
							margin: 20
						}}
						onClick={() => navigate('ListViewExample', { user: 'jim' })}>
						ListViewExample
					</Button>

					<Button
						className="btn"
						type="primary"
						size="small"
						inline
						icon="check-circle-o"
						style={{ margin: 20 }}
						onClick={() => navigate('NewsDetail', { user: 'jim' })}
					>
						newsdetail
					</Button>


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
