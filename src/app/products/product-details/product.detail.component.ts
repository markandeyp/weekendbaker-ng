import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'wb-product-detail',
  template: ` <div
    class="card h-100"
    style="width: 80%;margin:0 auto;"
    *ngIf="product"
  >
    <a [routerLink]="reviewsLink">Reviews</a>
    <img [src]="product?.image" class="card-img-top" [alt]="product?.title" />
    <div class="card-body">
      <h5 class="card-title">{{ product?.title }}</h5>
      <p class="card-text">£{{ product?.price }}</p>
    </div>
    <router-outlet> </router-outlet>
  </div>`,
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product?: Product;
  subscription?: Subscription;
  reviewsLink?: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('Init details component');

    this.subscription = this.route.data.subscribe((data) => {
      this.product = data['product'];
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
