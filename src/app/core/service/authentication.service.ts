import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ILogin } from '../models/ILogin';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn : 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<ILogin>;
  private currentUser: Observable<any>;
  constructor(private readonly _http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<ILogin>(
      JSON.parse(JSON.stringify(localStorage.getItem('currentUser'))) as ILogin
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  public login(user: ILogin): Observable<HttpResponse<ILogin>> {
    const usersAccess: ILogin[] = [
      { userName: 'user', password: 'user', permissions: 'USER' },
      { userName: 'admin', password: 'admin', permissions: 'ADMIN' },
    ];
    const response: HttpResponse<ILogin> = new HttpResponse({
      body: usersAccess.find(
        (userAccess) =>
          userAccess.userName === user?.userName &&
          userAccess?.password === user?.password
      ),
      status: 200,
      statusText: 'OK',
    });
    return of(response);
    // const url = new URL(`https://fakestoreapi.com/auth/login`);
    // return this._http.post<{ token: string }>(
    //   url.toString(),
    //   JSON.stringify(user),
    //   {
    //     observe: 'response',
    //   }
    // );
  }

  logout() {

    localStorage.clear();
  }
}
