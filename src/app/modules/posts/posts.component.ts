import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private interactionService: InteractionService) {}
  users: any;
  ngOnInit(): void {
    this.users = this.interactionService.users;
  }

  sum!: any;
  add(a: any, b: any) {
    this.sum = this.interactionService.getSumOf(a, b);
  }
}
