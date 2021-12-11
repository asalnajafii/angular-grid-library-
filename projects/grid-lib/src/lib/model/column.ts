import {Observable} from 'rxjs';
import {TemplateRef} from '@angular/core';

/**
 * @interface read more custom template
 */
export interface TableConfig {
  header: string;
  value: string;
  customTemplate?: TemplateRef<any>;
}

/**
 * @interface buttonItem config in action column
 */
export interface ActionItem {
  name?: string;
  icon?: string;
  customTemplate?: TemplateRef<any>;
  customClass?: string;
  tooltip?: TooltipConfig;
  marginLeft?: number;
  marginRight?: number;
  margin?: number;
  onclick?: Function;
  buttonType?: 'simpleButton' | 'DropDownButton';
  dropDownItems?: DropDownItem[];
  dropDownIcon?: string;
  classCallback: (row: any) => string | string[] | Set<string> | { [klass: string]: any; };
}

/**
 * @interface dropdown config in action column
 */
export interface DropDownItem {
  // @ts-ignore
  name?: string | Function;
  icon?: string | Function;
  customTemplate?: TemplateRef<any>;
  customClass?: string;
  onclick?: Function;
  dropdownDivider?: boolean;
}

/**
 * @interface icon config  in icon column
 */
export interface IconItems {
  name?: string;
  color?: string;
  customClass?: string;
  icon?: string;
  onclick?: Function;
  tooltip?: TooltipConfig;
}

/**
 * @interface tooltip config
 */
export interface TooltipConfig {
  placement?: 'top' | 'right' | 'left' | 'bottom' | 'auto';
  adaptivePosition?: boolean;
  tooltipText: string;
  delay?: number;
  isDisabled?: false | true;
  tooltipAnimation?: boolean;
  customClass?: string;
}

/**
 * column  each column have header and value
 */
export class Column {
  public headerTableCell!: string | Observable<string>;
  public value: string | any;
  public sortAble ? = true;
  public sortableName?: string;
  public customWidth?: number;
}

/**
 * column  default
 */
export class TextColumn extends Column {
  public type!: 'Text';
}

export class LinkColumn extends Column {
  public type!: 'Link';
  public onclick?: Function;
}

export class BooleanColumn extends Column {
  public type !: 'Boolean';
}

/**
 * float position of image
 */
export class ImageColumn extends Column {
  public type!: 'Image';
  public customClass?: string;
  public alt?: string;
  public float!: 'left' | 'right' | 'none';
  public maxWidth?: string;
}

export class IconColumn extends Column {
  public type !: 'Icon';
  public icons: IconItems[] = [];
}

/**
 * customTemplate custom theme name it must be @viewchild
 */
export class CustomTemplateColumn extends Column {
  public type !: 'Custom';
  public customTemplate?: TemplateRef<any>;
}

/**
 * baseUrl we must send new req
 * queryParams  we must send new req with querystring
 */
export class ReadMoreColumn extends Column {
  public type !: 'ReadMore';
  public btnName?: string;
  public btnClass?: string;
  public iconName?: string;
  // TODO :ICH MUSS DENKE ÜBER DIESES (modelType)
  public modelType?: string;
  // public baseUrl?: string;
  // public relativeGetMethodUrl?: string;
  // public relativeSubMethodUrl?: string;
  public url?: string;
  public tableConfig!: TableConfig[];
  public disableHeaderTableCell?: boolean = false;
}

/**
 * pipeFormat we have angular build in pipe date and Moment custom pipe
 */
export class DateColumn extends Column {
  public type !: 'Date';
  public dateFormat?: string;
  public pipeFormat!: 'date' | 'Moment';
}

export class StatusColumn extends Column {
  public type!: 'Status';
  public icon?: string;
  public color?: string;
}

/**
 * we have some button it can be simple button or drop down
 */
export class ActionColumn extends Column {
  public type!: 'Action';
  public position?: 'left' | 'right' | 'center';
  public buttonPadding?: string;
  public buttonItems?: ActionItem[];

}



