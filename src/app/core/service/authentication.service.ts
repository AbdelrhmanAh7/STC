import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILogin } from '../models/ILogin';
import { HttpClient, HttpResponse } from '@angular/common/http';

interface IUser {}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<IUser>;
  private currentUser: Observable<any>;
  constructor(private readonly _http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<IUser>(
      JSON.parse(JSON.stringify(localStorage.getItem('currentUser'))) as IUser
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  public login(user: ILogin): Observable<HttpResponse<{ token: string }>> {
    const url = new URL(`https://fakestoreapi.com/auth/login`);
    return this._http.post<{ token: string }>(url.toString(), user, {
      observe: 'response',
    });
  }
}
