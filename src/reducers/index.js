import {combineReducers} from 'redux';
import donor from './donorReducer';
import needy from './needyReducer';
import category from './categoryReducer';
export default combineReducers({
donor,
needy,
category,
});
