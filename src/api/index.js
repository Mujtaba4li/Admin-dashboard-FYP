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

// block&Unblock
const blockDonorApi=baseURL+'/Admin/blockdonor'
const unblockDonorApi=baseURL+'/Admin/unblockdonor'

const blockNeedyApi=baseURL+'/Admin/blockneedy'
const unblockNeedyApi=baseURL+'/Admin/unblockneedy'



const CategoryUrl='https://fyyp.herokuapp.com/admin/category';
// DONOR APIs 
export const  fetchDonor=()=>axios.get(url);
export const deleteDonorAPI=(id)=>axios.post(rejectDonorApi,{
    donorId:id
});
export const approveDonorAPI=(id)=>axios.post(approveDonorApi,{
    donorId:id
});
export const BlockDonorAPI=(id)=>axios.post(blockDonorApi,{
    donorId:id
});
export const UnblockDonorAPI=(id)=>axios.post(unblockDonorApi,{
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


export const BlockNeedyAPI=(id)=>axios.post(blockNeedyApi,{
    donorId:id
});
export const UnblockNeedyAPI=(id)=>axios.post(unblockNeedyApi,{
    donorId:id
});



//Manage Category
 export const fetchCategoryAPI=()=>axios.get(CategoryUrl);
 export const deleteCategoryAPI=(id)=>axios.delete(`${CategoryUrl}/${id}`);
 export const addCategoryAPI=(newData)=>axios.post(CategoryUrl,newData);





//  Login api 
// export const LoginAPI = await fetch("http://localhost:420/api/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email,
//       password,
//       type: "admin",
//     }),
//   });