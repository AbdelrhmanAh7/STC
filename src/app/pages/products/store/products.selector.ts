import { createSelector } from '@ngrx/store';
import { IProductListState } from './products.state';
import { IAppState } from '../../../app.state';
export const selectProductsList = createSelector(
  (state: IAppState) => state?.products,
  (state: IProductListState) => state?.productsList
);
export const selectProduct = createSelector(
  (state: IAppState) => state?.products,
  (state: IProductListState) => state?.product
);
export const selectCreatedProductSuccessfully = createSelector(
  (state: IAppState) => state?.products,
  (state: IProductListState) => state?.createProductSuccessfully
);

export const selectUpdatedProductSuccessfully = createSelector(
  (state: IAppState) => state?.products,
  (state: IProductListState) => state?.updateProductSuccessfully
);

export const selectDeletedProductSuccessfully = createSelector(
  (state: IAppState) => state?.products,
  (state: IProductListState) => state?.deleteProductSuccessfully
);
