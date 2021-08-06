import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrease, increase, reset } from '../store/actions';
import { Product } from '../types/product';

@Component({
  selector: 'wb-counter',
  template: `<div class="container m-5">
    <h1 class="text-center">{{ count$ | async }}</h1>
    <div
      style="width: 500px;margin:0 auto;"
      class="d-flex justify-content-between"
    >
      <button class="btn btn-primary" (click)="increase()">Increase</button>
      <button class="btn btn-secondary" (click)="reset()">Reset</button>
      <button class="btn btn-primary" (click)="decrease()">Decrease</button>
    </div>
    <div>
      <h2 *ngFor="let item of cartItems">
        {{ item.name }}
      </h2>
    </div>
  </div>`,
})
export class CounterComponent {
  count$?: Observable<number>;
  cartItems: Product[] = [];

  constructor(
    private store: Store<{
      count: number;
      cart: { items: Product[]; count: number };
    }>
  ) {
    this.count$ = store.select('count');
    store.select('cart').subscribe((value) => (this.cartItems = value.items));
  }

  increase() {
    this.store.dispatch(increase());
  }

  decrease() {
    this.store.dispatch(decrease());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
