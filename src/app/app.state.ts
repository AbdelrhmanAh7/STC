import * as productStore from './pages/products/store/index';
import * as categoryStore from './pages/categories/store/index';
import { ActionReducerMap } from '@ngrx/store';

export interface IAppState {
  [x: string]: any;
  products: productStore.IProductListState;
  category: categoryStore.ICategoryListState;
}

export const reducers: ActionReducerMap<IAppState> = {
  products: productStore.ProductReducer,
  category: categoryStore.CategoryReducer,
};

export const effects: any[] = [
  productStore.ProductEffects,
  categoryStore.CategoryEffects,
];
