import {FETCH_CATEGORIES, DELETE_CATEGORIES,ADD_CATEGORY} from '../constants/actionTypes'

import * as api from '../api/index.js';
export const getCategories=()=> async(dispatch)=>{
    try {
        const{data}=await api.fetchCategoryAPI();
        console.log("I am Category")
        dispatch({type:FETCH_CATEGORIES,payload:data});
    } catch (error) {
        console.log(error.message);
    }
}

//Delete Categories
export const deleteCategories= (id) => async (dispatch) => {
    try {
  
      // alert(id);
      await api.deleteCategoryAPI(id);
      window.location.reload();
      dispatch({ type: DELETE_CATEGORIES, payload: id });
  
    } catch (error) {
      console.log(error.message);
    }
  };
  

  // Add new category 
  export const addCategory = (newdata) => async (dispatch) => {
    try {
      const  {data}  = await api.addCategoryAPI(newdata);
      dispatch({ type: ADD_CATEGORY, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };