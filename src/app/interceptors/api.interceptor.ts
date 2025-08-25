import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { environment } from 'src/environment/environment';

import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);

    const headers = request.headers.set('Content-Type', 'application/json');

    const url = `${environment.api.baseUrl}/${request.url}`;

    const jsonUrl = `/assets/JSONS/${request.url}`;

    const reqClone = request.clone({
      url: environment.staticJSON ? `${jsonUrl}.json` : url,
      method: environment.staticJSON ? 'GET' : request.method,
      withCredentials: environment.production,
    });


    return next.handle(reqClone);
  }
}
