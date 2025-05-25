// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// // import { CounterComponent } from './app/components/counter/counter.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
// import { TodoComponent } from './app//todo/todo.component';

import { appConfig } from './app/app.config';
import { TodoComponent } from './app/store/todos/todo.component';

bootstrapApplication(TodoComponent, appConfig).catch(err => console.error(err));
