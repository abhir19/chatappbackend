const mongoose = require('mongoose')

const User =new mongoose.Schema(
    {    
        email:{type:String,required:true, unique:true },
    },
    {collection:'userdata'}
)
const model =mongoose.model('UserData', User)
// model.createIndexes();


module.exports= model
