import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  GetBookDetails()
{
  return [
    {"Name":"C-Programming", "Prize":"350 Rs", "Author":"AJAY MITAL" ,"NoOfPage":500},
    {"Name":"Core Java", "Prize":"400 Rs", "Author":"Nageshwara Rao" ,"NoOfPage":698},
    {"Name":"Ng-book2-angular", "Prize":"350 Rs", "Author":"Nate Murray" ,"NoOfPage":300},
    
  ];
}
}
