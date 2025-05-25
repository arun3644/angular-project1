// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
// import { counterFeatureKey, counterReducer } from './counter/counter.reducer';
// import { provideState, provideStore } from '@ngrx/store';

// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }),
//   provideRouter(routes)],
//   provideStore(),
//   provideState(counterFeatureKey, counterReducer),

// };

// import {  ApplicationConfig,
//   provideZoneChangeDetection}from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
// import { provideState, provideStore } from '@ngrx/store';
// import {  provideStoreDevtools} from '@ngrx/store-devtools';
// import { counterFeatureKey,counterReducer } from './counter/counter.reducer';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideZoneChangeDetection({ eventCoalescing: true }),
//     provideStore(),
//     provideState(counterFeatureKey, counterReducer),
//     provideStoreDevtools({ maxAge: 25, logOnly: false }),
//   ],
// };


import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { todoReducer } from './store/todos/todo.reducer';
import { TodoEffects } from './store/todos/todo.effects';
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideStore({ todo: todoReducer }),
    provideEffects([TodoEffects]),
  ],
};
