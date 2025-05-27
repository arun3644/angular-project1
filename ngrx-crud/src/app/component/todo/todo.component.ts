import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo.model';
import { Observable } from "rxjs";
import { select, Store } from '@ngrx/store';
import * as createAction from "../../todo/todo.actions";
import { todoSelector } from '../../todo/todo.selectors';
@Component({
  selector: 'app-todo',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  title = "";
  todos$!: Observable<Todo[]>
  editId: number | null = null;
  editTitle = "";
  constructor(private store: Store) {
    this.todos$ = this.store.pipe(select(todoSelector));
  }
  add(): void {
    if (this.title.length > 0) {
      this.store.dispatch(createAction.add({ todo: {id:Date.now(), title: this.title} }));
      this.title = "";
    }

  }
  edit(i: Todo): void {
    this.editId = i.id;
    this.editTitle = i.title;
  }
  update(): void {
    if (this.editId != null) {
      this.store.dispatch(createAction.update({ todo: { id: this.editId, title: this.editTitle } }));
    }
    this.editId = null;
    this.editTitle = "";
  }
  delete(id:number):void{
    this.store.dispatch(createAction.deleted({id}));
  }

}

