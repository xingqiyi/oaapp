
import { combineReducers } from 'redux';
import news from './news';
import category from './category';



const rootReducer = combineReducers({
	news,
	category
});

export default rootReducer;
