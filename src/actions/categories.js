import {FETCH_CATEGORIES} from '../constants/actionTypes'

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
