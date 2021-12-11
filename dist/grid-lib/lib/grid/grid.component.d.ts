import { AfterViewInit, ChangeDetectorRef, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { GridFactoryService } from '../service/grid-factory.service';
import { Grid } from '../model/grid';
import { GridActionsNotifier } from '../service/grid-actions-notifier';
import { BehaviorSubject, Subscription } from 'rxjs';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { GridService } from '../service/grid.Service';
import * as i0 from "@angular/core";
export declare class GridComponent implements OnInit, OnDestroy, AfterViewInit {
    private gridFactoryService;
    private gridActionsNotifier;
    private cdRef;
    grid: Grid;
    refreshGrid: BehaviorSubject<boolean>;
    paginator: NgbPagination;
    subscription: Subscription;
    readonly firstPage = 1;
    readonly defaultItemsPerPage = 10;
    readonly withoutSort = "withoutSort";
    tHeadLabels: Array<string>;
    tHeadSortConfig: Array<{}>;
    columnData: any[];
    rows: BehaviorSubject<any>;
    gridService: GridService<HttpClient, void>;
    readMoreValue: never[];
    readMoreHeader: never[];
    readMoreHtml: HTMLElement;
    isCollapsed: never[];
    dataLoading: BehaviorSubject<boolean>;
    page: number;
    pageSize: number;
    totalNumberOfData: number;
    numberOfDataStart: number;
    numberOfDataEnd: number;
    private viewContainerRef;
    private requestUrl;
    private params;
    private requestSubject$;
    constructor(gridFactoryService: GridFactoryService, gridActionsNotifier: GridActionsNotifier, cdRef: ChangeDetectorRef, viewContainerRef: ViewContainerRef);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    /**
     * this method should bind grid we have different situation to bind grid for example search pagination and...
     * so we have method get
     * @param gridRows(data)
     * and fill variable we need
     */
    bindGrid(gridRows: any): void;
    /**
     * gridFactoryService decide and generate grid service
     * @param page which page we are on in
     * @param itemsPerPage count of item in each page
     * @param sortDir if we call sorting function then we have sortDir
     * included sortDirection (it contain ASC, DESC and withoutSort)
     * and column which is column name we must sort base on in
     */
    makeGridService(page?: number, itemsPerPage?: number, sortDir?: any): void;
    /**
     * if we have simple search
     * gridActionsNotifier listen and if some changes happened return new data
     * getSimpleSearch is my new service
     *
     */
    simpleSearch(): void;
    /**
     *
     * @param data read more column event emitter
     */
    showReadMore(data: any): void;
    /**
     *
     * @param collapsed object{id:number,state:boolean}
     */
    triggerCollapsed(collapsed: any): void;
    /**
     *
     * @param data
     */
    createDataFromTableConfig(data: any): void;
    /**
     * its need for showReadMore method
     * @param _elementName tag name
     * @param _idName if we have id
     * @param _className if we have class
     * @param _elementValue if we have value for element
     */
    htmlGenerator(_elementName: any, _idName?: any, _className?: any, _elementValue?: any): any;
    ngOnDestroy(): void;
    /**
     *
     * @param pageNumber page number
     * calcPaginationAmount
     */
    changePage(pageNumber: number): void;
    /***
     * its calculate which data is active now from .. to...
     */
    calcPaginationAmount(): void;
    /**
     * setColumns
     * headerTableCells and each row data
     * we have array @type string
     * it make header and row data with grid @Input
     */
    private setColumns;
    /**
     *
     * @param sortDirectionConfig included sortDirection (it contain ASC, DESC and withoutSort)
     * and column which is column name we must sort base on in
     */
    sorting(sortDirectionConfig: any): void;
    static ɵfac: i0.ɵɵFactoryDef<GridComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<GridComponent, "lib-grid", never, { "grid": "grid"; "refreshGrid": "refreshGrid"; }, {}, never, never>;
}
//# sourceMappingURL=grid.component.d.ts.map