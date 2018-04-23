import { Component } from '@angular/core';
import { Todo, TodoService } from './todo.service'

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
    this.service.add(this.newTodo)
    this.newTodo = ''
  }

  deleteTodo(todo: Todo)  {
    this.service.delete(todo)
  }

  toggleCompletion(todo: Todo) {
    this.service.toggleCompletion(todo);
  }
}
