
 //object in array...here we know each type..that why we mentioned the type...
 let details= [];


const add=(name,phoneNo,email,message)=>
  {
    
      details.push({
        name:name,
        phoneNo:phoneNo,
        email:email,
        message:message
     })
     return {
           message:"message sent succesfully"
             }  
  }

//history.....................................
const getDetails=()=>
 {
      return details;
  
 }
   


  module.exports={

   add,
   getDetails

    
  }  
  