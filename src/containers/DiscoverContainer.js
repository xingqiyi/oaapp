/*
 * @Author: shuaixc 
 * @Date: 2017-09-11 15:03:08 
 * @Last Modified by: shuaixc
 * @Last Modified time: 2017-09-27 16:50:04
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RepoList from '../pages/Discover/RepoList';
import * as repoCreators from '../actions/repo';

class DiscoverContainer extends React.Component {
	render() {
		return <RepoList {...this.props} />;
	}
}

const mapStateToProps = (state) => {
	const { repo } = state;
	return {
		repo
	};
};

const mapDispatchToProps = (dispatch) => {
	const repoActions = bindActionCreators(repoCreators, dispatch);
	return {
		repoActions
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(DiscoverContainer);

// DiscoverContainer.propTypes = propTypes;


