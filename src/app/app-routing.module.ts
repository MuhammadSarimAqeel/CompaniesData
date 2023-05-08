import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperianHomeComponent } from './experian-home/experian-home.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"experian-home",
    pathMatch:"full",
    component:ExperianHomeComponent
  },
  {
    path:"",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
