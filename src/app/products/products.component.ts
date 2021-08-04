import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from '../types/product';

@Component({
  selector: 'wb-products',
  template: ` <wb-filter (onSort)="sortProducts($event)"> </wb-filter>
    <wb-product-list [products]="products"></wb-product-list>`,
})
export class ProductsComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private service: ProductService) {}
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
    /*this.productSubscription = this.route.data.subscribe((data) => {
      this.products = data['products'];
    });*/

    this.service.getAll().subscribe(
      (data) => {
        this.products = data;
        console.log(this.products);
      },
      (err) => console.log(err)
    );
  }

  ngOnDestroy() {
    this.productSubscription?.unsubscribe();
  }
}
