import {FETCH_NEEDY, DELETE_NEEDY, APPROVE_NEEDY} from "../constants/actionTypes";
import * as api from '../api/index.js';
//Get needy
export const getNeedy=()=> async(dispatch)=>{
    try {
        const{data}=await api.fetchNeedyAPI();
        dispatch({type:FETCH_NEEDY,payload:data});
    } catch (error) {
        console.log(error.message);
    }
}


//Delete Needy
export const deleteNeedy = (id) => async (dispatch) => {
    try {
  
      dispatch({ type: DELETE_NEEDY, payload: id });
      await api.deleteNeedyAPI(id);
  
    } catch (error) {
      console.log(error.message);
    }
  };
  

  //approve needy 
  export const approveNeedy=(id)=>async(dispatch)=>{
    try {
      dispatch({type:APPROVE_NEEDY, payload:id});
      await api.approveNeedyAPI(id);
      alert("Donor approve successfully")
      
    } catch (error) {
      console.log(error.message);
    }
  }