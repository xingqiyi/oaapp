
import { combineReducers } from 'redux';
import repo from './repo';
import news from './news';
import category from './category';



const rootReducer = combineReducers({
	repo,
	news,
	category
});

export default rootReducer;
