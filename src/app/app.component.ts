import { Component } from '@angular/core';
import { TodoService } from './todo.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent {
  service: TodoService
  newTodo = ''

  constructor(service: TodoService) {
    this.service = service
  }

  addTodo() {
    this.service.todos.push(this.newTodo)
    this.newTodo = ''
  }
}
