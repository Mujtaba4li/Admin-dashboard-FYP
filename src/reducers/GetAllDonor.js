import {FETCH_ALL_DONOR} from "../constants/actionTypes";
export default (alldonors = [], action) => {
  switch (action.type) {

    case FETCH_ALL_DONOR:
      return action.payload;
    
    default:
      return alldonors;
  }
};
