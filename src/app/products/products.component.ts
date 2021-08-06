import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { fetchProducts } from '../store/actions';
import { Product } from '../types/product';

@Component({
  selector: 'wb-products',
  template: ` <wb-filter (onSort)="sortProducts($event)"> </wb-filter>
    <wb-product-list [products]="products"></wb-product-list>`,
})
export class ProductsComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private store: Store<{ products: { products: Product[] } }>
  ) {
    store
      .select('products')
      .subscribe((data) => (this.products = data.products));
  }
  products: Product[] = [];

  productSubscription?: Subscription;

  min: number = 500;
  max: number = 800;

  sortProducts(isAsc: boolean) {
    if (isAsc) {
      this.products = [...this.products.sort((a, b) => a.price - b.price)];
    } else {
      this.products = [...this.products.sort((a, b) => b.price - a.price)];
    }
  }

  ngOnInit() {
    this.store.dispatch(fetchProducts());
  }

  ngOnDestroy() {
    this.productSubscription?.unsubscribe();
  }
}
