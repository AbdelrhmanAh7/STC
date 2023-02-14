import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ActivateLoginGuard } from '../../core/guards/activate-login.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [ActivateLoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
