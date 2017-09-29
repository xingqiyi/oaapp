
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from '../reducers/index';

const middlewares = [];
const { logger } = require('redux-logger');

// configuring saga middleware
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);
/* global __DEV__  */
if (__DEV__) {
	console.log('__DEV__');
	middlewares.push(logger);
}
else {
	global.console = {
		info: () => { },
		log: () => { },
		warn: () => { },
		debug: () => { },
		error: () => { },
	};
}
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(rootReducer, initialState);
	// install saga run
	store.runSaga = sagaMiddleware.run;
	store.close = () => store.dispatch(END);

	return store;
}
