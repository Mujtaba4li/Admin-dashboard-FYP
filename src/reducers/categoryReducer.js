import {FETCH_CATEGORIES} from "../constants/actionTypes";
export default (categories = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload;
 
    default:
      return categories;
  }
};
