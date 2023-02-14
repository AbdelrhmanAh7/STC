import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { SharedModule } from '../../shared/shared.module';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [CategoriesListComponent],
    imports: [CommonModule, CategoriesRoutingModule, SharedModule, MatDialogModule],
})
export class CategoriesModule {}
