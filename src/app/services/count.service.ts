import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  count: number = 0;
  setCounter(value: number) {
    this.count = value;
  }
  getCounter(): number {
    return this.count;
  }
  getValues(): Observable<number[]> {
    return of([]);
  }
}
