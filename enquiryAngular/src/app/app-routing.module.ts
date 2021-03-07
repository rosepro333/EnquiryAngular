import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { DetailsComponent } from './details/details.component';
import { ProfileeditComponent } from './profileedit/profileedit.component';



const routes: Routes = [
  {path:'',component:EnquiryComponent},
  {path:'enquiry',component:EnquiryComponent},
  {path:'details',component:DetailsComponent},
  {path:'profile/:id',component: ProfileeditComponent}

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
