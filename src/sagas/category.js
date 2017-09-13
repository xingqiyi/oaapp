 
import { put, take, call, fork } from 'redux-saga/effects';
import store from 'react-native-simple-store';
import * as types from '../constants/ActionTypes';
import ToastUtil from '../utils/ToastUtil';
import { request } from '../utils/RequestUtil';
import { WEXIN_ARTICLE_TYPE } from '../constants/Urls';
import { fetchTypeList, receiveTypeList } from '../actions/category';

export function* requestTypeList() {
	try {
		yield put(fetchTypeList());
		const typeList = yield call(request, WEXIN_ARTICLE_TYPE, 'get');
		yield put(receiveTypeList(typeList.showapi_res_body.typeList));
		yield call(store.save, 'typeList', typeList.showapi_res_body.typeList);
		const errorMessage = typeList.showapi_res_error;
		if (errorMessage && errorMessage !== '') {
			yield ToastUtil.showShort(errorMessage);
		}
	} catch (error) {
		yield put(receiveTypeList([]));
		yield ToastUtil.showShort('网络发生错误，请重试');
	}
}

export function* watchRequestTypeList() {
	while (true) {
		yield take(types.REQUEST_TYPE_LIST);
		yield fork(requestTypeList);
	}
}
