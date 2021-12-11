import { EventEmitter, TemplateRef } from '@angular/core';
import { GridFactoryService } from "../../../service/grid-factory.service";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export declare class ReadMoreColumnComponent {
    private gridFactoryService;
    value: any;
    row: any;
    column: any;
    readMoreData: EventEmitter<any>;
    collapsedNotifier: EventEmitter<any>;
    addClass: boolean;
    isCollapsed: never[];
    cloneDataObservable: Observable<any> | undefined;
    readMoreTemplate: TemplateRef<any>;
    constructor(gridFactoryService: GridFactoryService);
    /**
     * call read more service
     */
    generateReadMoreService(): void;
    /**
     * it trigger collapsed and emit it to grid component to show and hide data
     * @param id {number}- which item click
     */
    triggerCollapsed(id: number): void;
    static ɵfac: i0.ɵɵFactoryDef<ReadMoreColumnComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ReadMoreColumnComponent, "read-more-column", never, { "value": "value"; "row": "row"; "column": "column"; }, { "readMoreData": "readMoreData"; "collapsedNotifier": "collapsedNotifier"; }, never, never>;
}
//# sourceMappingURL=read-more-column.component.d.ts.map