import axios from 'axios';
// const url='http://localhost:5000/api/posts';
const CategoryUrl='https://memories-mern-stack-project01.herokuapp.com/api/posts';
const url='https://fyyp.herokuapp.com/Admin/donorrequests';
const needyUrl='https://fyyp.herokuapp.com/Admin/needyrequests';

// DONOR APIs 
export const  fetchDonor=()=>axios.get(url);
export const deleteDonorAPI=(id)=>axios.delete(`${url}/${id}`);
export const approveDonorAPI=(id)=>axios.patch(`${url}/${id}`);



//Needy APIs

export const  fetchNeedyAPI=()=>axios.get(needyUrl);
export const deleteNeedyAPI=(id)=>axios.delete(`${needyUrl}/${id}`);
export const approveNeedyAPI=(id)=>axios.patch(`${needyUrl}/${id}`);

//Manage Category
 export const fetchCategoryAPI=()=>axios.get(CategoryUrl);