const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const User = require('./models/User');
const jwt=require('jsonwebtoken')
var bcrypt = require('bcryptjs');

app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/share-clud')

app.post('/api/registeradmin',async (req,res)=>{
    console.log(req.body)
    try{
        const newPassword=await bcrypt.hash(req.body.password,10)
        const user=await User.create({
            name:req.body.name,
            email:req.body.email,
            password:newPassword,
        })
        res.json({Status:'OK'})
    }catch(err){
        res.json({Status:'Error',error:'Duplicated email'})

    }
})

app.post('/api/login',async (req,res)=>{
   const user=await User.findOne({
    name:req.body.name,
    // password:req.body.password,
   })
   if(!user){
       return {status:'error',error:'Invalid log'}
   }
   const isPasswordValid=await bcrypt.compare(req.body.password,user.password)

    if(user){
        const token=jwt.sign({
            name:user.name,
            email:req.email,
        },'secret123')


        return res.json({Status:'OK', user:token}) 

    }
    else{
        return res.json({Status:'error', user:false})

    }
})

app.get('/hello',(req,res)=>{
    res.send("Hello Mujtaba")
})



const port = 420;
app.listen(port, () => {
    console.log(`Example app listening on port at http://localhost:${port}`);
  });