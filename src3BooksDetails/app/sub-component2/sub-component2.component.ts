import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-sub-component2',
  templateUrl: './sub-component2.component.html',
  styleUrls: ['./sub-component2.component.css']
})
export class SubComponent2Component implements OnInit {

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
