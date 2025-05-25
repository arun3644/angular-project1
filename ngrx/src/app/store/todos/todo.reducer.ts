import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';
import { Todo } from './todo.model';

export interface TodoState {
  todos: Todo[];
  loading: boolean;
}

export const initialState: TodoState = {
  todos: [],
  loading: false,
};

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.loadTodos, state => ({ ...state, loading: true })),
  on(TodoActions.loadTodosSuccess, (state, { todos }) => ({ ...state, todos, loading: false })),
  on(TodoActions.addTodoSuccess, (state, { todo }) => ({ ...state, todos: [...state.todos, todo] })),
  on(TodoActions.deleteTodoSuccess, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(t => t.id !== id),
  }))
);
