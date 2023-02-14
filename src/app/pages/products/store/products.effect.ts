import { Injectable } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap } from 'rxjs';
import {
  CreateProduct,
  CreateProductFail,
  CreateProductSuccess,
  DeleteProduct,
  DeleteProductFail,
  DeleteProductSuccess,
  GetProduct,
  GetProductFail,
  GetProducts,
  GetProductsFail,
  GetProductsSuccess,
  GetProductSuccess,
  UpdateProduct,
  UpdateProductFail,
  UpdateProductSuccess,
} from './products.actions';
import { catchError } from 'rxjs/operators';
@Injectable()
export class ProductEffects {
  constructor(private actions: Actions, private _products: ProductsService) {}

  getProductsList$ = createEffect(() =>
    this.actions.pipe(
      ofType(GetProducts),
      switchMap(() => {
        return this._products.GetProducts().pipe(
          switchMap((products) =>
            of(GetProductsSuccess({ products: products }))
          ),
          catchError(() => of(GetProductsFail()))
        );
      })
    )
  );
  getProduct$ = createEffect(() =>
    this.actions.pipe(
      ofType(GetProduct),
      switchMap((action) => {
        return this._products.GetProduct(action?.id).pipe(
          switchMap((products) =>
            of(GetProductSuccess({ products: products }))
          ),
          catchError(() => of(GetProductFail()))
        );
      })
    )
  );
  createProduct$ = createEffect(() =>
    this.actions.pipe(
      ofType(CreateProduct),
      switchMap((action) => {
        return this._products.CreateProduct(action?.payload).pipe(
          switchMap((data) => of(CreateProductSuccess())),
          catchError(() => of(CreateProductFail()))
        );
      })
    )
  );
  updateProduct$ = createEffect(() =>
    this.actions.pipe(
      ofType(UpdateProduct),
      switchMap((action) => {
        return this._products.UpdateProduct(action?.id, action?.payload).pipe(
          switchMap((data) =>
            of(UpdateProductSuccess({ productUpdated: data }))
          ),
          catchError(() => of(UpdateProductFail()))
        );
      })
    )
  );
  deleteProduct$ = createEffect(() =>
    this.actions.pipe(
      ofType(DeleteProduct),
      switchMap((action) => {
        return this._products.DeleteProduct(action?.id).pipe(
          switchMap((data) => of(DeleteProductSuccess({ id: data?.id }))),
          catchError(() => of(DeleteProductFail()))
        );
      })
    )
  );
}
