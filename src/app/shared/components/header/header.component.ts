import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // @ViewChild('nav') nav: any;

  closefun(nav: any) {
    // console.log(nav);
    nav.classList.toggle('none');
  }
}
