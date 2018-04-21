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

  private updateStorage() {
    localStorage.setItem('angular-todo', JSON.stringify(this.todos))
  }

  add(todo: string) {
    this.todos.push(todo)
    this.updateStorage()
  }

}
