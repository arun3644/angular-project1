import { todoFeatureKey } from "./todo.reducer";
import { Todo } from "../models/todo.model";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const CreateFeatureSelector = createFeatureSelector<Todo[]>(todoFeatureKey);
export const todoSelector = createSelector(CreateFeatureSelector,(todos)=>todos)