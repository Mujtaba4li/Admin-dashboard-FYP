 import {FETCH_DONOR,DELETE_DONOR,APPROVE_DONOR, BLOCK_DONOR,UNBLOCK_DONOR,FETCH_ALL_DONOR} from '../constants/actionTypes'

import * as api from '../api/index';
//Get donors
export const getDonor=()=> async(dispatch)=>{
    try {
        const{data}=await api.fetchDonor();
        console.log("I am donor")
        dispatch({type:FETCH_DONOR,payload:data});
    } catch (error) {
        console.log(error.message);
    }
}
// get ALl donor 
export const GetAllDonorApi=()=>async(dispatch)=>{
  try {
    const{data}=await api.getAllDonorApi();
    console.log("I am donor")
    dispatch({type:FETCH_ALL_DONOR,payload:data});
  } catch (error) {
    console.log(error.message);
  }
}

//Delete Donor
export const deleteDonor = (id) => async (dispatch) => {
    try {
  
      dispatch({ type: DELETE_DONOR, payload: id });
      await api.deleteDonorAPI(id)
  
    } catch (error) {
      console.log(error.message);
    }
  };
  

  //approve donor
  export const approveDonor=(id)=>async(dispatch)=>{
    try {
      dispatch({type:APPROVE_DONOR, payload:id});
      await api.approveDonorAPI(id);
      alert("Donor approve successfully")
      
    } catch (error) {
      console.log(error.message);
    }
  };
  //Block donor
  export const BlockDonor=(id)=>async(dispatch)=>{
    try {
      dispatch({type:BLOCK_DONOR,payload:id});
      await api.BlockDonorAPI(id);
      alert("Donor Block successfully");
      
    } catch (error) {
      console.log(error.message);
    }
  };



  //UnBlock donor
  export const unblockDonor=(id)=>async(dispatch)=>{
    try {
      dispatch({type:UNBLOCK_DONOR,payload:id});
      await api.UnblockDonorAPI(id);
      alert("Donor UnBlock successfully");
      
    } catch (error) {
      console.log(error.message);
    }
  };

