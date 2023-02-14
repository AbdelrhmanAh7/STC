import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGetCategories } from '../interface/IGetCategories';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private readonly _http: HttpClient) {}
  private readonly serverUrl: string = 'https://fakestoreapi.com/';
  public GetCategories(): Observable<string[]> {
    const url = new URL(`${this.serverUrl}products/categories`);
    return this._http.get<string[]>(url.toString());
  }

  public GetCategory(searchKeyword: string): Observable<IGetCategories> {
    const url = new URL(`${this.serverUrl}products/category/${searchKeyword}`);
    return this._http.get<IGetCategories>(url.toString());
  }
}
