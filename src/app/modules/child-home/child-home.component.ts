import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-home',
  templateUrl: './child-home.component.html',
  styleUrls: ['./child-home.component.scss'],
})
export class ChildHomeComponent implements OnInit {
  // @Input() MyValue = '';
  @Input() MyEmail: any;

  @Output() greetEvent = new EventEmitter();
  pname = 'Rajesh';
  constructor() {}
  today: Date = new Date();
  childTitle = 'ChildHome Component';
  isChildVisible: boolean = true;

  ngOnInit(): void {}

  isComponentExit: boolean = true;

  delete() {
    this.isComponentExit = !this.isComponentExit;
  }

  callParentGreet() {
    this.greetEvent.emit(this.pname);
  }
}
