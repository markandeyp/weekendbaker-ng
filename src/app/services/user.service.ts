import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private _loggedIn: boolean = true;

  isUserLoggedIn(): boolean {
    return this._loggedIn;
  }

  login() {
    this._loggedIn = true;
  }

  logout() {
    this._loggedIn = false;
  }
}
