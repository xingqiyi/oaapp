/*
 * @Author: shuaixc 
 * @Date: 2017-09-13 22:53:25 
 * @Last Modified by: shuaixc
 * @Last Modified time: 2017-09-14 11:32:26
 */
import React from 'react';
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
export default class AdminScreen extends React.Component {
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
						style={{ margin: 20 }}
						onClick={() => navigate('ListViewExample', { user: 'jim' })}
					>
						ListView
					</Button>

				</Flex>






			</View>
		);
	}
}

AdminScreen.propTypes = propTypes;
