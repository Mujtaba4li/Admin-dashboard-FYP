import {
  FETCH_CATEGORIES,
  DELETE_CATEGORIES,
  ADD_CATEGORY,
} from "../constants/actionTypes";
export default (categories = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload;
    case DELETE_CATEGORIES:
      return categories.filter((category) => category._id !== action.payload);
    case ADD_CATEGORY:
      return [...categories, action.payload];
    default:
      return categories;
  }
};
