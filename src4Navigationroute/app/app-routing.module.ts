import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatingSystemComponent } from './operating-system/operating-system.component';
import { ProgrammingLaguagesComponent } from './programming-laguages/programming-laguages.component';
import { DatabasesComponent } from './databases/databases.component';

const routes: Routes = [
  {path : 'operating-system', component:OperatingSystemComponent},
  {path : 'programming-laguages' ,component: ProgrammingLaguagesComponent},
  {path : 'databases', component:DatabasesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
