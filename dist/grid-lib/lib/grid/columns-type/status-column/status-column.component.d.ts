import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
declare enum statusState {
    active = 1,
    inactive = 0,
    inProgress = 2
}
export declare class StatusColumnComponent implements OnInit {
    value: any;
    row: any;
    constructor();
    ngOnInit(): void;
    /**
     * @method access to enum data
     */
    get statusState(): typeof statusState;
    static ɵfac: i0.ɵɵFactoryDef<StatusColumnComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<StatusColumnComponent, "status-column", never, { "value": "value"; "row": "row"; }, {}, never, never>;
}
export {};
//# sourceMappingURL=status-column.component.d.ts.map