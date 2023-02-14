import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
})
export class AppTableComponent {
  @ContentChild('listItem') public readonly listItem:
    | TemplateRef<unknown>
    | any;

  @ContentChild('noData') public readonly noData:
    | TemplateRef<unknown>
    | undefined;

  @Input() public items: any = [];

  @Input() public selectedItem: any;

  @Input() public key = 'id';

  @Input() public loading = true;

  @Input() public loaded = false;

  @Input() public tableClass = 'bg-light shadow-sm';

  @Input() public headerStyle: string | undefined;
  pageNumber: number = 0;
}
