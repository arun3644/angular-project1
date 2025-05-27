import { createAction } from "@ngrx/store";

export const increment= createAction(
  '[Counter] counter increment'
)

export const decrement= createAction(
  '[Counter] counter decrement'
)

export const reset= createAction(
  '[Counter] counter reset'
)