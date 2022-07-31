import {FETCH_NEEDY, DELETE_NEEDY, APPROVE_NEEDY,UNBLOCK_NEEDY,BLOCK_NEEDY} from "../constants/actionTypes";
import * as api from '../api/index.js';
//Get needy
export const getNeedy=()=> async(dispatch)=>{
    try {
        const{data}=await api.fetchNeedyAPI();
        console.log("I am needy")

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
  };

    //Block Needy
    export const blockNeedy=(id)=>async(dispatch)=>{
      try {
        dispatch({type:BLOCK_NEEDY,payload:id});
        await api.BlockNeedyAPI(id);
        alert("Needy Block successfully");
        
      } catch (error) {
        console.log(error.message);
      }
    };
  
    
    //UnBlock needy
    export const unblockNeedy=(id)=>async(dispatch)=>{
      try {
        dispatch({type:UNBLOCK_NEEDY,payload:id});
        await api.UnblockNeedyAPI(id);
        alert("Donor UnBlock successfully");
        
      } catch (error) {
        console.log(error.message);
      }
    };
  