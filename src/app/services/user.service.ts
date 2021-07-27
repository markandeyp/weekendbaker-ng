import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { User } from '../types/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  private _loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  ); //can have init value

  constructor(private http: HttpClient) {}

  isUserLoggedIn(): Observable<boolean> {
    return this._loggedIn;
  }

  login() {
    this._loggedIn.next(true);
  }

  logout() {
    this._loggedIn.next(false);
  }

  getUsers(): Observable<User[]> {
    let url = 'https://fakestoreapi.com/users';
    return this.http.get<User[]>(url);
  }
}
