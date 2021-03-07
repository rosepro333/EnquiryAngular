var express = require('express');
var router = express.Router();
const enquiryService= require("../services/enquiry.service");
const User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  //GIVE DATA TO DATABASE...................
  // const user=new User(
  //  {
      
    
  //   name:"rosemary",
  //   phoneNo:"3311135656",
  //   email:"rose@gmail.com",
  //   message:"haiii"
      
  //  })
  //  user.save();
  
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

//details ....................................................
 router.get('/details' ,function(req, res) {
   enquiryService.getDetails()
     .then(users=>{
     res.send(users);

      });
   });
 
//..............get user profile.........

router.get('/profile/:id', function(req, res) {
   console.log(req.params.id)
   enquiryService.getUser(req.params.id)
          .then(user=>{
            
               res.send(
                   user
               );

            });
    
  }); 

  
//PROFILE UPDATION...............
 router.put('/update/:id', function(req, res) {
   console.log(req.params.id,req.body)
  enquiryService.updateUser(req.params.id,req.body)
  .then(user=>{
  //  console.log(user)
        res.send({message:"Profile  updated successfully"});

      });

 });







module.exports = router;
