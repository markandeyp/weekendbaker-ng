import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { FourOhFourComponent } from '../404/404.component';
import { AboutComponent } from '../about/about.component';
import { CounterComponent } from '../counter/counter.component';
import { OrderGuard } from '../guards/order.guard';
import { LoginComponent } from '../login/login.component';
import { OrderComponent } from '../order/order.component';
import { ProductDetailsComponent } from '../products/product-details/product.detail.component';
import { ProductReviewsComponent } from '../products/product-details/product.reviews.component';
import { ProductsComponent } from '../products/products.component';
import { SignupComponent } from '../signup/signup.component';

//define your routes - /products, /product/1, /cart
//path matching is first-match strategy
const routes: Route[] = [
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'product/:id',
    children: [
      {
        path: 'details',
        component: ProductDetailsComponent,
      },
      {
        path: 'reviews',
        component: ProductReviewsComponent,
      },
    ],
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '404',
    component: FourOhFourComponent,
  },
  {
    path: 'home',
    redirectTo: 'products',
  },
  {
    path: 'order',
    component: OrderComponent,
    canActivate: [OrderGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'ngrx',
    component: CounterComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: AboutComponent,
  },
  {
    path: '**',
    component: FourOhFourComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class WBRoutingModule {}
