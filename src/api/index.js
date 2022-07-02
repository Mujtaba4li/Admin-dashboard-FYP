import axios from 'axios';
// const url='http://localhost:5000/api/posts';

const baseURL='https://fyyp.herokuapp.com';
// const baseURL='http://192.168.43.143:6600';

const url=baseURL+'/Admin/donorrequests';
const needyUrl=baseURL+'/Admin/needyrequests';
const rejectDonorApi=baseURL+'/Admin/rejectdonor';
const approveDonorApi=baseURL+'/Admin/approvedonor';
const approveNeedy=baseURL+'/Admin/approveneedy';
const rejectNeedy=baseURL+'/admin/rejectneedy';
// const CategoryUrl=baseURL+'/admin/category';


const CategoryUrl='https://memories-mern-stack-project01.herokuapp.com/api/posts';
// DONOR APIs 
export const  fetchDonor=()=>axios.get(url);
export const deleteDonorAPI=(id)=>axios.post(rejectDonorApi,{
    donorId:id
});
export const approveDonorAPI=(id)=>axios.post(approveDonorApi,{
    donorId:id
});


//Needy APIs
export const  fetchNeedyAPI=()=>axios.get(needyUrl);
export const deleteNeedyAPI=(id)=>axios.post(rejectNeedy,{
    needyId:id
});
export const approveNeedyAPI=(id)=>axios.post(approveNeedy,{
    needyId:id
});

//Manage Category
 export const fetchCategoryAPI=()=>axios.get(CategoryUrl);
 export const deleteCategoryAPI=(id)=>axios.delete(`${CategoryUrl}/${id}`);
 export const addCategoryAPI=(newData)=>axios.post(CategoryUrl,newData);