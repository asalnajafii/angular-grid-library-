import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
declare enum pipeFormatEnum {
    date = "date",
    Moment = "Moment"
}
export declare class DateColumnComponent implements OnInit {
    value: any;
    row: any;
    constructor();
    ngOnInit(): void;
    /**
     * @method  access to enum data
     */
    get pipeFormat(): typeof pipeFormatEnum;
    static ɵfac: i0.ɵɵFactoryDef<DateColumnComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DateColumnComponent, "date-column", never, { "value": "value"; "row": "row"; }, {}, never, never>;
}
export {};
//# sourceMappingURL=date-column.component.d.ts.map