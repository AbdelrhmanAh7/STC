import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  GetCategories,
  GetCategoriesFail,
  GetCategoriesSuccess,
  GetCategory,
  GetCategoryFail,
  GetCategorySuccess,
} from './categories.actions';
import { CategoriesService } from '../service/categories.service';

@Injectable()
export class CategoryEffects {
  constructor(private actions: Actions, private _category: CategoriesService) {}

  getCategoriesList$ = createEffect(() =>
    this.actions.pipe(
      ofType(GetCategories),
      switchMap(() => {
        return this._category.GetCategories().pipe(
          switchMap((categoryList) =>
            of(GetCategoriesSuccess({ categoryList: categoryList }))
          ),
          catchError(() => of(GetCategoriesFail()))
        );
      })
    )
  );
  getProduct$ = createEffect(() =>
    this.actions.pipe(
      ofType(GetCategory),
      switchMap((action) => {
        return this._category.GetCategory(action?.searchKeyword).pipe(
          switchMap((category) =>
            of(GetCategorySuccess({ category: category }))
          ),
          catchError(() => of(GetCategoryFail()))
        );
      })
    )
  );
}
