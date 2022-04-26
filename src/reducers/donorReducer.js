import { FETCH_DONOR,DELETE_DONOR } from "../constants/actionTypes";
export default (donors = [], action) => {
  switch (action.type) {
    case FETCH_DONOR:
      return action.payload;
    case DELETE_DONOR:
      return donors.filter((donor) => donor._id !== action.payload);
    
    default:
      return donors;
  }
};
