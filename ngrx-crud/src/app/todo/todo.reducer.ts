import { createReducer, on } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import * as actions from "./todo.actions";
export const todoFeatureKey="todo";

const initialState:Todo[]=[

]

export const todoreducer = createReducer(
  initialState,
  on(actions.add, (state , {todo})=> [...state, todo]),
  on(actions.update,(state,{todo})=> state.map(t=> t.id === todo.id ? {...t, ...todo} : t)),
  on(actions.deleted, (state, {id})=> state.filter(t =>t.id != id)),
)