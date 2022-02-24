import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('name') name!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  genrix() {
    console.log(this.name);
  }
}
