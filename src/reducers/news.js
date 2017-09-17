
import * as types from '../constants/ActionTypes';

const initialState = {
	loading: false,
	newsList: {}
};

export default function news(state = initialState, action) {
	switch (action.type) {
	case types.FETCH_TYPE_LIST:
		return Object.assign({}, state, {
			loading: true
		});
	case types.RECEIVE_TYPE_LIST:
		return Object.assign({}, state, {
			loading: false,
			newsList: action.newsList
		});
	default:
		return state;
	}
}
