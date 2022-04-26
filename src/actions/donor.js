// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import {FETCH_DONOR,DELETE_DONOR} from '../constants/actionTypes'

import * as api from '../api/index.js';
//Get donors
export const getDonor=()=> async(dispatch)=>{
    try {
        const{data}=await api.fetchDonor();
        dispatch({type:FETCH_DONOR,payload:data});
    } catch (error) {
        console.log(error.message);
    }
}


//Delete Donor
export const deleteDonor = (id) => async (dispatch) => {
    try {
  
      dispatch({ type: DELETE_DONOR, payload: id });
      await api.deleteDonorAPI(id);
  
    } catch (error) {
      console.log(error.message);
    }
  };
  
// export default getDonor;

// export const getPosts = () => async (dispatch) => {
//   try {
//     const { data } = await api.fetchPosts();

//     dispatch({ type: FETCH_ALL, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const createPost = (post) => async (dispatch) => {
//   try {
//     const { data } = await api.createPost(post);

//     dispatch({ type: CREATE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post);

//     dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const likePost = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.likePost(id);

//     dispatch({ type: LIKE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const deletePost = (id) => async (dispatch) => {
//   try {
//     await api.deletePost(id);

//     dispatch({ type: DELETE, payload: id });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// // 