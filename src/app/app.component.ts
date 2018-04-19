import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [
    'todo1',
    'todo2',
    'todo3',
    'todo4'
  ]
  title = 'app';
}
