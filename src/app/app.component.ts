import { Component } from '@angular/core';
import { CounterComponent } from './component/counter/counter.component';
import { TodoComponent } from './component/todo/todo.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx';
}
