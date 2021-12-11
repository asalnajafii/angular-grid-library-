import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare enum buttonTypeEnum {
    DropDownButton = "DropDownButton",
    simpleButton = "simpleButton"
}
export declare class ActionColumnComponent implements OnInit {
    value: any;
    row: any;
    column: any;
    constructor();
    ngOnInit(): void;
    /**
     *  @method  access to enum data
     */
    get buttonType(): typeof buttonTypeEnum;
    static ɵfac: i0.ɵɵFactoryDef<ActionColumnComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ActionColumnComponent, "action-column", never, { "value": "value"; "row": "row"; "column": "column"; }, {}, never, never>;
}
//# sourceMappingURL=action-column.component.d.ts.map