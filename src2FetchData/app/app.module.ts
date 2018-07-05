import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentService } from './student.service'; // Import the required service


// Import httpclientmodule
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule    // Add the name into import

  ],

  providers: [StudentService],  // Register name of our service

  
  bootstrap: [AppComponent]
})
export class AppModule { }
