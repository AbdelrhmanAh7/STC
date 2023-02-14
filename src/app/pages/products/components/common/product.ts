import { Store } from '@ngrx/store';
import { IAppState } from '../../../../app.state';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IGetProductsList } from '../../interface/IGetProductsList';
import { LanguageService } from '../../../../shared/service/language.service';
import { Title } from '@angular/platform-browser';
import { selectCategoriesList } from '../../../categories/store/categories.selector';
import { filter, Observable, take } from 'rxjs';
import { map } from 'rxjs/operators';

export class Product {
  constructor(
    public readonly language: LanguageService,
    protected readonly _store: Store<IAppState>,
    protected readonly _toaster: ToastrService,
    protected readonly _translate: TranslateService,
    protected readonly _router: Router,
    protected readonly _activeRoute: ActivatedRoute,
    protected readonly _title: Title
  ) {}

  public readonly categoriesList$: Observable<{ name: string }[] | null> =
    this._store.select(selectCategoriesList).pipe(
      filter((categories) => !!categories),
      take(1),
      map((response) => {
        return (
          response?.map((category) => {
            return { name: category };
          }) || []
        );
      })
    );
  public productForm: FormGroup = new FormGroup<any>({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    category: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),
  });
}
