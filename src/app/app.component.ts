import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { NetworkConnectionService } from './shared/service/network-connection.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LanguageService } from './shared/service/language.service';
import { filter, ReplaySubject, skip, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <ng-progress #progressBar></ng-progress>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
  providers: [NetworkConnectionService, MatSnackBar],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private readonly _title: Title,
    private readonly _translate: TranslateService,
    private readonly _networkConnection: NetworkConnectionService,
    private readonly _snackBar: MatSnackBar,
    private readonly _lang: LanguageService
  ) {
    _title.setTitle(_translate.instant(this.title));
  }
  private readonly _destroyAll: ReplaySubject<unknown> =
    new ReplaySubject<unknown>(1);
  private readonly title = 'STC';
  private messageConnection = {
    offlineNetworkAr: 'فقد الاتصال بالشبكة , اعد المحاوله...',
    onlineNetworkAr: 'تم الاتصال بالشبكة',
    offlineNetworkEn: 'Network is offline, Trying to reconnect ....',
    onlineNetworkEn: 'Network is online',
  };

  ngOnInit(): void {
    this.connectionLost();
    this.connectedNetwork();
  }

  private connectionLost() {
    this._networkConnection.connected$
      .pipe(
        takeUntil(this._destroyAll),
        filter((connected) => !connected),
        tap(() =>
          this.showSnackbarTopPosition(
            this._lang.lang === 'en'
              ? this.messageConnection?.offlineNetworkEn
              : this.messageConnection.offlineNetworkAr,
            'bg-danger',
            undefined
          )
        )
      )
      .subscribe();
  }

  private connectedNetwork() {
    this._networkConnection.connected$
      .pipe(
        takeUntil(this._destroyAll),
        skip(1),
        filter((connected) => !!connected),
        tap(() => {
          debugger;
          this.showSnackbarTopPosition(
            this._lang.lang === 'en'
              ? this.messageConnection?.onlineNetworkEn
              : this.messageConnection.onlineNetworkAr,
            'bg-success',
            5000
          );
        })
      )
      .subscribe();
  }

  private showSnackbarTopPosition(
    content: string,
    classes?: string,
    duration?: number
  ) {
    this._snackBar.open(content, undefined, {
      direction: this._lang.lang === 'en' ? 'ltr' : 'rtl',
      duration: duration,
      verticalPosition: 'bottom', // Allowed values are  'top' | 'bottom'
      horizontalPosition: 'center', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right',
      panelClass: classes,
    });
  }
  ngOnDestroy(): void {
    this._destroyAll.next(undefined);
    this._destroyAll.complete();
  }
}
