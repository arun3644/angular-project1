import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.model';

export const loadTodos = createAction('[Todo] Load Todos');
export const loadTodosSuccess = createAction('[Todo] Load Todos Success', props<{ todos: Todo[] }>());
export const loadTodosFailure = createAction('[Todo] Load Todos Failure');

export const addTodo = createAction('[Todo] Add Todo', props<{ title: string }>());
export const addTodoSuccess = createAction('[Todo] Add Todo Success', props<{ todo: Todo }>());

export const deleteTodo = createAction('[Todo] Delete Todo', props<{ id: number }>());
export const deleteTodoSuccess = createAction('[Todo] Delete Todo Success', props<{ id: number }>());
