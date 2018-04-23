import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  todos:Array<Todo> = []

  constructor() {
    this.todos = JSON.parse(localStorage.getItem('angular-todo') || '[]')
  }

  private updateStorage() {
    localStorage.setItem('angular-todo', JSON.stringify(this.todos))
  }

  add(title: string) {
    this.todos.push(new Todo(title))
    this.updateStorage()
  }

  delete(index: number) {
    this.todos.splice(index,1)
    this.updateStorage()
  }

}

export class Todo {
  completed: Boolean;
  title: String;

  constructor(title: String) {
    this.title = title
    this.completed = false
  }

}
