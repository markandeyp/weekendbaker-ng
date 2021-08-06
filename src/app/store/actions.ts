import { createAction, props } from '@ngrx/store';
import { Product } from '../types/product';
export const increase = createAction('[Counter] increase');
export const decrease = createAction('[Counter] decrease');
export const reset = createAction('[Counter] reset');

export const addToCart = createAction('[Cart] add', props<Product>());
export const fetchProducts = createAction('[Products] fetch');
export const fetchProductsError = createAction('[Products] fetch error');
export const fetchProductsSuccess = createAction(
  '[Products] fetch success',
  props<{ products: Product[] }>()
);
