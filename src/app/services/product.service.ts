import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../types/product';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly baseUrl = 'https://fakestoreapi.com';
  //HTTP Verbs - GET/POST/PUT/DELETE
  //CRUD - Create - POST/Read - GET/Update - PUT/Delete - DELETE

  constructor(
    private http: HttpClient,
    private notification: NotificationService
  ) {}

  getAllProducts(): Observable<Product[]> {
    let url = `${this.baseUrl}/products`;
    this.http.get(url);
    return this.http.get<Product[]>(url);
  }

  getAllWbProducts(): Observable<Product[]> {
    let url = `https://wbapi.getsandbox.com/products`;
    return this.http.get<Product[]>(url).pipe(catchError(this.handleError));
  }

  handleError = (
    err: HttpErrorResponse,
    caught: Observable<Product[]>
  ): ObservableInput<any> => {
    if (err.status === 500) {
      this.notification.notify('Something went wrong with server');
    } else if (err.status === 400) {
      this.notification.notify('OOPS! Bad request');
    } else {
      this.notification.notify(err.message);
    }
    return of([]);
  };

  getProduct(id: string): Observable<Product> {
    let url = `${this.baseUrl}/products/${id}`;
    return this.http.get<Product>(url);
  }
}
