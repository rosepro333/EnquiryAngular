import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment"


const apiUrl=environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

constructor (private http:HttpClient){

                                     }

 //object in array...here we know each type..that why we mentioned the type...
//details:{name:string,phoneNo:string,email:string,message:string}[]  = [];

add=(name:string,phoneNo:string,email:string,message:string)=>
  {
     //httprequest
     console.log(phoneNo)
     
      return this.http.post(apiUrl+"add",{
            "name":name,
            "phoneNo":phoneNo,
            "email":email,
            "message":message

          });
   
        
  }

    
  //show details..........
  getDetails=()=> 
  {

    return this.http.get(apiUrl+"details");
  // let dataset=this.accountDetails;
  // return dataset["userone"].history;
}

  
  
  
}
