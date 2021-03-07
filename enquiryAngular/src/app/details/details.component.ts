import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../Services/enquiry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
//details:any=[];
   //object in array...here we know each type..that why we mentioned the type...
 details:{name:string,phoneNo:string,email:string,message:string}[]  = [];


constructor(private enquiryService:EnquiryService,private router:Router ) 
{

 //this.details=enquiryService.getDetails();
 this.enquiryService.getDetails()
   .subscribe((data:any)=>{
     //console.log(data)
    this.details=data;
   
 
   });
}


  ngOnInit(): void {
  }


   edit(item:any)
   {
    //this.router.navigateByUrl("/users/"+item._id)
     this.router.navigate(["profile",item._id])
    // this.router.navigateByUrl("/profileedit")

   }

}
