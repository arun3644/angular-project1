import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

import { provideState, provideStore } from '@ngrx/store';
import { counterReducer, createFeatureKey } from './counter/counter.reducer';
import { todoFeatureKey, todoreducer } from './todo/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideStore(),
    provideState(createFeatureKey, counterReducer),
    provideState(todoFeatureKey, todoreducer),
  ]
};
