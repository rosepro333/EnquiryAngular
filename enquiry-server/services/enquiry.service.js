const User = require('../models/user');

 //object in array...here we know each type..that why we mentioned the type...
 let details= [];


 const add=(name,phoneNo,email,message)=>
 {
  const user=new User(
    {
     name:name,
     phoneNo:phoneNo,
     email:email,
     message:message
      
    })
    user.save()
    return { message:"message sent succesfully" } 
     
      
 }

//show enquiry details.....................................
 const getDetails=()=>
  {
  return User.find();
  
  }

 //invidual detail.........................................
   const getUser=(_id)=>
  {
   return User.findById(
        _id
     //username:uname
   );
  }

//.....update......................................
const updateUser=function(_id,data)
{
  return User.findOneAndUpdate({_id},data);

}
 



  module.exports={

   add,
   getDetails,
   getUser,
   updateUser
   
   

    
  }  
  