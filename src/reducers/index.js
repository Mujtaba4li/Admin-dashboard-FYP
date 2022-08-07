import {combineReducers} from 'redux';
import donor from './donorReducer';
import needy from './needyReducer';
import category from './categoryReducer';
import alldonors from './GetAllDonor';
import allneedies from './GetAllNeedy';
export default combineReducers({
donor,
needy,
category,
alldonors,
allneedies
});
