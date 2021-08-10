import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CountService } from '../services/count.service';

@Component({
  selector: 'wb-count',
  template: `<button class="btn btn-primary" (click)="increase()">
      Increase
    </button>
    <h1>{{ count }}</h1>
    <button class="btn btn-secondary" (click)="decrease()">Decrease</button>`,
})
export class CountComponent {
  count: number = 0;
  values: number[] = [];

  values$?: Observable<number[]>;

  constructor(private service: CountService) {
    this.values$ = this.service.getValues();
  }

  increase() {
    this.count++;
  }

  decrease() {
    this.count--;
  }
}
