import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from './elements/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { ShimmerLoadingComponent } from './elements/shimmer-loading/shimmer-loading.component';
import { AppTableComponent } from './elements/app-table/app-table.component';
import { ExtendableAreaComponent } from './elements/app-table/extendable-area.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppImageComponent } from './elements/app-img/app-img.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './elements/header/header.component';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [
    ButtonComponent,
    ShimmerLoadingComponent,
    AppTableComponent,
    ExtendableAreaComponent,
    AppImageComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    LazyLoadImageModule,
    NgSelectModule,
    NgxPaginationModule,
    MatIconModule,
    RouterLinkActive,
    NgxPermissionsModule,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ShimmerLoadingComponent,
    ButtonComponent,
    AppTableComponent,
    ExtendableAreaComponent,
    AppImageComponent,
    NgSelectModule,
    MatIconModule,
    HeaderComponent,
    NgxPermissionsModule,
  ],
})
export class SharedModule {}
