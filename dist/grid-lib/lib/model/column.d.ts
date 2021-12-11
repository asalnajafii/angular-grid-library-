import { Observable } from 'rxjs';
import { TemplateRef } from '@angular/core';
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
    classCallback: (row: any) => string | string[] | Set<string> | {
        [klass: string]: any;
    };
}
/**
 * @interface dropdown config in action column
 */
export interface DropDownItem {
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
export declare class Column {
    headerTableCell: string | Observable<string>;
    value: string | any;
    sortAble?: boolean | undefined;
    sortableName?: string;
}
/**
 * column  default
 */
export declare class TextColumn extends Column {
    type: 'Text';
}
export declare class LinkColumn extends Column {
    type: 'Link';
    onclick?: Function;
}
export declare class BooleanColumn extends Column {
    type: 'Boolean';
}
/**
 * float position of image
 */
export declare class ImageColumn extends Column {
    type: 'Image';
    customClass?: string;
    alt?: string;
    float: 'left' | 'right' | 'none';
    maxWidth?: string;
}
export declare class IconColumn extends Column {
    type: 'Icon';
    icons: IconItems[];
}
/**
 * customTemplate custom theme name it must be @viewchild
 */
export declare class CustomTemplateColumn extends Column {
    type: 'Custom';
    customTemplate?: TemplateRef<any>;
}
/**
 * baseUrl we must send new req
 * queryParams  we must send new req with querystring
 */
export declare class ReadMoreColumn extends Column {
    type: 'ReadMore';
    btnName?: string;
    btnClass?: string;
    iconName?: string;
    modelType?: string;
    url?: string;
    tableConfig: TableConfig[];
    disableHeaderTableCell?: boolean;
}
/**
 * pipeFormat we have angular build in pipe date and Moment custom pipe
 */
export declare class DateColumn extends Column {
    type: 'Date';
    dateFormat?: string;
    pipeFormat: 'date' | 'Moment';
}
export declare class StatusColumn extends Column {
    type: 'Status';
    icon?: string;
    color?: string;
}
/**
 * we have some button it can be simple button or drop down
 */
export declare class ActionColumn extends Column {
    type: 'Action';
    position?: 'left' | 'right' | 'center';
    buttonPadding?: string;
    buttonItems?: ActionItem[];
}
//# sourceMappingURL=column.d.ts.map