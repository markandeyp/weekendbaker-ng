import { Component, OnInit } from '@angular/core';
import { map, mergeAll, tap } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import { StatesService } from '../services/states.service';
import { UserService } from '../services/user.service';
import { MenuItem } from '../types/menuitem';
import { State } from '../types/states';

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

  constructor(
    private userService: UserService,
    private stateService: StatesService
  ) {}

  doSearch() {
    console.log(`Searching for ${this.search}`);
  }

  ngOnInit() {
    this.userService.isUserLoggedIn().subscribe((value) => {
      console.log('isloggedin:', value);
      this.isLoggedIn = value;
    });

    //this.rxjsTest();

    this.stateService.getStates().subscribe((data) => {
      console.log(this.getDistrictsByState(data, 'Andhra Pradesh'));
    });
  }

  getDistrictsByState(states: State[], stateName: string) {
    let matchedState = states.find((state) => state.state === stateName);
    if (matchedState) {
      return matchedState.districts;
    } else {
      throw Error('No such state found:' + stateName);
    }
  }

  login() {
    this.userService.login();
  }

  logout() {
    this.userService.logout();
  }

  rxjsTest() {
    //you get some data from API

    this.userService
      .getUsers()
      .pipe(
        tap((users) => console.log('Original users: ', users)),
        map((users) =>
          users.map((user) => {
            return {
              username: user.username,
              email: user.email,
            };
          })
        )
      )
      .subscribe((user) => console.log('Modified users: ', user));
  }

  //create a form here
}
