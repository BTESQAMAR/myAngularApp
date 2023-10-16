import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// external depencies import

// import {MatSidenavModule} from '@angular/material/sidenav';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './static-pages/home/home.component';
import { SideNavbarComponent } from './static-pages/side-navbar/side-navbar.component';
import { HeaderComponent } from './static-pages/header/header.component';
import { FooterComponent } from './static-pages/footer/footer.component';
import { ServicesComponent } from './static-pages/services/services.component';
import { AboutComponent } from './static-pages/about/about.component';
import { ContactUsComponent } from './static-pages/contact-us/contact-us.component';
import { UserProfileComponent } from './static-pages/user-profile/user-profile.component';
import { LoginPageComponent } from './static-pages/login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavbarComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    AboutComponent,
    ContactUsComponent,
    UserProfileComponent,
    LoginPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MatSidenavModule,
   
   
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
