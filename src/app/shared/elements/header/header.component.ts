import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../service/language.service';
import { PermissionsManagerService } from '../../../core/helpers/permissions-manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public _language: LanguageService,
    private permissionsManager: PermissionsManagerService
  ) {}
  public changeLang($event: Event) {
    this._language.setLanguage(($event.target as HTMLInputElement)?.value);
  }

  logOut() {
    localStorage.clear();
    this.permissionsManager.clearPermissions();
  }
}
