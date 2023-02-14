import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private readonly _authentication: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = JSON.parse(JSON.stringify(localStorage.getItem('currentUser')));
    if (currentUser && currentUser.token) {
      request = request.clone({
        headers: request.headers.set(
          'Authorization',
          'Bearer ' + currentUser?.token
        ),
      });
    }

    return next.handle(request);
  }
}
