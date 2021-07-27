import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly baseUrl = 'http://localhost:4200/assets/data/products.json';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    let url = `${this.baseUrl}`;
    return this.http.get<Product[]>(url);
  }

  getAllWbProducts(): Observable<Product[]> {
    let url = `https://wbapi.getsandbox.com/products`;
    return this.http.get<Product[]>(url);
  }

  getProduct(id: string): Observable<Product> {
    let url = `${this.baseUrl}/products/${id}`;
    return this.http.get<Product>(url);
  }
}
