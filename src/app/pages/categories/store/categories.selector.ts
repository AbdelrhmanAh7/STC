import { createSelector } from '@ngrx/store';
import { IAppState } from '../../../app.state';
import { ICategoryListState } from './categories.state';

export const selectCategoriesList = createSelector(
  (state: IAppState) => state?.category,
  (state: ICategoryListState) => state?.categoryList
);
export const selectCategory = createSelector(
  (state: IAppState) => state?.category,
  (state: ICategoryListState) => state?.category
);
