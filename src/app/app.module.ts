import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BrandComponent } from './header/brand/brand.component';
import { MenuItemComponent } from './header/menu/menuitem.component';
import { MenuComponent } from './header/menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/productlist.component';
import { ProductComponent } from './products/product-list/product.component';
import { FilterComponent } from './products/filter/filter.component';
import { SocialComponent } from './footer/social/social.component';
import { CopyrightComponent } from './footer/copyright/copyright.component';
import { LogDirective } from './directives/log.directive';
import { LooperDirective } from './directives/looper.directive';
import { WBRoutingModule } from './routing/routing.module';
import { FourOhFourComponent } from './404/404.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailsComponent } from './products/product-details/product.detail.component';
import { ProductReviewsComponent } from './products/product-details/product.reviews.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { RequiredFieldDirective } from './directives/required.field.directive';
import { SignupComponent } from './signup/signup.component';
import { NamePipe } from './pipes/name.pipe';
import { PriceFilter } from './pipes/pricefilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BrandComponent,
    MenuItemComponent,
    MenuComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    SocialComponent,
    CopyrightComponent,
    LogDirective,
    LooperDirective,
    FourOhFourComponent,
    AboutComponent,
    ProductDetailsComponent,
    ProductReviewsComponent,
    OrderComponent,
    LoginComponent,
    RequiredFieldDirective,
    SignupComponent,
    NamePipe,
    PriceFilter,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    WBRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
