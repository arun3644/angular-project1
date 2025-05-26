import { createAction, props } from "@ngrx/store";
import { Todo } from "../models/todo.model";
export const add = createAction("[Todo] todo add", props<{todo:Todo}>())

export const update = createAction('[Todo] todo update', props<{todo:Todo}>())

export const deleted =createAction('[Todo] todo deleted', props<{id:number}>())