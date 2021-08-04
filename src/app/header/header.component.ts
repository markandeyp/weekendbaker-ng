import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../types/menuitem';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

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
  ];

  isLoggedIn: boolean = false;

  search: string = '';

  displayName: string | null = '';
  constructor(private auth: AngularFireAuth) {}

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
