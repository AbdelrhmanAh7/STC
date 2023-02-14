import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product';
import { LanguageService } from '../../../../shared/service/language.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../app.state';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CreateProduct } from '../../store';
import { selectCreatedProductSuccessfully } from '../../store/products.selector';
import { filter, take, tap } from 'rxjs';
import { GetCategories } from '../../../categories/store';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent extends Product implements OnInit {
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
  }

  ngOnInit(): void {
    this._store.dispatch(GetCategories());
  }
  public submit() {
    if (this.productForm.valid) {
      this._store.dispatch(CreateProduct({ payload: this.productForm.value }));
      this._store
        .select(selectCreatedProductSuccessfully)
        .pipe(
          filter((created) => !!created),
          take(1),
          tap(async () => {
            this._toaster.success(this._translate.instant('created'));
            await this._router.navigateByUrl('/products/list');
          })
        )
        .subscribe();
    } else this.productForm.markAllAsTouched();
  }
}
