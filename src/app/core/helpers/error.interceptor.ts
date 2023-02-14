import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { globalErrorHandler } from './globalErrorHandler';
import { Router } from '@angular/router';
import { ErrorDescriptor } from '../models/conflict-problem-details';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../service/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private _router: Router,
    private readonly _auth: AuthenticationService,
    private readonly _toaster: ToastrService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          // auto logout if 401 response returned from api
          this._auth.logout();
        } else if (err.status === 403) {
          this._router.navigateByUrl('static-pages/403');
        }

        const errors = globalErrorHandler(err);
        errors?.error?.forEach((element: ErrorDescriptor) => {
          this._toaster.error(element.description, 'Error', {
            closeButton: true,
            disableTimeOut: true,
            tapToDismiss: false,
          });
        });
        return throwError(err);
      })
    );
  }
}
