import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './static-pages/about/about.component';
import { ServicesComponent } from './static-pages/services/services.component';
import { ContactUsComponent } from './static-pages/contact-us/contact-us.component';

const routes: Routes = [
  {path: "",component: HomeComponent }  ,
  {path: "home",component: HomeComponent },
  {path: "about",component: AboutComponent } ,
  {path: "services",component: ServicesComponent },
  {path: "contact",component: ContactUsComponent }  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }