// angular basic
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
// internal import
import {GridFactoryService} from '../service/grid-factory.service';
import {Grid} from '../model/grid';
import {GridActionsNotifier} from '../service/grid-actions-notifier';
import {BehaviorSubject, empty, Subscription} from 'rxjs';
import {NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpParams} from '@angular/common/http';
import {GridService} from '../service/grid.service';
import {map, switchMap} from 'rxjs/operators';
import {LocalStorageConfiguration} from '../model/localStorageConfiguration';
import {ReadMoreParams} from '../model/readMoreParams';
import {ReadMoreService} from '../service/readMore.service';
import {HelperService} from '../service/helper.service';
import {RequestsUrls} from '../model/requestsUrls';


@Component({
  selector: 'lib-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() grid: Grid = new Grid();
  @Input() refreshGrid = new BehaviorSubject<boolean>(false);
  @ViewChild('paginator', {static: true}) paginator!: NgbPagination;
  // general
  public subscription: Subscription = new Subscription();
  // read only
  readonly firstPage = 1;

  readonly defaultItemsPerPage = 10;
  readonly withoutSort = 'withoutSort';

  public tHeadLabels: Array<string> = [];
  public tHeadSortConfig: Array<{}> = [];
  public tHeadCustomWith: Array<{}> = [];
  public columnData: any[] = [];
  public rows = new BehaviorSubject<any>([]);
  public gridService: GridService<HttpClient, void>;
  // read more
  public readMoreValue = [];
  public readMoreHeader = [];
  public readMoreHtml!: HTMLElement;
  public isCollapsed = [];
  // loading
  public dataLoading = new BehaviorSubject<boolean>(false);
  // pagination
  public page: number = this.firstPage;
  public pageSize = this.defaultItemsPerPage;
  public totalNumberOfData!: number;
  public numberOfDataStart!: number;
  public numberOfDataEnd!: number;
  private viewContainerRef!: ViewContainerRef;
  private requestsUrls: RequestsUrls = new RequestsUrls();
  private params = new HttpParams();
  private requestSubject$ = new BehaviorSubject<boolean | string>(false);
  // Advanced Search
  private advancedFormData: any;
  // Simple Search
  private simpleFormData: string = '';
  // Local Storage
  private localStorageData: LocalStorageConfiguration = new LocalStorageConfiguration();
  private isExport = false;
  /**
   * @param gridFactoryService
   * @param gridActionsNotifier
   * @param cdRef
   * @param viewContainerRef
   */

  constructor(private gridFactoryService: GridFactoryService,
              private gridActionsNotifier: GridActionsNotifier,
              private cdRef: ChangeDetectorRef,
              private readMoreService: ReadMoreService,
              private helperService: HelperService,
              viewContainerRef: ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
    this.gridService = this.gridFactoryService.CreateGridService(this.grid.modelType);
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.resetLocalStorage();
    this.setDefaultsOnGrid();
    this.setColumns();
    // in page load we dont need sort so make service call without sorting
    if (!this.grid.defaultSort) {
      this.makeGridService(this.page, this.pageSize);
    }
    this.simpleSearch();
    this.advancedSearch();
    this.export();
    this.refreshGrid.subscribe((res: boolean) => {
      if (res) {
        this.makeGridService(this.page, this.pageSize);
        this.refreshGrid.next(false);
      }
    });
    this.subscription.add(
      this.requestSubject$.pipe(
        switchMap((res: any) => {
          this.isExport = false;
          let service = null;
          switch (res) {
            case 'export': {
              this.isExport = true;
              const loadFromLocalStorage = this.loadFromLocalStorage();
              const body = {filter: {}, q: ''};
              let params: HttpParams = new HttpParams();
              if (loadFromLocalStorage.filter){
                body.filter = loadFromLocalStorage.filter;
              } else if (!loadFromLocalStorage.filter && loadFromLocalStorage.query){
                params = params.set(`q`, loadFromLocalStorage.query);
              }
              service = this.gridService.exportData(this.requestsUrls.export, params, body);
              return service;
              break;
            }
            case 'getGrid': {
              return this.gridService.getData(this.requestsUrls.getGrid, this.params);
              break;
            }
            case 'simpleSearch': {
              return this.gridService.getData(this.requestsUrls.getGrid, this.params);
              break;
            }
            case 'advancedSearch': {
              return this.gridService.postData(this.requestsUrls.advanceSearch, this.params, this.advancedFormData);
              break;
            }
            default: {
              break;
            }
          }
          return empty();
        })
      ).subscribe((res: any) => {
        // The result for the export API contain a URL property in this case we need to skip of binding information in grid
        if (!res?.url) {
          this.bindGrid(res);
          this.updateLocalStorage();
        }
        if(this.isExport) {
          this.gridActionsNotifier.broadcast('exportResponse', 'success');
        }
      }, error => {
        if(this.isExport) {
          this.gridActionsNotifier.broadcast('exportResponse', 'error');
        }
      })
    );
  }

  setDefaultsOnGrid(){
    this.pageSize = this.grid.pagination.itemsPerPage;
    this.requestsUrls.getGrid = `${this.grid.baseUrl}/${this.grid.relativeGetMethodUrl}`;
    this.requestsUrls.advanceSearch = `${this.grid.baseUrl}/${this.grid.relativeAdvancedSearchMethodUrl}`;
    this.requestsUrls.export = `${this.grid.baseUrl}/${this.grid.relativeExportMethodUrl}`;
  }
  /**
   * this method should bind grid we have different situation to bind grid for example search pagination and...
   * so we have method get
   * @param gridRows(data)
   * and fill variable we need
   */
  bindGrid(gridRows: any): void {
    /**
     * @method markForCheck its for ChangeDetectionStrategy OnPush
     */
    this.cdRef.markForCheck();
    this.rows.next(gridRows.hasOwnProperty('data') ? gridRows.data : gridRows);
    this.totalNumberOfData = gridRows.totalItems;
    this.calcPaginationAmount();
    this.dataLoading.next(true);
  }


  /**
   * gridFactoryService decide and generate grid service
   * @param page which page we are on in
   * @param itemsPerPage count of item in each page
   * @param sortDir if we call sorting function then we have sortDir
   * included sortDirection (it contain ASC, DESC and withoutSort)
   * and column which is column name we must sort base on in
   */
  makeGridService(page?: number, itemsPerPage?: number, sortDir?: any): void {
    // this part using for pagination
    this.params = this.params.set('page', page + '').set('itemsPerPage', itemsPerPage + '');
    // this part using for sorting
    if (sortDir && sortDir.column) {
      if (sortDir.sortDirection === this.withoutSort) {
        this.params = this.params.delete(`order[${sortDir.column}]`);
      } else {
        this.params = this.params.set(`order[${sortDir.column}]`, sortDir.sortDirection + '');
      }
    }
    // this part call request
    this.requestSubject$.next('getGrid');
  }

  /**
   * if we have simple search
   * gridActionsNotifier listen and if some changes happened return new data
   * getSimpleSearch is my new service
   *
   */
  simpleSearch(): void {
    if (this.grid.simpleSearch) {
      this.subscription.add(
        this.gridActionsNotifier.ListenOn<string>('simpleSearch').subscribe(res => {
          this.simpleFormData = res;
          this.params = this.params.set(
            this.grid.simpleSearch.queryParamName,
            this.simpleFormData
          );
          this.page = 1;
          this.params = this.params.set('page', '1');
          this.params = this.params.delete('filter');
          this.requestSubject$.next('simpleSearch');
        }));
    }
  }

  advancedSearch() {
    this.subscription.add(
      this.gridActionsNotifier.ListenOn<string>('advancedSearch').subscribe(res => {
        this.advancedFormData = res;
        if (this.advancedFormData) {
          this.page = 1;
          this.params = this.params.set('page', '1');
          this.params = this.params.delete('q');
          this.requestSubject$.next('advancedSearch');
        } else {
          this.page = 1;
          this.params = this.params.set('page', '1');
          this.params = this.params.delete('filter');
          this.requestSubject$.next('getGrid');
        }
      }));
  }

  export() {
    this.subscription.add(
      this.gridActionsNotifier.ListenOn<string>('export').subscribe(res => {

        const loadFromLocalStorage = this.loadFromLocalStorage();
        if (loadFromLocalStorage.query && !loadFromLocalStorage.filter){
          this.params = this.params.set(
            this.grid.simpleSearch.queryParamName,
            this.simpleFormData
          );
        }
        if (loadFromLocalStorage.filter){
          this.params = this.params.set(
            'filter',
            loadFromLocalStorage.filter
          );
        }
        this.requestSubject$.next('export');
      }));
  }

  /**
   *
   * @param data read more column event emitter
   */
  showReadMore(data: any): void {
    let readMoreParams: ReadMoreParams = {
      grid: this.grid,
      data: data,
      readMoreHtml: this.readMoreHtml,
      readMoreHeader: this.readMoreHeader,
      readMoreValue: this.readMoreValue,
      viewContainerRef: this.viewContainerRef,
    };
    const result = this.readMoreService.loadReadMore(readMoreParams);

    // here we append all element we make before before end selected element
    // @ts-ignore
    result.readMoreHtmlElement.insertAdjacentElement('beforeend', result.readMoreHtml);
  }


  /**
   *
   * @param collapsed object{id:number,state:boolean}
   */
  triggerCollapsed(collapsed: any): void {
    // @ts-ignore
    this.isCollapsed[collapsed.id] = collapsed.state;
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   *
   * @param pageNumber page number
   * calcPaginationAmount
   */
  changePage(pageNumber: number): void {
    this.page = pageNumber;
    this.makeGridService(this.page, this.pageSize);
    this.calcPaginationAmount();
  }

  /***
   * its calculate which data is active now from .. to...
   */
  calcPaginationAmount(): void {
    this.numberOfDataStart = (this.page - 1) * this.pageSize + 1;
    this.numberOfDataEnd = (this.page - 1) * this.pageSize + this.pageSize;
    if (this.numberOfDataEnd > this.totalNumberOfData) {
      this.numberOfDataEnd = this.totalNumberOfData;
    }
  }

  /**
   * setColumns
   * headerTableCells and each row data
   * we have array @type string
   * it make header and row data with grid @Input
   */
  private setColumns(): void {
    // headerTableCells have to keep all thead name which is label und user set it in grid config
    this.tHeadLabels = [];
    // tHeadSortConfig have to keep all thead value (database name :)) and sortable status
    this.tHeadSortConfig = [];
    // we use value and fill table with columnData
    this.columnData = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.grid.columns.length; i++) {
      this.columnData.push(Object.assign({}, this.grid.columns[i]));
      // disableHeaderTableCell is little bit tricky :) we can disable thead and we can hide it from user so
      // when we have this property we add empty value in array
      // @ts-ignore
      this.tHeadLabels.push((this.grid.columns[i].disableHeaderTableCell) ? '' : this.grid.columns[i].headerTableCell);
      this.tHeadSortConfig.push({
        value: this.grid.columns[i].sortableName ? this.grid.columns[i].sortableName : this.grid.columns[i].value,
        sortable: this.grid.columns[i].sortAble
      });
      this.tHeadCustomWith.push({
        customWidth: this.grid.columns[i].customWidth
      });
    }
  }

  /**
   *
   * @param sortDirectionConfig included sortDirection (it contain ASC, DESC and withoutSort)
   * and column which is column name we must sort base on in
   */
  sorting(sortDirectionConfig: any): void {
    this.makeGridService(this.page, this.pageSize, sortDirectionConfig);
  }

  updateLocalStorage(){
    this.localStorageData.filter = this.advancedFormData;
    this.localStorageData.itemsPerPage = this.pageSize;
    this.localStorageData.page = this.page;
    console.log(this.simpleFormData);
    this.localStorageData.query = this.simpleFormData;

    const label = this.grid?.uniqueName?.concat('Configurations');
    if (this.localStorageData !== undefined){
      this.helperService.setOnLocalStorage(label , JSON.stringify(this.localStorageData));
    }else{
      this.helperService.unsetOnLocalStorage(label);
    }
  }

  loadFromLocalStorage(): LocalStorageConfiguration{
    const label = this.grid?.uniqueName?.concat('Configurations');
    const getLocalStorageData: LocalStorageConfiguration = JSON.parse(<string> this.helperService.getFromLocalStorage(label));
    return getLocalStorageData;
  }

  resetLocalStorage(){
    const label = this.grid?.uniqueName?.concat('Configurations');
    this.helperService.unsetOnLocalStorage(label);
  }
}


