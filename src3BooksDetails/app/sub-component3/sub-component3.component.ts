import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-sub-component3',
  templateUrl: './sub-component3.component.html',
  styleUrls: ['./sub-component3.component.css']
})
export class SubComponent3Component implements OnInit {

 // Create array to hold the information of books
 public books = [];

 // Add instance of Service in constructor
 constructor(private _bookservice:BookService)
 {
 }

 // Call the service method once
 ngOnInit() 
 {
   this.books = this._bookservice.GetBookDetails();
 }

}
