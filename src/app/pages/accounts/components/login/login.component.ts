import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../../core/service/authentication.service';
import { filter, finalize, take, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ButtonTypes } from 'src/app/shared/utlis/button-properties';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private _fb: FormBuilder,
    private _auth: AuthenticationService,
    private readonly _router: Router
  ) {}
  public loginProcess: boolean = false;
  public readonly ButtonTypes = ButtonTypes;
  public loginForm: FormGroup = this._fb.group({
    userName: [null, [Validators.required]],
    password: [undefined, [Validators.required]],
  });
  public error: string | undefined;
  public onSubmitLogin = (): void => {
    this.loginProcess = true;

    if (this.loginForm.invalid) return this.loginForm.markAllAsTouched();

    this._auth
      .login(this.loginForm.value)
      .pipe(
        filter((response) => response.ok),
        take(1),
        finalize(() => (this.loginProcess = false)),
        tap(async () => {
          await this._router.navigateByUrl(``);
        })
      )
      .subscribe();
  };
}
