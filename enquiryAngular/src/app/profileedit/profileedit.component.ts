import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnquiryService } from '../Services/enquiry.service';

@Component({
  selector: 'app-profileedit',
  templateUrl: './profileedit.component.html',
  styleUrls: ['./profileedit.component.css']
})
export class ProfileeditComponent implements OnInit {

  enquiryForm=this.fb.group({

  
    name:["" ,[Validators.required]],
    phoneNo:["" ,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    email:["" ,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    message:["" ,[Validators.required,Validators.minLength(5)]]

  });

  

  constructor(private router:Router,private enquiryService:EnquiryService ,private fb:FormBuilder,private route:ActivatedRoute) {

  

      this.route.paramMap.subscribe((params:any)=>{
       console.log(params)
       //alert(params.params.id)
        const userId=params.params.id;
        console.log(userId)   
  
    
       this.enquiryService.getUserProfile(userId)
     
       .subscribe((data:any)=>{
          console.log(data)
        
         this.enquiryForm.patchValue({
            name:data.name,
            phoneNo:data.phoneNo,
            email:data.email,
            message:data.message

           })
  
       })

     })

      // this.enquiryService.getUserProfile(userId)
     
      //  .subscribe((data:any)=>{
      //     console.log(data)
        
      //    this.enquiryForm.patchValue({
      //       name:data.name,
      //       phoneNo:data.phoneNo,
      //       email:data.email,
      //       message:data.message

      //      })
  
      //  });
  

  }




  ngOnInit(): void {
  }

  

  UpdateProfile(){

    if(this.enquiryForm.valid==false){


      alert("form is invalid")
    }
    else{

      const name=this.enquiryForm.value.name;
      const phoneNo=this.enquiryForm.value.phoneNo;
      const email=this.enquiryForm.value.email;
      const message=this.enquiryForm.value.message;

      this.route.paramMap.subscribe((params:any)=>{
        console.log(params)
        //alert(params.params.id)
         const userId=params.params.id;
         console.log(userId)  
      

            this.enquiryService.UpdateProfile(name,phoneNo,email,message,userId)
            .subscribe((data:any)=>{

              alert(data.message);
            // console.log(data);
    
             })

       });  
    
    }

    
  }

}
