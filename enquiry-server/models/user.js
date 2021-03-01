const mongoose=require('mongoose');
//database data define in model............
const User =mongoose.model('User',{
    
    name:String,
    phoneNo:String,
    email:String,
    message:String
   
})

module.exports=User;