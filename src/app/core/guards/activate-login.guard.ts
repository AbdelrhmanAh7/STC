import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class ActivateLoginGuard implements CanActivate {
  public constructor(
    private readonly _router: Router,
    private readonly _authenticationService: AuthenticationService
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isAuthenticated: boolean =
      !!this._authenticationService.currentUserValue;

    if (!isAuthenticated) return true;
    else {
      this._router.navigateByUrl(`/login`);
      return false;
    }
  }
}
