

import { put, take, call, fork } from 'redux-saga/effects';

import * as types from '../constants/ActionTypes';
import ToastUtil from '../utils/ToastUtil';
import { request } from '../utils/RequestUtil';
import { WEXIN_ARTICLE_LIST } from '../constants/Urls';
import { fetchArticleList, receiveArticleList } from '../actions/read';

export function* requestArticleList(
	isRefreshing,
	loading,
	typeId,
	isLoadMore,
	page
) {
	try {
		yield put(fetchArticleList(isRefreshing, loading, isLoadMore));
		const articleList = yield call(
			request,
			`${WEXIN_ARTICLE_LIST}?typeId=${typeId}&page=${page}`,
			'get'
		);
		yield put(
			receiveArticleList(
				articleList.showapi_res_body.pagebean.contentlist,
				typeId
			)
		);
		const errorMessage = articleList.showapi_res_error;
		if (errorMessage && errorMessage !== '') {
			yield ToastUtil.showShort(errorMessage);
		}
	} catch (error) {
		yield put(receiveArticleList([], typeId));
		ToastUtil.showShort('网络发生错误，请重试');
	}
}

export function* watchRequestArticleList() {
	while (true) {
		const { isRefreshing, loading, typeId, isLoadMore, page } = yield take(
			types.REQUEST_ARTICLE_LIST
		);
		yield fork(
			requestArticleList,
			isRefreshing,
			loading,
			typeId,
			isLoadMore,
			page
		);
	}
}
