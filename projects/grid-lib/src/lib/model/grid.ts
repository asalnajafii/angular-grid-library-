import {Column} from './column';
import {SimpleSearch} from './simpleSearch';
import {Pagination} from './pagination';
/**
 * Column:array of columns
 * modelType:we need model for get data from grid service
 * baseUrl: is api base url
 * simpleSearch: grid can have simple search so we need som config for it
 * rowClassCallback it access to all row data to check it of we need and add custom class for each tr
 *
 */
export class Grid {
  public uniqueName = '';
  public columns: Column[] = [];
  public modelType = '';
  public baseUrl = '';
  public relativeGetMethodUrl = '';
  public relativeAdvancedSearchMethodUrl = '';
  public relativeExportMethodUrl = '';
  public page = 1;
  public pagination!: Pagination;
  public simpleSearch!: SimpleSearch;
  public rowClassCallback?: (row: any) => string | string[] | Set<string> | { [klass: string]: any; };
  public defaultSort?: DefaultSortConfig;
  public noDataMessage = 'There is no data.';
}

export interface DefaultSortConfig {
  sortDir: string;
  sortColumn: string;
}
