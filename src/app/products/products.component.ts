import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { merge, Subscription } from 'rxjs';
import { PriceFilter } from '../pipes/pricefilter.pipe';
import { ProductService } from '../services/product.service';
import { Product } from '../types/product';

@Component({
  selector: 'wb-products',
  template: ` <wb-filter
      (onFilter)="filterProducts($event)"
      (onSort)="sortProducts($event)"
    >
    </wb-filter>
    <wb-product-list
      [products]="products | pricefilter: min:max"
    ></wb-product-list>`,
})
export class ProductsComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
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

  filterProducts(event: { min: number; max: number }) {
    console.log('Filter called', event.min, event.max);
    this.min = event.min;
    this.max = event.max;
  }

  ngOnInit() {
    this.productSubscription = this.route.data.subscribe((data) => {
      this.products = data['products'];
    });

    this.productService.getAllWbProducts().subscribe((products) => {
      console.log('Products:', products);
    });
  }

  ngOnDestroy() {
    //Cleanup
    this.productSubscription?.unsubscribe();
  }
}
