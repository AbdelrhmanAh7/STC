import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [Page404Component],
  imports: [CommonModule, PagesRoutingModule, SharedModule],
})
export class PagesModule {}
