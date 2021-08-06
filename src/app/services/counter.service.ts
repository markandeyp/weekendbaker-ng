import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter: BehaviorSubject<number> = new BehaviorSubject(0);

  getCounter(): Observable<number> {
    return this.counter.asObservable();
  }

  setCounter(value: number): void {
    this.counter.next(value);
  }
}

/**
 * NgRx - Store (Collection of states/actions/reducers/(effects))
 * What is the state - counter
 * What are the actions - increase (+1) /decrease (-1) /reset (0)
 * How to change the state - based on actions (reducers - pure function)
 * function square(x:number){
 *  return x * x;
 * }
 * let a = 10; // a - 10
 * let b = square(a);b - 100, a - 10
 * function getState(state = 0, action){
 *  if(action === 'increase'){
 *    return state + 1
 *  }
 *  if(action === 'decrease'){
 *    return state - 1
 *  }
 *  if(action === 'reset'){
 *    return 0;
 *  }
 * }
 * const state = {counter:10}
 * countSelector(state){return state.counter};
 */
