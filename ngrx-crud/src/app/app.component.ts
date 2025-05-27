import { Component } from '@angular/core';
import { CounterComponent } from './component/counter/counter.component';
import { TodoComponent } from './component/todo/todo.component';
import { EmployeeComponent } from './component/employee/employee.component';
@Component({
  selector: 'app-root',
  standalone:true,

  imports: [EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx';
}
