import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./accounts/accounts.module').then((m) => m.AccountsModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./accounts/accounts.module').then((m) => m.AccountsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
