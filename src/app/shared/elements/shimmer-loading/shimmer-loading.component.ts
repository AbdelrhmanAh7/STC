import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shimmer-loading',
  template: `
    <div class="p-3 shimmer-loading">
      <ng-container *ngFor="let load of loadings; let isFirst = first">
        <div
          class="comment animate"
          [ngStyle]="{ 'margin-top.px': isFirst ? 0 : 20 }"
        ></div>
      </ng-container>
    </div>
  `,
  styleUrls: ['./shimmer-loading.component.scss'],
})
export class ShimmerLoadingComponent implements OnInit {
  public readonly loadings: number[] = [];

  @HostBinding('class') public shimmer = 'w-100';

  @Input() public set loadingsCount(val: number) {
    this._pushLoading(val);
  }

  public ngOnInit(): void {
    this.loadings?.length <= 0 && this._pushLoading(10);
  }

  private _pushLoading = (count: number): void => {
    for (let i = 0; i < count; i++) {
      this.loadings.push(+i);
    }
  };
}
