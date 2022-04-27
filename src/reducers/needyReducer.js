import {FETCH_NEEDY, DELETE_NEEDY, APPROVE_NEEDY} from "../constants/actionTypes";
export default (needies = [], action) => {
    switch (action.type) {
      case FETCH_NEEDY:
        return action.payload;
      case DELETE_NEEDY:
        return needies.filter((needy) => needy._id !== action.payload);
      case APPROVE_NEEDY:
        return needies.filter((needy) => needy._id !== action.payload);
      default:
        return needies;
    }
  };
  