import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InteractionService {
  constructor() {}

  getSumOf(num1: number, num2: number) {
    return num1 + num2;
  }

  users = [
    { userId: 10, username: 'admin' },
    { userId: 15, username: 'client' },
    { userId: 20, username: 'root' },
  ];
}
