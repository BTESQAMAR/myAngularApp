import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './static-pages/home/home.component';
import { AboutComponent } from './static-pages/about/about.component';
import { ServicesComponent } from './static-pages/services/services.component';
import { ContactUsComponent } from './static-pages/contact-us/contact-us.component';
import { UserProfileComponent } from './static-pages/user-profile/user-profile.component';
import { LoginPageComponent } from './static-pages/login-page/login-page.component';

const routes: Routes = [
  {path: "",component: HomeComponent }  ,
  {path: "home",component: HomeComponent },
  {path: "about",component: AboutComponent } ,
  {path: "services",component: ServicesComponent },
  {path: "contact",component: ContactUsComponent },
  {path: "user-profile",component: UserProfileComponent }  ,
  {path: "login",component: LoginPageComponent }  


 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
