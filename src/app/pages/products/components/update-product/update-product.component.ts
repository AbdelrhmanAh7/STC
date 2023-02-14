import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../common/product';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../app.state';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetProduct, ResetToDefault, UpdateProduct } from '../../store';
import { filter, Observable, take, tap } from 'rxjs';
import { IGetProductsList } from '../../interface/IGetProductsList';
import {
  selectProduct,
  selectUpdatedProductSuccessfully,
} from '../../store/products.selector';
import { LanguageService } from '../../../../shared/service/language.service';
import { Title } from '@angular/platform-browser';
import { GetCategories } from '../../../categories/store';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent
  extends Product
  implements OnInit, OnDestroy
{
  constructor(
    language: LanguageService,
    _store: Store<IAppState>,
    _toaster: ToastrService,
    _translate: TranslateService,
    _router: Router,
    _activeRoute: ActivatedRoute,
    _title: Title
  ) {
    super(
      language,
      _store,
      _toaster,
      _translate,
      _router,
      _activeRoute,
      _title
    );
    _title.setTitle(_translate.instant('Update Product'));
  }
  private readonly product$: Observable<IGetProductsList | null> = this._store
    .select(selectProduct)
    .pipe(
      filter((product) => !!product),
      take(1),
      tap((response) => {
        console.log(response);
        if (response) this.productForm.patchValue(response);
      })
    );
  ngOnInit(): void {
    const productId: number = +this._activeRoute.snapshot.params['id'];
    this._store.dispatch(GetCategories());
    this._store.dispatch(GetProduct({ id: productId }));
    this.product$.subscribe();
    this.categoriesList$.subscribe();
  }

  public submit() {
    if (this.productForm.valid) {
      const productId: number = +this._activeRoute.snapshot.params['id'];
      this._store.dispatch(
        UpdateProduct({ id: productId, payload: this.productForm.value })
      );
      this._store
        .select(selectUpdatedProductSuccessfully)
        .pipe(
          filter((updated) => !!updated),
          take(1),
          tap(async () => {
            this._toaster.success(this._translate.instant('updated'));
            await this._router.navigateByUrl('/products/list');
          })
        )
        .subscribe();
    } else this.productForm.markAllAsTouched();
  }

  ngOnDestroy(): void {
    this._store.dispatch(ResetToDefault());
  }
}
