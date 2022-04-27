import {combineReducers} from 'redux';
import donor from './donorReducer'
import needy from './needyReducer'
export default combineReducers({
donor,
needy,
});
