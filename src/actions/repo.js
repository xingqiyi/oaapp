
import * as types from '../constants/ActionTypes';

export function requestRepoList(
	isRefreshing,
	loading,
	typeId,
	isLoadMore,
	page = 1
) {
	return {
		type: types.REQUEST_REPO_LIST,
		isRefreshing,
		loading,
		isLoadMore,
		typeId,
		page
	};
}

export function fetchRepoList(isRefreshing, loading, isLoadMore = false) {
	return {
		type: types.FETCH_REPO_LIST,
		isRefreshing,
		loading,
		isLoadMore
	};
}

export function receiveRepoList(repoList, typeId) {
	return {
		type: types.RECEIVE_REPO_LIST,
		repoList,
		typeId
	};
}
