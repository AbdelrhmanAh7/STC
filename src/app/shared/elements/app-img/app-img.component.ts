import { Component, Input } from '@angular/core';
import { AttachmentPlaceHolders } from '../../enums/attachment-placeHolders';

@Component({
  selector: 'app-img[url]',
  template: `
    <div
      class="overflow-hidden m-auto"
      [ngClass]="wrapperClass"
      [style.width]="width"
      [style.height]="height"
      [style.min-width]="minWidth"
      [style.min-height]="minHeight"
      [style.border-radius]="borderRadius"
    >
      <ng-container *ngIf="url; else empty">
        <img
          *ngIf="lazyLoad; else noLazyLoading"
          [lazyLoad]="url"
          [defaultImage]="placeHolders.loading"
          [errorImage]="
            isAvatar ? placeHolders.profile : placeHolders.talabeyahImage
          "
          [class]="defaultClass"
          [style]="defaultStyle"
          [ngClass]="imgClass"
          [class.rounded-circle]="isRounded"
        />
      </ng-container>
    </div>

    <ng-template #noLazyLoading>
      <img
        [src]="url"
        [class]="defaultClass"
        [style]="defaultStyle"
        [ngClass]="imgClass"
        [class.rounded-circle]="isRounded"
        (error)="
          url = isAvatar ? placeHolders.profile : placeHolders.talabeyahImage
        "
      />
    </ng-template>
    <ng-template #empty>
      <img
        [ngClass]="imgClass"
        [class]="defaultClass"
        [style]="defaultStyle"
        [class.rounded-circle]="isRounded"
        [lazyLoad]="
          isAvatar ? placeHolders.profile : placeHolders.talabeyahImage
        "
    /></ng-template>
  `,
})
export class AppImageComponent {
  @Input() public url: string | null = null;
  @Input() public placeHolder: AttachmentPlaceHolders | null = null;
  @Input() public width: string | null = null;
  @Input() public minWidth: string | null = null;
  @Input() public height: string | null = null;
  @Input() public minHeight: string | null = null;
  @Input() public borderRadius: string | null = null;
  @Input() public imgClass: string | null = null;
  @Input() public wrapperClass: string | null = null;
  @Input() public isAvatar = false;
  @Input() public isRounded = false;
  @Input() public lazyLoad = true;

  public defaultClass = 'w-100 h-100';

  public defaultStyle = `position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain`;

  public placeHolders = AttachmentPlaceHolders;
}
