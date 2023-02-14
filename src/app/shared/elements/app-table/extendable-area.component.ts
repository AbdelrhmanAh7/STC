import { Component, Input } from '@angular/core';

@Component({
  selector: 'extendable-area',
  template: `
    <div
      style="min-width:100em; border-bottom: 4px solid #fff"
      class="extendable-area-header w-100 h-100 p-0 m-0"
      [style]="containerStyle"
      (click)="expandableByDefault = !expandableByDefault"
    >
      <ng-content select="[table-header]"></ng-content>
    </div>

    <div
      *ngIf="expandableByDefault"
      class="extendable-area-body w-100 h-auto p-0"
      style="min-width:100em;"
      [style]="bodyStyle"
    >
      <ng-content select="[extendable-area-body]"></ng-content>
    </div>
  `,
})
export class ExtendableAreaComponent {
  @Input() public expandableByDefault = false;

  @Input() public containerStyle: string | undefined;

  @Input() public bodyStyle: string | undefined;
}
