
import * as types from '../constants/ActionTypes';

export function requestNewsList(
	isRefreshing,
	loading,
	typeId,
	isLoadMore,
	page = 1
) {
	return {
		type: types.REQUEST_NEWS_LIST,
		isRefreshing,
		loading,
		isLoadMore,
		typeId,
		page
	};
}

export function fetchNewsList(isRefreshing, loading, isLoadMore = false) {
	return {
		type: types.FETCH_NEWS_LIST,
		isRefreshing,
		loading,
		isLoadMore
	};
}

export function receiveNewsList(newsList, typeId) {
	return {
		type: types.RECEIVE_NEWS_LIST,
		newsList,
		typeId
	};
}
