import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  todos = []

  constructor() {
    this.todos = JSON.parse(localStorage.getItem('angular-todo') || '[]')
  }

  private updateStorage() {
    localStorage.setItem('angular-todo', JSON.stringify(this.todos))
  }

  add(todo: string) {
    this.todos.push(todo)
    this.updateStorage()
  }

  delete(index: number) {
    this.todos.splice(index,1)
    this.updateStorage()
  }

}
