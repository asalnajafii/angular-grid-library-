import { EventEmitter, OnInit, QueryList } from '@angular/core';
import { SortOrder } from '../../model/sortorder.type';
import { DefaultSortConfig } from '../../model/grid';
import * as i0 from "@angular/core";
export declare class HeaderTableCellComponent implements OnInit {
    sortingList: QueryList<any>;
    theadLabel: Array<string>;
    theadSortConfig: Array<any>;
    defaultSort: DefaultSortConfig | undefined;
    sort: EventEmitter<{
        sortDirection: string;
        column: string;
    }>;
    sortDir: SortOrder;
    isSortingStart: never[];
    ngOnInit(): void;
    onSortClick(index: number): void;
    static ɵfac: i0.ɵɵFactoryDef<HeaderTableCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<HeaderTableCellComponent, "header-table-cell", never, { "theadLabel": "theadLabel"; "theadSortConfig": "theadSortConfig"; "defaultSort": "defaultSort"; }, { "sort": "sort"; }, never, never>;
}
//# sourceMappingURL=header-table-cell.component.d.ts.map