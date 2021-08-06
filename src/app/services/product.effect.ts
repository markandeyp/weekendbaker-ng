import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  fetchProducts,
  fetchProductsError,
  fetchProductsSuccess,
} from '../store/actions';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductEffect {
  products$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchProducts),
      switchMap(() =>
        this.service.getAll().pipe(
          map((products) => fetchProductsSuccess({ products })),
          catchError(() => of(fetchProductsError()))
        )
      )
    )
  );

  constructor(private service: ProductService, private actions$: Actions) {}
}
