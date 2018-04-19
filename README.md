# AngularToDoアプリ

## 目標

Todoアプリを見よう見真似で書いてみる。少しずつコードの抽象度を上げる練習をする。

## 説明すること

Angularの要素について

## 説明しないこと

* TypeScriptの構文について
* HTMLの構文について

# 進め方

1. HTMLでToDoリストの外枠を書く
```
<section class="todoapp">
  <header class="header">
    <h1>todos</h1>
  </header>
  <section class="main">
    <ul class="todo-list">
      <li>
        <div class="view">
        todo1
        </div>
      </li>
      <li>
        <div class="view">
        todo2
        </div>
      </li>
      <li>
        <div class="view">
        todo3
        </div>
      </li>
    </ul>
  </section>
</section>
```


2. データ部分をTypeScriptに移す

TypeScript側に変数を定義する
```
export class AppComponent {
  todos = [
    'todo1',
    'todo2',
    'todo3',
    'todo4'
  ]
  title = 'app';
}
```

HTML側で変数を利用する
```
  <section class="main">
    <ul class="todo-list">
      <li *ngFor="let todo of todos">
        <div class="view">{{todo}}</div>
      </li>
    </ul>
  </section>
```

3. データ部分をサービスに移譲する

新たなサービスを定義する

* サービスとはMVVMのモデルに該当する部分でデータソースやビジネスロジックの役割を担う

`ng generate service todo`

todoリストをサービス側に移譲する

```
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
```

この時providersでの注入をわすれない
```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent {
  service: TodoService

  constructor(service: TodoService) {
    this.service = service
  }
}
```

HTMLはサービス側から値をとる

```
      <li *ngFor="let todo of service.todos">
        <div class="view">{{todo}}</div>
      </li>

```
