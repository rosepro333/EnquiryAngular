var express = require('express');
var router = express.Router();
const enquiryService= require("../services/enquiry.service");
const User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  //GIVE DATA TO DATABASE...................
  const user=new User(
   {
      
    
    name:"rosemary",
    phoneNo:"2222225656",
    email:"rose@gmail.com",
    message:"haiii"
      
   })
   user.save();
  
 // res.render('index', { title: 'Express' });
});




//send message..............................................
router.post('/add', function(req, res, next) {
  console.log(req.body);
  const result=enquiryService.add(req.body.name,req.body.phoneNo,req.body.email,req.body.message)
  res.send(result);
//  if(message==1){
//           res.send({
//                 message:"message sent succesfully"
//             });
//       }
   
});

//details history.....................................................
router.get('/details' ,function(req, res) {

  
   const message=enquiryService.getDetails();
  // console.log(message)
   res.status(200).send(message);
   

 });




module.exports = router;
