import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../types/product';

@Component({
  selector: 'wb-products',
  template: ` <wb-filter (onSort)="sortProducts($event)"> </wb-filter>
    <wb-product-list [products]="products"></wb-product-list>`,
})
export class ProductsComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute) {}
  products: Product[] = [];
  productSubscription?: Subscription;

  sortProducts(isAsc: boolean) {
    if (isAsc) {
      this.products = this.products.sort((a, b) => a.price - b.price);
    } else {
      this.products = this.products.sort((a, b) => b.price - a.price);
    }
  }

  ngOnInit() {
    this.productSubscription = this.route.data.subscribe((data) => {
      this.products = data['products'];
    });
  }

  ngOnDestroy() {
    //Cleanup
    this.productSubscription?.unsubscribe();
  }
}
