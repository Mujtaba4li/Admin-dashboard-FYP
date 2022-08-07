import { FETCH_DONOR,DELETE_DONOR ,APPROVE_DONOR,BLOCK_DONOR,UNBLOCK_DONOR,FETCH_ALL_DONOR} from "../constants/actionTypes";
export default (donors = [], action) => {
  switch (action.type) {
    case FETCH_DONOR:
      return action.payload;
    case FETCH_ALL_DONOR:
      return action.payload;
    case DELETE_DONOR:
      return donors.filter((donor) => donor._id !== action.payload);
    case APPROVE_DONOR:
      return donors.filter((donor) => donor._id !== action.payload);
      case BLOCK_DONOR:
     return donors.filter((donor) => donor._id !== action.payload);
      case UNBLOCK_DONOR:
     return donors.filter((donor) => donor._id !== action.payload);
    default:
      return donors;
  }
};
