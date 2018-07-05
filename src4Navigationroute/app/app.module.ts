import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OperatingSystemComponent } from './operating-system/operating-system.component';
import { ProgrammingLaguagesComponent } from './programming-laguages/programming-laguages.component';
import { DatabasesComponent } from './databases/databases.component';

import{ AppRoutingModule }  from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    OperatingSystemComponent,
    ProgrammingLaguagesComponent,
    DatabasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
