
import { put, take, call, fork } from 'redux-saga/effects';

import * as types from '../constants/ActionTypes';
import ToastUtil from '../utils/ToastUtil';
import { request } from '../utils/RequestUtil';
import { REPO_LIST } from '../constants/Urls';
import { fetchRepoList, receiveRepoList } from '../actions/repo';

export function* requestRepoList(
	isRefreshing,
	loading,
	typeId,
	isLoadMore,
	page
) {
	try {
		yield put(fetchRepoList(isRefreshing, loading, isLoadMore));

		console.log('yielddddd');
		const repoList = yield call(
			request,
			`${REPO_LIST}&page=${page}`,
			'get'
		);
		console.log('yielddddd');

		yield put(
			receiveRepoList(
				// repoList.showapi_res_body.pagebean.contentlist,

				repoList.items,

				typeId
			)
		);
		const errorMessage = repoList.showapi_res_error;
		if (errorMessage && errorMessage !== '') {
			yield ToastUtil.showShort(errorMessage);
		}
	} catch (error) {
		yield put(receiveRepoList([], typeId));
		ToastUtil.showShort('网络发生错误，请重试');
	}
}

export function* watchRequestRepoList() {
	while (true) {
		const { isRefreshing, loading, typeId, isLoadMore, page } = yield take(
			types.REQUEST_REPO_LIST
		);
		yield fork(
			requestRepoList,
			isRefreshing,
			loading,
			typeId,
			isLoadMore,
			page
		);
	}
}
