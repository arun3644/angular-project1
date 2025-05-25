import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './store/todos/todo.component';
// import { CounterComponent } from './components/counter.component';

@Component({
  selector: 'app-root',
  imports: [TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx';
}



// // src/app/app.component.ts
// import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
// import * as UserActions from './store/actions/user.actions';
// import * as UserSelectors from './store/selectors/user.selectors';
// import { Observable } from 'rxjs';
// import { User } from './store/models/user.model';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <h1>User List (Standalone NgRx)</h1>
//     <div *ngIf="loading$ | async">Loading...</div>
//     <ul>
//       <li *ngFor="let user of users$ | async">{{ user.name }} ({{ user.email }})</li>
//     </ul>
//     <div *ngIf="error$ | async as err">Error: {{ err }}</div>
//   `
// })
// export class AppComponent implements OnInit {
//   users$: Observable<User[]>;
//   loading$: Observable<boolean>;
//   error$: Observable<any>;

//   constructor(private store: Store) {
//     this.users$ = this.store.select(UserSelectors.selectAllUsers);
//     this.loading$ = this.store.select(UserSelectors.selectLoading);
//     this.error$ = this.store.select(UserSelectors.selectError);
//   }

//   ngOnInit() {
//     this.store.dispatch(UserActions.loadUsers());
//   }
// }
