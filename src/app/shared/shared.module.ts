import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from './elements/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { ShimmerLoadingComponent } from './elements/shimmer-loading/shimmer-loading.component';
import { AppTableComponent } from './elements/app-table/app-table.component';
import { ExtendableAreaComponent } from './elements/app-table/extendable-area.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonComponent,
    ShimmerLoadingComponent,
    AppTableComponent,
    ExtendableAreaComponent,
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
  ],
})
export class SharedModule {}
