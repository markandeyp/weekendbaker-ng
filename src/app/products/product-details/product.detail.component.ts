import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'wb-product-detail',
  template: ` <div
    class="card h-100"
    style="width: 80%;margin:0 auto;"
    *ngIf="product"
  >
    <a [routerLink]="reviewsLink">Reviews</a>
    <img [src]="product?.imageUrl" class="card-img-top" [alt]="product?.name" />
    <div class="card-body">
      <h5 class="card-title">{{ product?.name | uppercase }}</h5>
      <p class="card-text">{{ product?.price | currency }}</p>
    </div>
    <router-outlet> </router-outlet>
  </div>`,
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product?: Product;
  subscription?: Subscription;
  reviewsLink?: string;
  constructor(private route: ActivatedRoute, private service: ProductService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const { id } = params;
      this.service.get(id).subscribe(
        (product) => {
          this.product = product;
          console.log(product);
        },
        (err) => console.log('Error fetching product', err)
      );
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
