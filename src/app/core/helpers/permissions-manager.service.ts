import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable({
  providedIn: 'root',
})
export class PermissionsManagerService {
  constructor(private readonly permissionsService: NgxPermissionsService) {}

  loadStoredPermissions(): Observable<unknown> | Promise<unknown> | void {
    const json = localStorage.getItem('currentUser');
    const user = JSON.parse(json || '{}');
    const permissions = ([user?.permissions] || []) as string[];
    this.permissionsService.flushPermissions();
    this.permissionsService.loadPermissions(permissions);
  }

  setPermissions(permissions: string[]): void {
    this.permissionsService.flushPermissions();
    this.permissionsService.loadPermissions(permissions);
  }

  clearPermissions(): void {
    this.permissionsService.flushPermissions();
  }
}
