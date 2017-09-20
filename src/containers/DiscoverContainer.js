/*
 * @Author: shuaixc 
 * @Date: 2017-09-11 15:03:08 
 * @Last Modified by: shuaixc
 * @Last Modified time: 2017-09-20 11:46:17
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewsList from '../pages/Discover/NewsList';
import * as newsCreators from '../actions/news';

class DiscoverContainer extends React.Component {
	render() {
		return <NewsList {...this.props} />;
	}
}

const mapStateToProps = (state) => {
	const { news } = state;
	return {
		news
	};
};

const mapDispatchToProps = (dispatch) => {
	const newsActions = bindActionCreators(newsCreators, dispatch);
	return {
		newsActions
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(DiscoverContainer);

// DiscoverContainer.propTypes = propTypes;


