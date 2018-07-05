import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudInfo } from './StudInfo';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // Add dependency in service constructor for httpclient 
  constructor(private http:HttpClient) 
 {

  }

  private _url:string = "/assets/Data/StudInfo.json";

 // Write method in service class which returns array 
 // of batch details
 
GetStudentDetails():Observable<IStudInfo[]>
{
  return this.http.get<IStudInfo[]>(this._url);
}

}
