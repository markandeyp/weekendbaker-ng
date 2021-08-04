import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private store: AngularFirestore) {}

  getAll(): Observable<Product[]> {
    return this.store
      .collection<Product>('Products')
      .valueChanges({ idField: 'id' });
  }

  get(id: string): Observable<Product | undefined> {
    return this.store
      .collection<Product>('Products')
      .doc(id)
      .valueChanges({ idField: 'id' });
  }
}
