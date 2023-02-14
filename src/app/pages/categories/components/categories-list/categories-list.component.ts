import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../app.state';
import { filter, Observable, ReplaySubject, take, takeUntil } from 'rxjs';
import { selectCategoriesList } from '../../store/categories.selector';
import { map } from 'rxjs/operators';
import { ButtonTypes } from 'src/app/shared/utlis/button-properties';
import { GetCategories } from '../../store';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit, OnDestroy {
  constructor(private readonly _store: Store<IAppState>) {}
  private readonly _destroyAll: ReplaySubject<unknown> =
    new ReplaySubject<unknown>();
  public readonly ButtonTypes = ButtonTypes;
  public readonly categoriesList$: Observable<string[] | null> = this._store
    .select(selectCategoriesList)
    .pipe(
      filter((categories) => !!categories),
      takeUntil(this._destroyAll)
    );

  ngOnInit(): void {
    this._store.dispatch(GetCategories());
  }

  ngOnDestroy(): void {
    this._destroyAll.next(undefined);
    this._destroyAll.complete();
  }

  public categoryProducts() {

  }
}
