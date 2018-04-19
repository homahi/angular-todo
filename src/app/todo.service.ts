import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  todos = []

  constructor() {
    this.todos = [
      'todo1',
      'todo2',
      'todo3',
      'todo4'
    ]
  }

}
