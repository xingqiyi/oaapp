
import { fork } from 'redux-saga/effects';

import { watchRequestTypeList } from './category';
import { watchRequestArticleList } from './read';

import { watchRequestNewsList } from './news';

export default function* rootSaga() {
	yield [fork(watchRequestTypeList), fork(watchRequestArticleList), fork(watchRequestNewsList)];
}
