import { createReducer, on } from '@ngrx/store';
import * as counterActions from "./counter.actions";

export const createFeatureKey="counter";

export interface CounterState{
  counter:number;
}

export const initialState: CounterState={
  counter:0
}

export const counterReducer= createReducer(
  initialState,
  on(counterActions.increment, (state)=> ({...state, counter : state.counter +1})),
  on(counterActions.decrement, (state)=> ({...state, counter : state.counter - 1})),
  on(counterActions.reset, (state)=> ({...state, counter : state.counter - state.counter})),
  
)