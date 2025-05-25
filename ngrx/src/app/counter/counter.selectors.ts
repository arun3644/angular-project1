import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterFeatureKey , CounterState} from './counter.reducer';

export const counterFeartureSelector = createFeatureSelector<CounterState>(counterFeatureKey);

export const counterSelector= createSelector(
    counterFeartureSelector,
    (state:CounterState)=>state.counter,
);