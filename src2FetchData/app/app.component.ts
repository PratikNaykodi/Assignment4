import { Component ,OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit 
{
  // Create array to hold the information of batches
  public StudInfo = [];

  // Add instance of Service in constructor
  constructor(private _studentservice:StudentService)
  {
  }

  // Call the service method once
  ngOnInit() 
  {
    this._studentservice.GetStudentDetails()
    .subscribe(data=>this.StudInfo=data);
  }
}
