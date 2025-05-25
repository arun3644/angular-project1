import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import * as TodoActions from './todo.actions';
import { selectTodos } from './todo.selectors';
import { Todo } from './todo.model'; 

@Component({
  standalone: true,
  selector: 'app-todo',
  template: `
    <h2>Todo List</h2>
    <ul>
      <li *ngFor="let todo of todos()">
        {{ todo.title }}
        <button (click)="delete(todo.id)">Delete</button>
      </li>
    </ul>
    <input [(ngModel)]="newTitle" placeholder="New todo" />
    <button (click)="add()">Add</button>
  `,
  imports: [CommonModule, FormsModule],
})
export class TodoComponent {
  private store = inject(Store);

  // ✅ Specify the type of todos
  todos = signal<Todo[]>([]);
  newTitle = '';

  constructor() {
    this.store.dispatch(TodoActions.loadTodos());
    this.store.pipe(select(selectTodos)).subscribe(t => this.todos.set(t));
  }

  add() {
    if (this.newTitle.trim()) {
      this.store.dispatch(TodoActions.addTodo({ title: this.newTitle }));
      this.newTitle = '';
    }
  }

  delete(id: number) {
    this.store.dispatch(TodoActions.deleteTodo({ id }));
  }
}
