
import { put, take, call, fork } from 'redux-saga/effects';

import * as types from '../constants/ActionTypes';
import ToastUtil from '../utils/ToastUtil';
import { request } from '../utils/RequestUtil';
import { WEXIN_ARTICLE_LIST } from '../constants/Urls';
import { fetchNewsList, receiveNewsList } from '../actions/news';

export function* requestNewsList(
	isRefreshing,
	loading,
	typeId,
	isLoadMore,
	page
) {
	try {
		yield put(fetchNewsList(isRefreshing, loading, isLoadMore));
		const newsList = yield call(
			request,
			`${WEXIN_ARTICLE_LIST}?typeId=${typeId}&page=${page}`,
			'get'
		);
		yield put(
			receiveNewsList(
				newsList.showapi_res_body.pagebean.contentlist,
				typeId
			)
		);
		const errorMessage = newsList.showapi_res_error;
		if (errorMessage && errorMessage !== '') {
			yield ToastUtil.showShort(errorMessage);
		}
	} catch (error) {
		yield put(receiveNewsList([], typeId));
		ToastUtil.showShort('网络发生错误，请重试');
	}
}

export function* watchRequestNewsList() {
	while (true) {
		const { isRefreshing, loading, typeId, isLoadMore, page } = yield take(
			types.REQUEST_NEWS_LIST
		);
		yield fork(
			requestNewsList,
			isRefreshing,
			loading,
			typeId,
			isLoadMore,
			page
		);
	}
}
