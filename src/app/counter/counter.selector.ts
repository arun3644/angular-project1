import { createFeatureSelector, createSelector } from "@ngrx/store";
import { createFeatureKey, CounterState } from "./counter.reducer";

export const CreateFeatureSelector = createFeatureSelector<CounterState>(createFeatureKey);

export const counterSelcetor = createSelector(
    CreateFeatureSelector,
    (state:CounterState)=>state.counter
)