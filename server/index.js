const express=require('express');
const app=express();
app.get('/hello',(req,res)=>{
    res.send("Hello Mujtaba")
})



const port = 420;
app.listen(port, () => {
    console.log(`Example app listening on port at http://localhost:${port}`);
  });