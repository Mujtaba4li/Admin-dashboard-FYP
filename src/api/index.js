import axios from 'axios';
// const url='http://localhost:5000/api/posts';
const url='https://memories-mern-stack-project01.herokuapp.com/api/posts';
// const url='https://fyyp.herokuapp.com/Admin/donorrequests';

// DONOR APIs 
export const  fetchDonor=()=>axios.get(url);
export const deleteDonorAPI=(id)=>axios.delete(`${url}/${id}`);
export const approveDonorAPI=(id)=>axios.patch(`${url}/${id}`);



//Needy APIs
