import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileeditComponent } from './profileedit/profileedit.component';

@NgModule({
  declarations: [
    AppComponent,
    EnquiryComponent,
    DetailsComponent,
    ProfileeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
