import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { GridActionsNotifier } from "../service/grid-actions-notifier";
import { SimpleSearchConfig } from "../model/simpleSearch";
import { Subscription } from "rxjs";
import * as i0 from "@angular/core";
export declare class SearchComponent implements OnInit, OnDestroy {
    private gridActionsNotifier;
    search: SimpleSearchConfig;
    simpleSearchInput: ElementRef;
    searchModel: any;
    subscription: Subscription;
    constructor(gridActionsNotifier: GridActionsNotifier);
    ngOnDestroy(): void;
    ngOnInit(): void;
    /**
     * this
     * @param data- its search field value and
     */
    searchCompleteOnButtonPress(data: any): void;
    static ɵfac: i0.ɵɵFactoryDef<SearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SearchComponent, "lib-search", never, { "search": "search"; }, {}, never, never>;
}
//# sourceMappingURL=search.component.d.ts.map