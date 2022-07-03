const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User =require('./Models/user.model')
const jwt = require('jsonwebtoken')


app.use(cors())
app.use(express.json())


mongoose.connect('mongodb+srv://root:abhi1234@cluster0.jczzzep.mongodb.net/?retryWrites=true&w=majority')

app.post('/api/register',async (req,res)=>{
    const{email}=req.body;
try{
    const user= await User.findOne({
        email:email,
    })
    if(user){
        const token = jwt.sign(
            {
                email:user.email,
            },
            'secret899008'
        )
        res.json({status:'ok',user:token})
    }
    else{
        const user= await User.create({
            email:email,
        })
        const token = jwt.sign(
            {
                email:email,
            },
            'secret899008'
        )
        res.json({status:'ok',user:token})
    }
}
catch(err){
console.log('error',err)
}

})

app.get('/register',(req,res)=>{
res.send('welcome user')
})
app.listen(13371,()=>{
    console.log('server up')
})