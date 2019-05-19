import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router"

import { MainRoutes } from './Routing/Contact.MainRouting';
import { HomeComponent } from './Home/Contact.HomeComponent';
import { RegistrationComponent } from './Registration/Contact.RegistrationComponent';
import { LoginComponent } from './Login/Contact.LoginComponent';


@NgModule({
  declarations: [
    HomeComponent,RegistrationComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class MainModule { }
