import { createReducer, on, Action } from '@ngrx/store';
import {
  addToCart,
  decrease,
  fetchProductsSuccess,
  increase,
  reset,
} from './actions';
import { Product } from '../types/product';
import { state } from '@angular/animations';

const _counterReducer = createReducer(
  0,
  on(increase, (state) => state + 1),
  on(decrease, (state) => state - 1),
  on(reset, (state) => 0)
);

const initCart: { items: Product[]; count: number } = { items: [], count: 0 };

const _cartReducer = createReducer(
  initCart,
  on(addToCart, (state, item) => {
    let items = [...state.items, item];
    return { ...state, items, count: items.length };
  })
);

const initProducts: { products: Product[] } = { products: [] };
const _productReducer = createReducer(
  initProducts,
  on(fetchProductsSuccess, (state, { products }) => ({ ...state, products }))
);
export const counterReducer = (state: number | undefined, action: Action) => {
  return _counterReducer(state, action);
};

export const cartReducer = (
  state: { items: Product[]; count: number } | undefined,
  action: Action
) => {
  return _cartReducer(state, action);
};

export const productsReducer = (
  state: { products: Product[] } | undefined,
  action: Action
) => {
  return _productReducer(state, action);
};
