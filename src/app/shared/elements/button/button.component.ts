import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  ButtonTypes,
  TooltipPositions,
} from 'src/app/shared/utlis/button-properties';
import { ThemePalette } from '@angular/material/core';

type ButtonType = 'button' | 'reset' | 'submit';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  public ButtonTypes = ButtonTypes;

  @Output() public readonly clicked = new EventEmitter();

  @Input() public matType: ButtonTypes = ButtonTypes.basic;

  @Input() public type: ButtonType = 'button';

  @Input() public color: ThemePalette | null = null;

  @Input() public spinnerColor = 'text-secondary';

  @Input() public text: string | null = null;

  @Input() public icon: string | null = null;

  @Input() public svgIcon: string | null = null;

  @Input() public bgColor: string | null = null;

  @Input() public toolTip: string = '';

  @Input() public tooltipPosition: TooltipPositions = TooltipPositions.ABOVE;

  @Input() public route: string | null = null;

  @Input() public disabled: boolean | null = null;

  @Input() public isLoading: boolean | null = null;

  @Input() public isFullWidth: boolean | null = null;

  @Input() public url: string | null = null;

  @Input() public fileName: string | null = null;

  @Input() public target: '_blank' | null = null;
  /** @description we shouldn't use class as it will cause duplication on 2 dom elms */
  @Input() public inputClass: string | null = null;

  @Input() public backgroundColor = '#2a3042';

  @Input() public textColor = '#a3a7b2';

  @Input() public reversColor = false;

  @Input() public defaultColor = false;
}
