import {FETCH_ALL_NEEDY} from "../constants/actionTypes";
export default (alldonors = [], action) => {
  switch (action.type) {

    case FETCH_ALL_NEEDY:
      return action.payload;
    
    default:
      return alldonors;
  }
};
