import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { LoginResponse } from '../types/loginresponse';
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

  login(user: {
    username: string;
    password: string;
  }): Observable<LoginResponse> {
    let url = 'https://fakestoreapi.com/auth/login';
    return this.http.post<LoginResponse>(url, user);
  }

  signup(user: User): Observable<User> {
    let url = 'https://wbapi.getsandbox.com/users/';
    return this.http.post<User>(url, user);
  }

  logout() {
    this._loggedIn.next(false);
  }

  getUsers(): Observable<User[]> {
    let url = 'https://fakestoreapi.com/users';
    return this.http.get<User[]>(url);
  }

  getUser(): Observable<User> {
    let url = 'https://fakestoreapi.com/users/1';
    return this.http.get<User>(url);
  }
}
