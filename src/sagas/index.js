
import { fork } from 'redux-saga/effects';

import { watchRequestTypeList } from './category';
import { watchRequestArticleList } from './read';

import { watchRequestNewsList } from './news';
import { watchRequestRepoList } from './repo';

export default function* rootSaga() {
	yield [fork(watchRequestTypeList),
		fork(watchRequestArticleList),
		fork(watchRequestNewsList),
		fork(watchRequestRepoList)
	];
}
