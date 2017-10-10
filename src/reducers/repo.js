

import * as types from '../constants/ActionTypes';

const initialState = {
	isRefreshing: false,
	loading: false,
	isLoadMore: false,
	noMore: false,
	repoList: {}
};

export default function read(state = initialState, action) {
	switch (action.type) {
	case types.FETCH_REPO_LIST:
		return Object.assign({}, state, {
			isRefreshing: action.isRefreshing,
			loading: action.loading,
			isLoadMore: action.isLoadMore
		});
	case types.RECEIVE_REPO_LIST:
		return Object.assign({}, state, {
			isRefreshing: false,
			isLoadMore: false,
			noMore: action.repoList.length === 0,
			repoList: state.isLoadMore
				? loadMore(state, action)
				: combine(state, action),
			loading: state.repoList[action.typeId] === undefined
		});
	default:
		return state;
	}
}

function combine(state, action) {
	state.repoList[action.typeId] = action.repoList;

	return state.repoList;
}

function loadMore(state, action) {
	state.repoList[action.typeId] = concatFilterDuplicate(
		state.repoList[action.typeId],
		action.repoList
	);
	return state.repoList;
}

/**
 * filter duplicate data when loading more.
*/
function concatFilterDuplicate(list1, list2) {
	const set = new Set(list1.map(item => item.id));
	const filterList2 = [];
	const length = list2.length;
	for (let i = 0; i < length; i++) {
		if (!set.has(list2[i].id)) {
			filterList2.push(list2[i]);
		}
	}
	return list1.concat(filterList2);
}
