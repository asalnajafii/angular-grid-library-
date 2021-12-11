import { Column } from './column';
import { SimpleSearch } from './simpleSearch';
import { Pagination } from './pagination';
/**
 * Column:array of columns
 * modelType:we need model for get data from grid service
 * baseUrl: is api base url
 * simpleSearch: grid can have simple search so we need som config for it
 * rowClassCallback it access to all row data to check it of we need and add custom class for each tr
 *
 */
export declare class Grid {
    columns: Column[];
    modelType: string;
    baseUrl: string;
    relativeGetMethodUrl: string;
    page: number;
    pagination: Pagination;
    simpleSearch: SimpleSearch;
    rowClassCallback?: (row: any) => string | string[] | Set<string> | {
        [klass: string]: any;
    };
    defaultSort?: DefaultSortConfig;
    noDataMessage: string;
}
export interface DefaultSortConfig {
    sortDir: string;
    sortColumn: string;
}
//# sourceMappingURL=grid.d.ts.map