import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly baseUrl = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    let url = `${this.baseUrl}/products`;
    return this.http.get<Product[]>(url);
  }

  getProduct(id: string): Observable<Product> {
    let url = `${this.baseUrl}/products/${id}`;
    return this.http.get<Product>(url);
  }
}
