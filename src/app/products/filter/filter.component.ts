import { Component, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'wb-filter',
  template: `<button class="btn btn-link" (click)="sortAsc()">Sort Asc</button>
    <button class="btn btn-link" (click)="sortDesc()">Sort Desc</button>
    <input class="form-control" type="text" placeholder="Min price" #min />
    <input class="form-control" type="text" placeholder="Max price" #max />
    <button class="btn btn-primary" (click)="filter(min.value, max.value)">
      Filter
    </button> `,
})
export class FilterComponent {
  categories: string[] = ['Cake', 'Other'];
  constructor(private service: ProductService) {}
  //Event emitter to emit the onSort event
  //onSort emits true for ascending
  //and false for descending
  @Output()
  onSort: EventEmitter<boolean> = new EventEmitter();

  @Output()
  onFilter: EventEmitter<{ min: number; max: number }> = new EventEmitter();

  sortAsc() {
    this.onSort.emit(true);
  }

  sortDesc() {
    this.onSort.emit(false);
  }

  filter(min: number, max: number) {
    this.onFilter.emit({ min, max });
  }
}
