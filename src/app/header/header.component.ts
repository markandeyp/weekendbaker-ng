import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../types/menuitem';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from '../types/product';

@Component({
  selector: 'wb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menu: MenuItem[] = [
    {
      text: 'About',
      link: '/about',
      active: true,
    },
    {
      text: 'Products',
      link: '/products',
    },
    {
      text: 'Order',
      link: '/order',
    },
    {
      text: 'NgRx',
      link: '/ngrx',
    },
  ];

  isLoggedIn: boolean = false;

  search: string = '';

  displayName: string | null = '';

  cartItems: Product[] = [];

  cartItemCount: number = 0;

  constructor(
    private auth: AngularFireAuth,
    private store: Store<{ cart: { items: Product[]; count: number } }>
  ) {
    store.select('cart').subscribe((value) => {
      this.cartItemCount = value.count;
      this.cartItems = [...value.items];
    });
  }

  doSearch() {
    console.log(`Searching for ${this.search}`);
  }

  ngOnInit() {
    /*this.userService.isUserLoggedIn().subscribe((value) => {
      console.log('isloggedin:', value);
      this.isLoggedIn = value;
    });*/
  }

  login() {
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((authResponse) => {
        if (authResponse && authResponse.user) {
          this.isLoggedIn = true;
          this.displayName = authResponse.user.displayName;
        }
      })
      .catch((err) => console.log('Erorr during login', err));
  }

  logout() {
    this.auth.signOut();
    this.isLoggedIn = false;
  }
}
