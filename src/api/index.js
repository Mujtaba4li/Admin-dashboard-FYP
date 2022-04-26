import axios from 'axios';
// const url='http://localhost:5000/api/posts';
const url='https://memories-mern-stack-project01.herokuapp.com/api/posts';
// const url='https://fyyp.herokuapp.com/Admin/donorrequests';
export const  fetchDonor=()=>axios.get(url);
export const deleteDonorAPI=(id)=>axios.delete(`${url}/${id}`);
// export const createPost=(newPost)=>axios.post(url,newPost);
// export const updatePost=(id,upatedPost)=>axios.patch(`${url}/${id}`,upatedPost);
// export const likePost=(id)=>axios.patch(`${url}/${id}/likePost`);