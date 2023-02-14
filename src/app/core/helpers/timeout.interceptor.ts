import { Injectable, InjectionToken, Inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { throwError, TimeoutError } from 'rxjs';
import { timeout, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class RequestTimeoutHttpInterceptor implements HttpInterceptor {
  constructor(private readonly _toaster: ToastrService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const defaultTimeout: number = 120000;
    const modified = req.clone({
      setHeaders: { 'X-Request-Timeout': `${defaultTimeout}` },
    });

    return next.handle(modified).pipe(
      timeout(defaultTimeout),
      catchError((err) => {
        if (err instanceof TimeoutError) this._toaster.error('Time Out');
        return throwError(err);
      })
    );
  }
}
