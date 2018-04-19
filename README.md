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
```
  <section class="main">
    <ul class="todo-list">
      <li *ngFor="let todo of todos">
        <div class="view">{{todo}}</div>
      </li>
    </ul>
  </section>
```
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
