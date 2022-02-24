import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChildHomeComponent } from '../child-home/child-home.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(ChildHomeComponent)
  childHome!: ChildHomeComponent;
  constructor() {}

  @ViewChild('homeTitle') homeTitle!: ElementRef;
  names: any;
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.homeTitle.nativeElement.innerHTML);
    this.homeTitle.nativeElement.innerHTML = 'Home Component';

    this.childHome.isChildVisible = true;
    console.log(this.childHome.today);
    this.names = setInterval(() => {
      this.childHome.today = new Date();
    }, 1000);
  }

  arr = {
    nchild: '',
    echild: '',
  };
  placeholder = 'Enter Name';

  submitValue(childName: any, childEmail: any) {
    this.arr.nchild = childName.value;
    this.arr.echild = childEmail.value;
  }

  ngOnDestroy() {}
}
