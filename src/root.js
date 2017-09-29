import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import rootSaga from './sagas/index';
import App from './containers/app';

const store = configureStore();

// // run root saga
store.runSaga(rootSaga);

//清除 
//clear the remote debugger warning
console.ignoredYellowBox = ['Remote debugger'];

const Root = () =>
	(<Provider store={store}>
		<App />
	</Provider>);

export default Root;

