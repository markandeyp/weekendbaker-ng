import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url === 'https://wbapi.getsandbox.com/products') {
      let updatedHeaders = new HttpHeaders({
        'x-log-interceptor': 'My Log Interceptor',
      });
      let updatedRequest = req.clone({ headers: updatedHeaders });
      return next.handle(updatedRequest);
    } else {
      return next.handle(req);
    }
  }
}
