import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../types/product';

@Pipe({
  name: 'pricefilter',
})
export class PriceFilter implements PipeTransform {
  transform(value: Product[], ...args: number[]): Product[] {
    const min = args[0] || Number.MIN_VALUE;
    const max = args[1] || Number.MAX_VALUE;
    return value.filter((p) => p.price >= min && p.price <= max);
  }
}
