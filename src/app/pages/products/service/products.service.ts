import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGetProductsList } from '../interface/IGetProductsList';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private readonly _http: HttpClient) {}
  private readonly serverUrl: string = 'https://fakestoreapi.com/';
  public GetProducts(): Observable<IGetProductsList[]> {
    const url = new URL(`${this.serverUrl}products`);
    return this._http.get<IGetProductsList[]>(url.toString());
  }

  public GetProduct(productId: number): Observable<IGetProductsList> {
    const url = new URL(`${this.serverUrl}products/${productId}`);
    return this._http.get<IGetProductsList>(url.toString());
  }

  public CreateProduct(
    payload: IGetProductsList
  ): Observable<IGetProductsList> {
    const url = new URL(`${this.serverUrl}products`);
    return this._http.post<IGetProductsList>(url.toString(), payload);
  }

  public UpdateProduct(
    productId: number,
    payload: IGetProductsList
  ): Observable<IGetProductsList> {
    const url = new URL(`${this.serverUrl}products/${productId}`);
    return this._http.put<IGetProductsList>(url.toString(), payload);
  }

  public DeleteProduct(productId: number): Observable<IGetProductsList> {
    const url = new URL(`${this.serverUrl}products/${productId}`);
    return this._http.delete<IGetProductsList>(url.toString());
  }
}
