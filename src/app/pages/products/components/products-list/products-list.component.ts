import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAppState } from '../../../../app.state';
import { Store } from '@ngrx/store';
import { DeleteProduct, GetProducts, ResetToActions } from '../../store';
import { filter, Observable, ReplaySubject, take, takeUntil, tap } from 'rxjs';
import { IGetProductsList } from '../../interface/IGetProductsList';
import {
  selectDeletedProductSuccessfully,
  selectProductsList,
} from '../../store/products.selector';
import { ButtonTypes } from 'src/app/shared/utlis/button-properties';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  constructor(
    private readonly _store: Store<IAppState>,
    private readonly _toaster: ToastrService,
    private readonly _translate: TranslateService,
    private readonly _router: Router
  ) {}

  private readonly _destroyAll: ReplaySubject<unknown> =
    new ReplaySubject<unknown>();
  public readonly ButtonTypes = ButtonTypes;
  public readonly productsList$: Observable<IGetProductsList[] | null> =
    this._store.select(selectProductsList).pipe(
      filter((products) => !!products),
      takeUntil(this._destroyAll)
    );

  ngOnInit(): void {
    this._store.dispatch(GetProducts());
  }

  public deleteProduct(id: number) {
    if (!id) return;
    this._store.dispatch(DeleteProduct({ id: id }));
    this._store
      .select(selectDeletedProductSuccessfully)
      .pipe(
        filter((deleted) => !!deleted),
        take(1),
        tap(() => {
          this._toaster.success(
            this._translate.instant('productDeletedSuccessfully')
          );
          this._store.dispatch(ResetToActions());
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this._destroyAll.next(undefined);
    this._destroyAll.complete();
  }

  public async goToUpdateBrand(id: number) {
    await this._router.navigateByUrl(`/products/update/${id}`);
  }
}
