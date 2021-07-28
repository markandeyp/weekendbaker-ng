import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MenuItem } from '../types/menuitem';

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

  constructor(private userService: UserService) {}

  doSearch() {
    console.log(`Searching for ${this.search}`);
  }

  ngOnInit() {
    this.userService.isUserLoggedIn().subscribe((value) => {
      console.log('isloggedin:', value);
      this.isLoggedIn = value;
    });
  }
}
