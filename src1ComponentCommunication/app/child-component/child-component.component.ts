import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
 // Add input decorator as it will receve the data from parent
 @Input() public parentData;

 @Output() public MyEvent = new EventEmitter();
 
 // Action listener for button
 public SendEvent()
 {
   // Send the event to parent
   this.MyEvent.emit('Hello from child');
 }
  constructor() { }

  ngOnInit() {
  }

}
