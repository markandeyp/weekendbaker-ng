import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CacheInterceptor implements HttpInterceptor {
  cache: Map<string, any> = new Map();

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.cache.has(req.url)) {
      console.log('Data from cache');
      return of(this.cache.get(req.url));
    } else {
      console.log('Fetching data from API');
      return next
        .handle(req)
        .pipe(tap((data) => this.cache.set(req.url, data)));
    }
  }
}
