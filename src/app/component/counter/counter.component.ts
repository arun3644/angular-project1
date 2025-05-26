import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as counterActions from '../../counter/counter.actions';
import {counterSelcetor} from '../../counter/counter.selector';
@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter$!: Observable<number>;

  constructor(private store:Store){
    this.counter$= this.store.pipe(select(counterSelcetor));
  }

  increment(){
    this.store.dispatch(counterActions.increment());
  }
  decrement(){
    this.store.dispatch(counterActions.decrement());
  }
  reset(){
    this.store.dispatch(counterActions.reset());
  }
}
