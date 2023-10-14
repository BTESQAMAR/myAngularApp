import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';


const customeRoutes: Routes=[
// {path: "home",component: HomeComponent }  
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StaticRoutingModuleModule { }
