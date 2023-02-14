import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../app.state';
import { filter, Observable, ReplaySubject, takeUntil } from 'rxjs';
import {
  selectCategoriesList,
  selectCategoryProductsList,
} from '../../store/categories.selector';
import { ButtonTypes } from 'src/app/shared/utlis/button-properties';
import { GetCategories, GetCategoryProducts } from '../../store';
import { IGetProductsList } from '../../../products/interface/IGetProductsList';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit, OnDestroy {
  constructor(
    private readonly _store: Store<IAppState>,
    public dialog: MatDialog
  ) {}
  private readonly _destroyAll: ReplaySubject<unknown> =
    new ReplaySubject<unknown>();
  public readonly ButtonTypes = ButtonTypes;
  public readonly categoriesList$: Observable<string[] | null> = this._store
    .select(selectCategoriesList)
    .pipe(
      filter((categories) => !!categories),
      takeUntil(this._destroyAll)
    );
  public readonly categoryProductsList$: Observable<IGetProductsList[] | null> =
    this._store.select(selectCategoryProductsList).pipe(
      filter((products) => !!products),
      takeUntil(this._destroyAll)
    );

  ngOnInit(): void {
    this._store.dispatch(GetCategories());
  }

  ngOnDestroy(): void {
    this._destroyAll.next(undefined);
    this._destroyAll.complete();
  }

  public categoryProducts(
    categoryName: string,
    content: TemplateRef<ElementRef>
  ) {
    this._store.dispatch(GetCategoryProducts({ categoryName: categoryName }));
    this.dialog.open(content, {
      height: '700px',
      width: '100%',
      enterAnimationDuration: 300,
    });
  }
}
