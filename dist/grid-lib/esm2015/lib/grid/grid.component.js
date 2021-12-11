// angular basic
import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Grid } from '../model/grid';
import { BehaviorSubject, empty, Subscription } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../service/grid-factory.service";
import * as i2 from "../service/grid-actions-notifier";
import * as i3 from "./header-table-cell/header-table-cell.component";
import * as i4 from "@angular/common";
import * as i5 from "@ng-bootstrap/ng-bootstrap";
import * as i6 from "@ng-select/ng-select";
import * as i7 from "@angular/forms";
import * as i8 from "./columns-type/text-column/text-column.component";
import * as i9 from "./columns-type/boolean-column/boolean-column.component";
import * as i10 from "./columns-type/image-column/image-column.component";
import * as i11 from "./columns-type/icon-column/icon-column.component";
import * as i12 from "./columns-type/custom-column/custom-column.component";
import * as i13 from "./columns-type/date-column/date-column.component";
import * as i14 from "./columns-type/status-column/status-column.component";
import * as i15 from "./columns-type/action-column/action-column.component";
import * as i16 from "./columns-type/link-column/link-column.component";
import * as i17 from "./columns-type/read-more-column/read-more-column.component";
import * as i18 from "../pipes/row-class-callback.pipe";
import * as i19 from "../pipes/nested-json.pipe";
const _c0 = ["paginator"];
function GridComponent_ng_container_6_ng_container_1_td_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c1 = function (a0, a1, a2) { return { value: a0, row: a1, column: a2 }; };
function GridComponent_ng_container_6_ng_container_1_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, GridComponent_ng_container_6_ng_container_1_td_3_ng_container_1_Template, 1, 0, "ng-container", 12);
    i0.ɵɵpipe(2, "nestedJson");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const rowItem_r10 = ctx.$implicit;
    const rowItems_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵnextContext(2);
    const _r4 = i0.ɵɵreference(12);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(5, _c1, i0.ɵɵpipeBind2(2, 2, rowItems_r7, rowItem_r10.value), rowItem_r10, rowItems_r7));
} }
function GridComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "tr", 10);
    i0.ɵɵpipe(2, "RowClassCallback");
    i0.ɵɵtemplate(3, GridComponent_ng_container_6_ng_container_1_td_3_Template, 3, 9, "td", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "tr", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const rowItems_r7 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpipeBind2(2, 4, rowItems_r7, ctx_r6.grid.rowClassCallback));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r6.columnData);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngbCollapse", !ctx_r6.isCollapsed[rowItems_r7["id"]])("id", rowItems_r7 && rowItems_r7["id"] ? "read-more" + rowItems_r7["id"] : "");
} }
function GridComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GridComponent_ng_container_6_ng_container_1_Template, 5, 7, "ng-container", 9);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r0.rows));
} }
function GridComponent_ng_template_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelementStart(1, "span", 16);
    i0.ɵɵtext(2, "Loading...");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function GridComponent_ng_template_7_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r14.grid.noDataMessage, " ");
} }
function GridComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, GridComponent_ng_template_7_div_1_Template, 3, 0, "div", 14);
    i0.ɵɵtemplate(2, GridComponent_ng_template_7_p_2_Template, 2, 1, "p", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.dataLoading.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.rows.value.length == 0 && ctx_r2.dataLoading.value);
} }
function GridComponent_ng_container_10_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ng-select", 24);
    i0.ɵɵlistener("change", function GridComponent_ng_container_10_ng_container_6_Template_ng_select_change_1_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.changePage(ctx_r18.firstPage); })("ngModelChange", function GridComponent_ng_container_10_ng_container_6_Template_ng_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.pageSize = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("items", ctx_r16.grid.pagination.itemPerPageSelectorOption)("searchable", false)("clearable", false)("ngModel", ctx_r16.pageSize);
} }
function GridComponent_ng_container_10_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate("Showing " + ctx_r17.numberOfDataStart + " - " + ctx_r17.numberOfDataEnd + " of " + ctx_r17.totalNumberOfData);
} }
function GridComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 17);
    i0.ɵɵelementStart(2, "div", 18);
    i0.ɵɵelementStart(3, "ngb-pagination", 19, 20);
    i0.ɵɵlistener("pageChange", function GridComponent_ng_container_10_Template_ngb_pagination_pageChange_3_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.page = $event; })("pageChange", function GridComponent_ng_container_10_Template_ngb_pagination_pageChange_3_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.changePage($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 21);
    i0.ɵɵtemplate(6, GridComponent_ng_container_10_ng_container_6_Template, 2, 4, "ng-container", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 22);
    i0.ɵɵtemplate(8, GridComponent_ng_container_10_span_8_Template, 2, 1, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("collectionSize", ctx_r3.totalNumberOfData)("page", ctx_r3.page)("pageSize", ctx_r3.pageSize)("maxSize", ctx_r3.grid.pagination.maxSize ? ctx_r3.grid.pagination.maxSize : 5)("rotate", ctx_r3.grid.pagination.rotate ? ctx_r3.grid.pagination.rotate : true)("boundaryLinks", ctx_r3.grid.pagination.boundaryLinks ? ctx_r3.grid.pagination.boundaryLinks : false);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r3.grid.pagination.itemPerPageSelectorOption && ctx_r3.grid.pagination.itemPerPageSelectorOption.length > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r3.grid.pagination.hasOwnProperty("disableNumberOfData") || !ctx_r3.grid.pagination.disableNumberOfData);
} }
function GridComponent_ng_template_11_text_column_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "text-column", 30);
} if (rf & 2) {
    const ctx_r37 = i0.ɵɵnextContext();
    const value_r25 = ctx_r37.value;
    const row_r24 = ctx_r37.row;
    i0.ɵɵproperty("value", value_r25)("row", row_r24);
} }
function GridComponent_ng_template_11_boolean_column_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "boolean-column", 30);
} if (rf & 2) {
    const ctx_r38 = i0.ɵɵnextContext();
    const value_r25 = ctx_r38.value;
    const row_r24 = ctx_r38.row;
    i0.ɵɵproperty("value", value_r25)("row", row_r24);
} }
function GridComponent_ng_template_11_image_column_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "image-column", 30);
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const value_r25 = ctx_r39.value;
    const row_r24 = ctx_r39.row;
    i0.ɵɵproperty("value", value_r25)("row", row_r24);
} }
function GridComponent_ng_template_11_icon_column_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "icon-column", 30);
} if (rf & 2) {
    const ctx_r40 = i0.ɵɵnextContext();
    const value_r25 = ctx_r40.value;
    const row_r24 = ctx_r40.row;
    i0.ɵɵproperty("value", value_r25)("row", row_r24);
} }
function GridComponent_ng_template_11_custom_column_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "custom-column", 31);
} if (rf & 2) {
    const ctx_r41 = i0.ɵɵnextContext();
    const value_r25 = ctx_r41.value;
    const row_r24 = ctx_r41.row;
    const column_r26 = ctx_r41.column;
    i0.ɵɵproperty("value", value_r25)("row", row_r24)("column", column_r26);
} }
function GridComponent_ng_template_11_date_column_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "date-column", 30);
} if (rf & 2) {
    const ctx_r42 = i0.ɵɵnextContext();
    const value_r25 = ctx_r42.value;
    const row_r24 = ctx_r42.row;
    i0.ɵɵproperty("value", value_r25)("row", row_r24);
} }
function GridComponent_ng_template_11_status_column_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "status-column", 30);
} if (rf & 2) {
    const ctx_r43 = i0.ɵɵnextContext();
    const value_r25 = ctx_r43.value;
    const row_r24 = ctx_r43.row;
    i0.ɵɵproperty("value", value_r25)("row", row_r24);
} }
function GridComponent_ng_template_11_action_column_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "action-column", 31);
} if (rf & 2) {
    const ctx_r44 = i0.ɵɵnextContext();
    const value_r25 = ctx_r44.value;
    const row_r24 = ctx_r44.row;
    const column_r26 = ctx_r44.column;
    i0.ɵɵproperty("value", value_r25)("row", row_r24)("column", column_r26);
} }
function GridComponent_ng_template_11_link_column_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "link-column", 31);
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const value_r25 = ctx_r45.value;
    const row_r24 = ctx_r45.row;
    const column_r26 = ctx_r45.column;
    i0.ɵɵproperty("value", value_r25)("row", row_r24)("column", column_r26);
} }
function GridComponent_ng_template_11_read_more_column_10_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "read-more-column", 32);
    i0.ɵɵlistener("readMoreData", function GridComponent_ng_template_11_read_more_column_10_Template_read_more_column_readMoreData_0_listener($event) { i0.ɵɵrestoreView(_r47); const ctx_r46 = i0.ɵɵnextContext(2); return ctx_r46.showReadMore($event); })("collapsedNotifier", function GridComponent_ng_template_11_read_more_column_10_Template_read_more_column_collapsedNotifier_0_listener($event) { i0.ɵɵrestoreView(_r47); const ctx_r48 = i0.ɵɵnextContext(2); return ctx_r48.triggerCollapsed($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r49 = i0.ɵɵnextContext();
    const value_r25 = ctx_r49.value;
    const column_r26 = ctx_r49.column;
    const row_r24 = ctx_r49.row;
    i0.ɵɵproperty("value", value_r25)("column", column_r26)("row", row_r24);
} }
function GridComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 26);
    i0.ɵɵtemplate(1, GridComponent_ng_template_11_text_column_1_Template, 1, 2, "text-column", 27);
    i0.ɵɵtemplate(2, GridComponent_ng_template_11_boolean_column_2_Template, 1, 2, "boolean-column", 27);
    i0.ɵɵtemplate(3, GridComponent_ng_template_11_image_column_3_Template, 1, 2, "image-column", 27);
    i0.ɵɵtemplate(4, GridComponent_ng_template_11_icon_column_4_Template, 1, 2, "icon-column", 27);
    i0.ɵɵtemplate(5, GridComponent_ng_template_11_custom_column_5_Template, 1, 3, "custom-column", 28);
    i0.ɵɵtemplate(6, GridComponent_ng_template_11_date_column_6_Template, 1, 2, "date-column", 27);
    i0.ɵɵtemplate(7, GridComponent_ng_template_11_status_column_7_Template, 1, 2, "status-column", 27);
    i0.ɵɵtemplate(8, GridComponent_ng_template_11_action_column_8_Template, 1, 3, "action-column", 28);
    i0.ɵɵtemplate(9, GridComponent_ng_template_11_link_column_9_Template, 1, 3, "link-column", 28);
    i0.ɵɵtemplate(10, GridComponent_ng_template_11_read_more_column_10_Template, 1, 3, "read-more-column", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r24 = ctx.row;
    i0.ɵɵproperty("ngSwitch", row_r24.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "Text");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "Boolean");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "Image");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "Icon");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "Custom");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "Date");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "Status");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "Action");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "Link");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "ReadMore");
} }
export class GridComponent {
    constructor(gridFactoryService, gridActionsNotifier, cdRef, viewContainerRef) {
        this.gridFactoryService = gridFactoryService;
        this.gridActionsNotifier = gridActionsNotifier;
        this.cdRef = cdRef;
        this.grid = new Grid();
        this.refreshGrid = new BehaviorSubject(false);
        // general
        this.subscription = new Subscription();
        // read only
        this.firstPage = 1;
        this.defaultItemsPerPage = 10;
        this.withoutSort = 'withoutSort';
        this.tHeadLabels = [];
        this.tHeadSortConfig = [];
        this.columnData = [];
        this.rows = new BehaviorSubject([]);
        // read more
        this.readMoreValue = [];
        this.readMoreHeader = [];
        this.isCollapsed = [];
        // loading
        this.dataLoading = new BehaviorSubject(false);
        // pagination
        this.page = this.firstPage;
        this.pageSize = this.defaultItemsPerPage;
        this.requestUrl = '';
        this.params = new HttpParams();
        this.requestSubject$ = new BehaviorSubject(false);
        this.viewContainerRef = viewContainerRef;
        this.gridService = this.gridFactoryService.CreateGridService(this.grid.modelType);
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.pageSize = this.grid.pagination.itemsPerPage;
        this.requestUrl = `${this.grid.baseUrl}/${this.grid.relativeGetMethodUrl}`;
        this.setColumns();
        // in page load we dont need sort so make service call without sorting
        if (!this.grid.defaultSort) {
            this.makeGridService(this.page, this.pageSize);
        }
        this.simpleSearch();
        this.refreshGrid.subscribe((res) => {
            if (res) {
                this.makeGridService(this.page, this.pageSize);
                this.refreshGrid.next(false);
            }
        });
        this.subscription.add(this.requestSubject$.pipe(switchMap((res) => {
            if (res) {
                return this.gridService.getData(this.requestUrl, this.params);
            }
            return empty();
        })).subscribe((res) => {
            this.bindGrid(res);
        }));
    }
    /**
     * this method should bind grid we have different situation to bind grid for example search pagination and...
     * so we have method get
     * @param gridRows(data)
     * and fill variable we need
     */
    bindGrid(gridRows) {
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
    makeGridService(page, itemsPerPage, sortDir) {
        // this part using for pagination
        this.params = this.params.set('page', page + '').set('itemsPerPage', itemsPerPage + '');
        // this part using for sorting
        if (sortDir && sortDir.column) {
            if (sortDir.sortDirection === this.withoutSort) {
                this.params = this.params.delete(`order[${sortDir.column}]`);
            }
            else {
                this.params = this.params.set(`order[${sortDir.column}]`, sortDir.sortDirection + '');
            }
        }
        // this part call request
        this.requestSubject$.next(true);
    }
    /**
     * if we have simple search
     * gridActionsNotifier listen and if some changes happened return new data
     * getSimpleSearch is my new service
     *
     */
    simpleSearch() {
        if (this.grid.simpleSearch) {
            this.subscription.add(this.gridActionsNotifier.ListenOn('simpleSearch').subscribe(res => {
                this.params = this.params.set(this.grid.simpleSearch.queryParamName, res);
                this.page = 1;
                this.params = this.params.set('page', '1');
                this.requestSubject$.next(true);
            }));
        }
    }
    /**
     *
     * @param data read more column event emitter
     */
    showReadMore(data) {
        this.readMoreHtml = document.createElement('td');
        this.readMoreHtml.setAttribute('class', 'append-table');
        this.readMoreHtml.setAttribute('colspan', `${(this.grid != undefined
            && this.grid.columns != undefined
            && this.grid.columns.length ? this.grid.columns.length : 1)}`);
        this.readMoreValue = [];
        this.readMoreHeader = [];
        // get element which we have id
        let readMoreHtmlElement;
        readMoreHtmlElement = document.getElementById('read-more' + data.id);
        // we have loop in config and then make html
        // read more column tables config have 3 property header value and template
        this.createDataFromTableConfig(data);
        // here we must create table dynamically
        // we need one div and it must have id and class then we must append it to read more Html field
        const div = this.htmlGenerator('div', 'child_data_local_1', 'datatable datatable-default  datatable-scroll datatable-loaded');
        this.readMoreHtml.appendChild(div);
        // we need one table and it must have class then div element we make before must append it
        const table = this.htmlGenerator('table', null, 'datatable-table table');
        div.appendChild(table);
        // we need one thead and it must have class then table element we make before must append it
        const thead = this.htmlGenerator('thead', null, 'datatable-head');
        table.appendChild(thead);
        // we need one tr and it must have class then thead element we make before must append it
        const trHead = this.htmlGenerator('tr', 'null', 'datatable-row');
        thead.appendChild(trHead);
        // we need make td dynamically and last tr must append it (it makes header of table )
        this.readMoreHeader.forEach(header => {
            const tdHead = this.htmlGenerator('th', null, null);
            trHead.appendChild(tdHead);
            tdHead.innerText = header;
        });
        // we need one tbody and it must have class then table must append it
        const tabBody = this.htmlGenerator('tbody', null, 'datatable-body');
        table.appendChild(tabBody);
        // we need one tr and it must have class then  tBody  must append it
        const tBodyRow = this.htmlGenerator('tr', null, 'datatable-row');
        tabBody.appendChild(tBodyRow);
        // we need make td dynamically and last tr must append it (it makes value tr of table )
        this.readMoreValue.forEach(rowItem => {
            // @ts-ignore
            if (rowItem.customTemplate) {
                // we need make td dynamically and last tr must append it (it makes value tr of table )
                const td = this.htmlGenerator('td', null, null);
                tBodyRow.appendChild(td);
                // we have custom template this part and we need read it from read more config so we need to use createEmbeddedView
                // we detectChanges it for confidence (it must be safe)
                // @ts-ignore
                const embeddedViewRef = this.viewContainerRef.createEmbeddedView(rowItem.customTemplate, { row: data.data });
                embeddedViewRef.detectChanges();
                // here we have embeddedViewRef and it can be have more than one node so we need to have for on it
                for (let i = 0; i < embeddedViewRef.rootNodes.length; i++) {
                    // we have 2 condition here 1-have template 2-dont have (simple value we read simply from req)
                    // here we have template
                    const element = embeddedViewRef.rootNodes[i];
                    td.appendChild(element);
                }
            }
            else {
                // here dont have template
                const valueTd = this.htmlGenerator('td', null, null);
                // @ts-ignore
                const spanValue = this.htmlGenerator('span', null, null, rowItem.value);
                tBodyRow.appendChild(valueTd);
                valueTd.appendChild(spanValue);
            }
        });
        // here we append all element we make before before end selected element
        // @ts-ignore
        readMoreHtmlElement.insertAdjacentElement('beforeend', this.readMoreHtml);
    }
    /**
     *
     * @param collapsed object{id:number,state:boolean}
     */
    triggerCollapsed(collapsed) {
        // @ts-ignore
        this.isCollapsed[collapsed.id] = collapsed.state;
    }
    /**
     *
     * @param data
     */
    createDataFromTableConfig(data) {
        data.tableConfig.forEach((i) => {
            // @ts-ignore
            this.readMoreHeader.push(i.header);
            // read more value contain value and template
            // @ts-ignore
            this.readMoreValue.push({ value: data.data[i.value], customTemplate: i.customTemplate });
        });
    }
    /**
     * its need for showReadMore method
     * @param _elementName tag name
     * @param _idName if we have id
     * @param _className if we have class
     * @param _elementValue if we have value for element
     */
    // tslint:disable-next-line:variable-name typedef
    htmlGenerator(_elementName, _idName, _className, _elementValue) {
        const element = document.createElement(_elementName);
        if (_idName !== null) {
            element.setAttribute('id', _idName);
        }
        if (_className !== null) {
            element.setAttribute('class', _className);
        }
        if (_elementValue) {
            element.innerText = _elementValue;
        }
        return element;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     *
     * @param pageNumber page number
     * calcPaginationAmount
     */
    changePage(pageNumber) {
        this.page = pageNumber;
        this.makeGridService(this.page, this.pageSize);
        this.calcPaginationAmount();
    }
    /***
     * its calculate which data is active now from .. to...
     */
    calcPaginationAmount() {
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
    setColumns() {
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
        }
    }
    /**
     *
     * @param sortDirectionConfig included sortDirection (it contain ASC, DESC and withoutSort)
     * and column which is column name we must sort base on in
     */
    sorting(sortDirectionConfig) {
        this.makeGridService(this.page, this.pageSize, sortDirectionConfig);
    }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(i0.ɵɵdirectiveInject(i1.GridFactoryService), i0.ɵɵdirectiveInject(i2.GridActionsNotifier), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
GridComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GridComponent, selectors: [["lib-grid"]], viewQuery: function GridComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
    } }, inputs: { grid: "grid", refreshGrid: "refreshGrid" }, decls: 13, vars: 6, consts: [[1, "angular-bootstrap-table"], [1, "table-box", "table-responsive"], [1, "table", "table-head-custom", "table-vertical-center", "table-striped"], [3, "theadSortConfig", "defaultSort", "theadLabel", "sort"], [4, "ngIf", "ngIfElse"], ["noData", ""], [1, "pagination-box"], [4, "ngIf"], ["ColumnTemplate", ""], [4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "ngbCollapse", "id"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "no-data", "text-center", "p-5"], ["class", "spinner-border text-primary", "role", "status", 4, "ngIf"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "sr-only"], [1, "d-flex", "mt-2"], [1, "mr-auto", "datatable-pager"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"], ["paginator", ""], [1, "select-pagination"], [1, "ml-2", "mt-1", "paginate-detail"], ["class", "pagination-data-info", 4, "ngIf"], ["bindLabel", "name", "placeholder", "Select city", 3, "items", "searchable", "clearable", "ngModel", "change", "ngModelChange"], [1, "pagination-data-info"], [3, "ngSwitch"], [3, "value", "row", 4, "ngSwitchCase"], [3, "value", "row", "column", 4, "ngSwitchCase"], [3, "value", "column", "row", "readMoreData", "collapsedNotifier", 4, "ngSwitchCase"], [3, "value", "row"], [3, "value", "row", "column"], [3, "value", "column", "row", "readMoreData", "collapsedNotifier"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "table", 2);
        i0.ɵɵelementStart(3, "thead");
        i0.ɵɵelementStart(4, "header-table-cell", 3);
        i0.ɵɵlistener("sort", function GridComponent_Template_header_table_cell_sort_4_listener($event) { return ctx.sorting($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "tbody");
        i0.ɵɵtemplate(6, GridComponent_ng_container_6_Template, 3, 3, "ng-container", 4);
        i0.ɵɵtemplate(7, GridComponent_ng_template_7_Template, 3, 2, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 6);
        i0.ɵɵtemplate(10, GridComponent_ng_container_10_Template, 9, 8, "ng-container", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(11, GridComponent_ng_template_11_Template, 11, 11, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(8);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("theadSortConfig", ctx.tHeadSortConfig)("defaultSort", ctx.grid.defaultSort)("theadLabel", ctx.tHeadLabels);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.dataLoading.value && ctx.rows.value.length > 0)("ngIfElse", _r1);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.dataLoading.value && ctx.grid.pagination && ctx.rows.value.length !== 0);
    } }, directives: [i3.HeaderTableCellComponent, i4.NgIf, i4.NgForOf, i4.NgClass, i5.NgbCollapse, i4.NgTemplateOutlet, i5.NgbPagination, i6.NgSelectComponent, i7.NgControlStatus, i7.NgModel, i4.NgSwitch, i4.NgSwitchCase, i8.TextColumnComponent, i9.BooleanColumnComponent, i10.ImageColumnComponent, i11.IconColumnComponent, i12.CustomColumnComponent, i13.DateColumnComponent, i14.StatusColumnComponent, i15.ActionColumnComponent, i16.LinkColumnComponent, i17.ReadMoreColumnComponent], pipes: [i4.AsyncPipe, i18.RowClassCallbackPipe, i19.NestedJsonPipe], styles: ["div#child_data_local_1{display:block;width:100%}tbody.datatable-body,thead.datatable-head{display:table;width:100%}table.datatable-table,tr#read-more1{width:100%}.disable-header{width:20px}.no-data{left:0;margin-top:15px;position:absolute;right:0;width:auto}table{display:table;min-height:100px;width:100%}.pagination-data-info{padding:0 15px;vertical-align:top}"], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GridComponent, [{
        type: Component,
        args: [{
                selector: 'lib-grid',
                templateUrl: './grid.component.html',
                styleUrls: ['./grid.component.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i1.GridFactoryService }, { type: i2.GridActionsNotifier }, { type: i0.ChangeDetectorRef }, { type: i0.ViewContainerRef }]; }, { grid: [{
            type: Input
        }], refreshGrid: [{
            type: Input
        }], paginator: [{
            type: ViewChild,
            args: ['paginator', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvZ3JpZC1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2dyaWQvZ3JpZC5jb21wb25lbnQudHMiLCJsaWIvZ3JpZC9ncmlkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQixPQUFPLEVBR0wsU0FBUyxFQUNULEtBQUssRUFHTCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbkMsT0FBTyxFQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRTFELE9BQU8sRUFBYSxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUU1RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDRDNCLHdCQUM4Rzs7OztJQUZoSCwwQkFDRTtJQUFBLG9IQUM4Rzs7SUFDaEgsaUJBQUs7Ozs7OztJQUZZLGVBQ0M7SUFERCxzQ0FDQyx1SUFBQTs7O0lBSnRCLDZCQUNFO0lBQUEsOEJBQ0U7O0lBQUEsMEZBR0s7SUFDUCxpQkFBSztJQUVMLHlCQUN1RTtJQUN6RSwwQkFBZTs7OztJQVRULGVBQTJEO0lBQTNELHlGQUEyRDtJQUNyQyxlQUFhO0lBQWIsMkNBQWE7SUFNbkMsZUFBNEM7SUFBNUMsb0VBQTRDLCtFQUFBOzs7SUFUcEQsNkJBQ0U7SUFBQSwrRkFVZTs7SUFDakIsMEJBQWU7OztJQVhzQixlQUFnQjtJQUFoQiwyREFBZ0I7OztJQWVqRCwrQkFDRTtJQUFBLGdDQUFzQjtJQUFBLDBCQUFVO0lBQUEsaUJBQU87SUFDekMsaUJBQU07OztJQUNOLHlCQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFJOzs7SUFERixlQUNGO0lBREUsMkRBQ0Y7OztJQU5GLCtCQUNFO0lBQUEsNkVBRU07SUFDTix3RUFFSTtJQUNOLGlCQUFNOzs7SUFOb0QsZUFBd0I7SUFBeEIsZ0RBQXdCO0lBRzVFLGVBQStDO0lBQS9DLGdGQUErQzs7OztJQTRCbkQsNkJBRUU7SUFBQSxxQ0FPQTtJQUhXLG9PQUFnQywrTkFBQTtJQUczQyxpQkFBWTtJQUNkLDBCQUFlOzs7SUFSRixlQUFtRDtJQUFuRCx5RUFBbUQscUJBQUEsb0JBQUEsNkJBQUE7OztJQWFsRSxnQ0FDbUM7SUFBQSxZQUF5RjtJQUFBLGlCQUFPOzs7SUFBaEcsZUFBeUY7SUFBekYsbUlBQXlGOzs7O0lBakNoSSw2QkFHRTtJQUFBLCtCQUNFO0lBQUEsK0JBQ0U7SUFBQSw4Q0FRQTtJQVBnQix1TkFBZSwrTUFBQTtJQU8vQixpQkFBaUI7SUFDbkIsaUJBQU07SUFFTiwrQkFDRTtJQUFBLGdHQVVlO0lBQ2pCLGlCQUFNO0lBR04sK0JBQ0E7SUFBQSxpRkFDbUk7SUFDbkksaUJBQU07SUFFUixpQkFBTTtJQUNSLDBCQUFlOzs7SUFoQ08sZUFBb0M7SUFBcEMseURBQW9DLHFCQUFBLDZCQUFBLGdGQUFBLGdGQUFBLHNHQUFBO0lBWXJDLGVBQzJDO0lBRDNDLHNJQUMyQztJQWNyRCxlQUFvRztJQUFwRyxtSUFBb0c7OztJQVkvRyxrQ0FBOEU7Ozs7O0lBQTFDLGlDQUFlLGdCQUFBOzs7SUFDbkQscUNBQXVGOzs7OztJQUE3QyxpQ0FBZSxnQkFBQTs7O0lBQ3pELG1DQUFpRjs7Ozs7SUFBM0MsaUNBQWUsZ0JBQUE7OztJQUNyRCxrQ0FBOEU7Ozs7O0lBQTFDLGlDQUFlLGdCQUFBOzs7SUFDbkQsb0NBQXNHOzs7Ozs7SUFBOUQsaUNBQWUsZ0JBQUEsc0JBQUE7OztJQUN2RCxrQ0FBOEU7Ozs7O0lBQTFDLGlDQUFlLGdCQUFBOzs7SUFDbkQsb0NBQW9GOzs7OztJQUE1QyxpQ0FBZSxnQkFBQTs7O0lBQ3ZELG9DQUFzRzs7Ozs7O0lBQTlELGlDQUFlLGdCQUFBLHNCQUFBOzs7SUFDdkQsa0NBQWdHOzs7Ozs7SUFBNUQsaUNBQWUsZ0JBQUEsc0JBQUE7Ozs7SUFDbkQsNENBR0M7SUFGaUIsd1BBQXFDLHlQQUFBO0lBRXRELGlCQUFtQjs7Ozs7O0lBSHlCLGlDQUFlLHNCQUFBLGdCQUFBOzs7SUFWOUQsaUNBQ0U7SUFBQSw4RkFBOEU7SUFDOUUsb0dBQXVGO0lBQ3ZGLGdHQUFpRjtJQUNqRiw4RkFBOEU7SUFDOUUsa0dBQXNHO0lBQ3RHLDhGQUE4RTtJQUM5RSxrR0FBb0Y7SUFDcEYsa0dBQXNHO0lBQ3RHLDhGQUFnRztJQUNoRywwR0FHb0I7SUFDdEIsMEJBQWU7OztJQWRELHVDQUFxQjtJQUNuQixlQUFvQjtJQUFwQixxQ0FBb0I7SUFDakIsZUFBdUI7SUFBdkIsd0NBQXVCO0lBQ3pCLGVBQXFCO0lBQXJCLHNDQUFxQjtJQUN0QixlQUFvQjtJQUFwQixxQ0FBb0I7SUFDbEIsZUFBc0I7SUFBdEIsdUNBQXNCO0lBQ3hCLGVBQW9CO0lBQXBCLHFDQUFvQjtJQUNsQixlQUFzQjtJQUF0Qix1Q0FBc0I7SUFDdEIsZUFBc0I7SUFBdEIsdUNBQXNCO0lBQ3hCLGVBQW9CO0lBQXBCLHFDQUFvQjtJQUNmLGVBQXdCO0lBQXhCLHlDQUF3Qjs7QURyRS9DLE1BQU0sT0FBTyxhQUFhO0lBa0N4QixZQUFvQixrQkFBc0MsRUFDdEMsbUJBQXdDLEVBQ3hDLEtBQXdCLEVBQ2hDLGdCQUFrQztRQUgxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFuQ25DLFNBQUksR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLGdCQUFXLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFFM0QsVUFBVTtRQUNILGlCQUFZLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkQsWUFBWTtRQUNILGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCx3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFFOUIsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO1FBQ2hDLG9CQUFlLEdBQWMsRUFBRSxDQUFDO1FBQ2hDLGVBQVUsR0FBVSxFQUFFLENBQUM7UUFDdkIsU0FBSSxHQUFHLElBQUksZUFBZSxDQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRTNDLFlBQVk7UUFDTCxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUVwQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUN4QixVQUFVO1FBQ0gsZ0JBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUN6RCxhQUFhO1FBQ04sU0FBSSxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDOUIsYUFBUSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUtuQyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQzFCLG9CQUFlLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFNNUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELGVBQWU7SUFFZixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDM0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLHNFQUFzRTtRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoRDtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVksRUFBRSxFQUFFO1lBQzFDLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzlCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQ3ZCLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2hCLElBQUksR0FBRyxFQUFFO2dCQUNQLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0Q7WUFDRCxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUNILENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBRUosQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsUUFBUSxDQUFDLFFBQWE7UUFDcEI7O1dBRUc7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQzdDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFHRDs7Ozs7OztPQU9HO0lBQ0gsZUFBZSxDQUFDLElBQWEsRUFBRSxZQUFxQixFQUFFLE9BQWE7UUFDakUsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN4Riw4QkFBOEI7UUFDOUIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUM3QixJQUFJLE9BQU8sQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQzlEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsT0FBTyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUN2RjtTQUNGO1FBQ0QseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFTLGNBQWMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDeEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzFFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ1A7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsWUFBWSxDQUFDLElBQVM7UUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUztlQUMvRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxTQUFTO2VBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUM5RCxDQUFDO1FBQ0YsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsK0JBQStCO1FBQy9CLElBQUksbUJBQXdDLENBQUM7UUFDN0MsbUJBQW1CLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLDRDQUE0QztRQUM1QywyRUFBMkU7UUFDM0UsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLHdDQUF3QztRQUN4QywrRkFBK0Y7UUFDL0YsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsb0JBQW9CLEVBQUUsZ0VBQWdFLENBQUMsQ0FBQztRQUM5SCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQywwRkFBMEY7UUFDMUYsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFDekUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2Qiw0RkFBNEY7UUFDNUYsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDbEUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6Qix5RkFBeUY7UUFDekYsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ2pFLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIscUZBQXFGO1FBRXJGLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ25DLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwRCxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUgscUVBQXFFO1FBQ3JFLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BFLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0Isb0VBQW9FO1FBQ3BFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNqRSxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLHVGQUF1RjtRQUN2RixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQyxhQUFhO1lBQ2IsSUFBSSxPQUFPLENBQUMsY0FBYyxFQUFFO2dCQUMxQix1RkFBdUY7Z0JBQ3ZGLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDaEQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDekIsbUhBQW1IO2dCQUNuSCx1REFBdUQ7Z0JBQ3ZELGFBQWE7Z0JBQ2IsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBQzNHLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDaEMsa0dBQWtHO2dCQUNsRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3pELDhGQUE4RjtvQkFDOUYsd0JBQXdCO29CQUN4QixNQUFNLE9BQU8sR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN6QjthQUNGO2lCQUFNO2dCQUNMLDBCQUEwQjtnQkFDMUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNyRCxhQUFhO2dCQUNiLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4RSxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QixPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2hDO1FBRUgsQ0FBQyxDQUFDLENBQUM7UUFDSCx3RUFBd0U7UUFDeEUsYUFBYTtRQUNiLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVEOzs7T0FHRztJQUNILGdCQUFnQixDQUFDLFNBQWM7UUFDN0IsYUFBYTtRQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFDbkQsQ0FBQztJQUVEOzs7T0FHRztJQUNILHlCQUF5QixDQUFDLElBQVM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtZQUNsQyxhQUFhO1lBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLDZDQUE2QztZQUM3QyxhQUFhO1lBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQyxjQUFjLEVBQUMsQ0FBQyxDQUFDO1FBQ3pGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGlEQUFpRDtJQUNqRCxhQUFhLENBQUMsWUFBaUIsRUFBRSxPQUFhLEVBQUUsVUFBZ0IsRUFBRSxhQUFtQjtRQUNuRixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JELElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtZQUNwQixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNyQztRQUNELElBQUksVUFBVSxLQUFLLElBQUksRUFBRTtZQUN2QixPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksYUFBYSxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsVUFBVSxDQUFDLFVBQWtCO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsb0JBQW9CO1FBQ2xCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZFLElBQUksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDL0M7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxVQUFVO1FBQ2hCLDZGQUE2RjtRQUM3RixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixzRkFBc0Y7UUFDdEYsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsOENBQThDO1FBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLHlDQUF5QztRQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RCxzR0FBc0c7WUFDdEcseURBQXlEO1lBQ3pELGFBQWE7WUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDakgsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztnQkFDekcsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7YUFDeEMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE9BQU8sQ0FBQyxtQkFBd0I7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUN0RSxDQUFDOzswRUFoVVUsYUFBYTtrREFBYixhQUFhOzs7Ozs7UUM1QjFCLDhCQUNFO1FBQUEsOEJBQ0U7UUFBQSxnQ0FDRTtRQUNBLDZCQUNBO1FBQUEsNENBSUM7UUFEa0IseUdBQVEsbUJBQWUsSUFBQztRQUMxQyxpQkFBb0I7UUFDckIsaUJBQVE7UUFFUiw2QkFDQTtRQUNBLGdGQVllO1FBRWYsK0dBU2M7UUFDZCxpQkFBUTtRQUNWLGlCQUFRO1FBQ1YsaUJBQU07UUFFTiw4QkFDRTtRQUNBLGtGQXFDZTtRQUVqQixpQkFBTTtRQUNSLGlCQUFNO1FBRU4sbUhBZ0JjOzs7UUFqR1csZUFBbUM7UUFBbkMscURBQW1DLHFDQUFBLCtCQUFBO1FBU3ZDLGVBQStDO1FBQS9DLHlFQUErQyxpQkFBQTtRQThCakQsZUFFNEI7UUFGNUIsa0dBRTRCOztrRERsQmxDLGFBQWE7Y0FOekIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDcEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7c0tBRVUsSUFBSTtrQkFBWixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNrQyxTQUFTO2tCQUFoRCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyIGJhc2ljXG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbnRlcm5hbCBpbXBvcnRcbmltcG9ydCB7R3JpZEZhY3RvcnlTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL2dyaWQtZmFjdG9yeS5zZXJ2aWNlJztcbmltcG9ydCB7R3JpZH0gZnJvbSAnLi4vbW9kZWwvZ3JpZCc7XG5pbXBvcnQge0dyaWRBY3Rpb25zTm90aWZpZXJ9IGZyb20gJy4uL3NlcnZpY2UvZ3JpZC1hY3Rpb25zLW5vdGlmaWVyJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBlbXB0eSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7TmdiUGFnaW5hdGlvbn0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwUGFyYW1zfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0dyaWRTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL2dyaWQuU2VydmljZSc7XG5pbXBvcnQge3N3aXRjaE1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1ncmlkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dyaWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ncmlkLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgZ3JpZDogR3JpZCA9IG5ldyBHcmlkKCk7XG4gIEBJbnB1dCgpIHJlZnJlc2hHcmlkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIEBWaWV3Q2hpbGQoJ3BhZ2luYXRvcicsIHtzdGF0aWM6IHRydWV9KSBwYWdpbmF0b3IhOiBOZ2JQYWdpbmF0aW9uO1xuICAvLyBnZW5lcmFsXG4gIHB1YmxpYyBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgLy8gcmVhZCBvbmx5XG4gIHJlYWRvbmx5IGZpcnN0UGFnZSA9IDE7XG4gIHJlYWRvbmx5IGRlZmF1bHRJdGVtc1BlclBhZ2UgPSAxMDtcbiAgcmVhZG9ubHkgd2l0aG91dFNvcnQgPSAnd2l0aG91dFNvcnQnO1xuXG4gIHB1YmxpYyB0SGVhZExhYmVsczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICBwdWJsaWMgdEhlYWRTb3J0Q29uZmlnOiBBcnJheTx7fT4gPSBbXTtcbiAgcHVibGljIGNvbHVtbkRhdGE6IGFueVtdID0gW107XG4gIHB1YmxpYyByb3dzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KFtdKTtcbiAgcHVibGljIGdyaWRTZXJ2aWNlOiBHcmlkU2VydmljZTxIdHRwQ2xpZW50LCB2b2lkPjtcbiAgLy8gcmVhZCBtb3JlXG4gIHB1YmxpYyByZWFkTW9yZVZhbHVlID0gW107XG4gIHB1YmxpYyByZWFkTW9yZUhlYWRlciA9IFtdO1xuICBwdWJsaWMgcmVhZE1vcmVIdG1sITogSFRNTEVsZW1lbnQ7XG4gIHB1YmxpYyBpc0NvbGxhcHNlZCA9IFtdO1xuICAvLyBsb2FkaW5nXG4gIHB1YmxpYyBkYXRhTG9hZGluZyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICAvLyBwYWdpbmF0aW9uXG4gIHB1YmxpYyBwYWdlOiBudW1iZXIgPSB0aGlzLmZpcnN0UGFnZTtcbiAgcHVibGljIHBhZ2VTaXplID0gdGhpcy5kZWZhdWx0SXRlbXNQZXJQYWdlO1xuICBwdWJsaWMgdG90YWxOdW1iZXJPZkRhdGEhOiBudW1iZXI7XG4gIHB1YmxpYyBudW1iZXJPZkRhdGFTdGFydCE6IG51bWJlcjtcbiAgcHVibGljIG51bWJlck9mRGF0YUVuZCE6IG51bWJlcjtcbiAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmITogVmlld0NvbnRhaW5lclJlZjtcbiAgcHJpdmF0ZSByZXF1ZXN0VXJsID0gJyc7XG4gIHByaXZhdGUgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgcHJpdmF0ZSByZXF1ZXN0U3ViamVjdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyaWRGYWN0b3J5U2VydmljZTogR3JpZEZhY3RvcnlTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGdyaWRBY3Rpb25zTm90aWZpZXI6IEdyaWRBY3Rpb25zTm90aWZpZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmID0gdmlld0NvbnRhaW5lclJlZjtcbiAgICB0aGlzLmdyaWRTZXJ2aWNlID0gdGhpcy5ncmlkRmFjdG9yeVNlcnZpY2UuQ3JlYXRlR3JpZFNlcnZpY2UodGhpcy5ncmlkLm1vZGVsVHlwZSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGFnZVNpemUgPSB0aGlzLmdyaWQucGFnaW5hdGlvbi5pdGVtc1BlclBhZ2U7XG4gICAgdGhpcy5yZXF1ZXN0VXJsID0gYCR7dGhpcy5ncmlkLmJhc2VVcmx9LyR7dGhpcy5ncmlkLnJlbGF0aXZlR2V0TWV0aG9kVXJsfWA7XG4gICAgdGhpcy5zZXRDb2x1bW5zKCk7XG4gICAgLy8gaW4gcGFnZSBsb2FkIHdlIGRvbnQgbmVlZCBzb3J0IHNvIG1ha2Ugc2VydmljZSBjYWxsIHdpdGhvdXQgc29ydGluZ1xuICAgIGlmICghdGhpcy5ncmlkLmRlZmF1bHRTb3J0KSB7XG4gICAgICB0aGlzLm1ha2VHcmlkU2VydmljZSh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUpO1xuICAgIH1cbiAgICB0aGlzLnNpbXBsZVNlYXJjaCgpO1xuICAgIHRoaXMucmVmcmVzaEdyaWQuc3Vic2NyaWJlKChyZXM6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgdGhpcy5tYWtlR3JpZFNlcnZpY2UodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoR3JpZC5uZXh0KGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnJlcXVlc3RTdWJqZWN0JC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKHJlcykgPT4ge1xuICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyaWRTZXJ2aWNlLmdldERhdGEodGhpcy5yZXF1ZXN0VXJsLCB0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlbXB0eSgpO1xuICAgICAgICB9KVxuICAgICAgKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICB0aGlzLmJpbmRHcmlkKHJlcyk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiB0aGlzIG1ldGhvZCBzaG91bGQgYmluZCBncmlkIHdlIGhhdmUgZGlmZmVyZW50IHNpdHVhdGlvbiB0byBiaW5kIGdyaWQgZm9yIGV4YW1wbGUgc2VhcmNoIHBhZ2luYXRpb24gYW5kLi4uXG4gICAqIHNvIHdlIGhhdmUgbWV0aG9kIGdldFxuICAgKiBAcGFyYW0gZ3JpZFJvd3MoZGF0YSlcbiAgICogYW5kIGZpbGwgdmFyaWFibGUgd2UgbmVlZFxuICAgKi9cbiAgYmluZEdyaWQoZ3JpZFJvd3M6IGFueSk6IHZvaWQge1xuICAgIC8qKlxuICAgICAqIEBtZXRob2QgbWFya0ZvckNoZWNrIGl0cyBmb3IgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgT25QdXNoXG4gICAgICovXG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLnJvd3MubmV4dChncmlkUm93cy5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpID8gZ3JpZFJvd3MuZGF0YSA6IGdyaWRSb3dzKTtcbiAgICB0aGlzLnRvdGFsTnVtYmVyT2ZEYXRhID0gZ3JpZFJvd3MudG90YWxJdGVtcztcbiAgICB0aGlzLmNhbGNQYWdpbmF0aW9uQW1vdW50KCk7XG4gICAgdGhpcy5kYXRhTG9hZGluZy5uZXh0KHRydWUpO1xuICB9XG5cblxuICAvKipcbiAgICogZ3JpZEZhY3RvcnlTZXJ2aWNlIGRlY2lkZSBhbmQgZ2VuZXJhdGUgZ3JpZCBzZXJ2aWNlXG4gICAqIEBwYXJhbSBwYWdlIHdoaWNoIHBhZ2Ugd2UgYXJlIG9uIGluXG4gICAqIEBwYXJhbSBpdGVtc1BlclBhZ2UgY291bnQgb2YgaXRlbSBpbiBlYWNoIHBhZ2VcbiAgICogQHBhcmFtIHNvcnREaXIgaWYgd2UgY2FsbCBzb3J0aW5nIGZ1bmN0aW9uIHRoZW4gd2UgaGF2ZSBzb3J0RGlyXG4gICAqIGluY2x1ZGVkIHNvcnREaXJlY3Rpb24gKGl0IGNvbnRhaW4gQVNDLCBERVNDIGFuZCB3aXRob3V0U29ydClcbiAgICogYW5kIGNvbHVtbiB3aGljaCBpcyBjb2x1bW4gbmFtZSB3ZSBtdXN0IHNvcnQgYmFzZSBvbiBpblxuICAgKi9cbiAgbWFrZUdyaWRTZXJ2aWNlKHBhZ2U/OiBudW1iZXIsIGl0ZW1zUGVyUGFnZT86IG51bWJlciwgc29ydERpcj86IGFueSk6IHZvaWQge1xuICAgIC8vIHRoaXMgcGFydCB1c2luZyBmb3IgcGFnaW5hdGlvblxuICAgIHRoaXMucGFyYW1zID0gdGhpcy5wYXJhbXMuc2V0KCdwYWdlJywgcGFnZSArICcnKS5zZXQoJ2l0ZW1zUGVyUGFnZScsIGl0ZW1zUGVyUGFnZSArICcnKTtcbiAgICAvLyB0aGlzIHBhcnQgdXNpbmcgZm9yIHNvcnRpbmdcbiAgICBpZiAoc29ydERpciAmJiBzb3J0RGlyLmNvbHVtbikge1xuICAgICAgaWYgKHNvcnREaXIuc29ydERpcmVjdGlvbiA9PT0gdGhpcy53aXRob3V0U29ydCkge1xuICAgICAgICB0aGlzLnBhcmFtcyA9IHRoaXMucGFyYW1zLmRlbGV0ZShgb3JkZXJbJHtzb3J0RGlyLmNvbHVtbn1dYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhcmFtcyA9IHRoaXMucGFyYW1zLnNldChgb3JkZXJbJHtzb3J0RGlyLmNvbHVtbn1dYCwgc29ydERpci5zb3J0RGlyZWN0aW9uICsgJycpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyB0aGlzIHBhcnQgY2FsbCByZXF1ZXN0XG4gICAgdGhpcy5yZXF1ZXN0U3ViamVjdCQubmV4dCh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBpZiB3ZSBoYXZlIHNpbXBsZSBzZWFyY2hcbiAgICogZ3JpZEFjdGlvbnNOb3RpZmllciBsaXN0ZW4gYW5kIGlmIHNvbWUgY2hhbmdlcyBoYXBwZW5lZCByZXR1cm4gbmV3IGRhdGFcbiAgICogZ2V0U2ltcGxlU2VhcmNoIGlzIG15IG5ldyBzZXJ2aWNlXG4gICAqXG4gICAqL1xuICBzaW1wbGVTZWFyY2goKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ3JpZC5zaW1wbGVTZWFyY2gpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgICAgdGhpcy5ncmlkQWN0aW9uc05vdGlmaWVyLkxpc3Rlbk9uPHN0cmluZz4oJ3NpbXBsZVNlYXJjaCcpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIHRoaXMucGFyYW1zID0gdGhpcy5wYXJhbXMuc2V0KHRoaXMuZ3JpZC5zaW1wbGVTZWFyY2gucXVlcnlQYXJhbU5hbWUsIHJlcyk7XG4gICAgICAgICAgdGhpcy5wYWdlID0gMTtcbiAgICAgICAgICB0aGlzLnBhcmFtcyA9IHRoaXMucGFyYW1zLnNldCgncGFnZScsICcxJyk7XG4gICAgICAgICAgdGhpcy5yZXF1ZXN0U3ViamVjdCQubmV4dCh0cnVlKTtcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZGF0YSByZWFkIG1vcmUgY29sdW1uIGV2ZW50IGVtaXR0ZXJcbiAgICovXG4gIHNob3dSZWFkTW9yZShkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnJlYWRNb3JlSHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgdGhpcy5yZWFkTW9yZUh0bWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhcHBlbmQtdGFibGUnKTtcbiAgICB0aGlzLnJlYWRNb3JlSHRtbC5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCBgJHsodGhpcy5ncmlkICE9IHVuZGVmaW5lZFxuICAgICAgJiYgdGhpcy5ncmlkLmNvbHVtbnMgIT0gdW5kZWZpbmVkXG4gICAgICAmJiB0aGlzLmdyaWQuY29sdW1ucy5sZW5ndGggPyB0aGlzLmdyaWQuY29sdW1ucy5sZW5ndGggOiAxKX1gXG4gICAgKTtcbiAgICB0aGlzLnJlYWRNb3JlVmFsdWUgPSBbXTtcbiAgICB0aGlzLnJlYWRNb3JlSGVhZGVyID0gW107XG4gICAgLy8gZ2V0IGVsZW1lbnQgd2hpY2ggd2UgaGF2ZSBpZFxuICAgIGxldCByZWFkTW9yZUh0bWxFbGVtZW50ITogSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIHJlYWRNb3JlSHRtbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhZC1tb3JlJyArIGRhdGEuaWQpO1xuICAgIC8vIHdlIGhhdmUgbG9vcCBpbiBjb25maWcgYW5kIHRoZW4gbWFrZSBodG1sXG4gICAgLy8gcmVhZCBtb3JlIGNvbHVtbiB0YWJsZXMgY29uZmlnIGhhdmUgMyBwcm9wZXJ0eSBoZWFkZXIgdmFsdWUgYW5kIHRlbXBsYXRlXG4gICAgdGhpcy5jcmVhdGVEYXRhRnJvbVRhYmxlQ29uZmlnKGRhdGEpO1xuICAgIC8vIGhlcmUgd2UgbXVzdCBjcmVhdGUgdGFibGUgZHluYW1pY2FsbHlcbiAgICAvLyB3ZSBuZWVkIG9uZSBkaXYgYW5kIGl0IG11c3QgaGF2ZSBpZCBhbmQgY2xhc3MgdGhlbiB3ZSBtdXN0IGFwcGVuZCBpdCB0byByZWFkIG1vcmUgSHRtbCBmaWVsZFxuICAgIGNvbnN0IGRpdiA9IHRoaXMuaHRtbEdlbmVyYXRvcignZGl2JywgJ2NoaWxkX2RhdGFfbG9jYWxfMScsICdkYXRhdGFibGUgZGF0YXRhYmxlLWRlZmF1bHQgIGRhdGF0YWJsZS1zY3JvbGwgZGF0YXRhYmxlLWxvYWRlZCcpO1xuICAgIHRoaXMucmVhZE1vcmVIdG1sLmFwcGVuZENoaWxkKGRpdik7XG4gICAgLy8gd2UgbmVlZCBvbmUgdGFibGUgYW5kIGl0IG11c3QgaGF2ZSBjbGFzcyB0aGVuIGRpdiBlbGVtZW50IHdlIG1ha2UgYmVmb3JlIG11c3QgYXBwZW5kIGl0XG4gICAgY29uc3QgdGFibGUgPSB0aGlzLmh0bWxHZW5lcmF0b3IoJ3RhYmxlJywgbnVsbCwgJ2RhdGF0YWJsZS10YWJsZSB0YWJsZScpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgLy8gd2UgbmVlZCBvbmUgdGhlYWQgYW5kIGl0IG11c3QgaGF2ZSBjbGFzcyB0aGVuIHRhYmxlIGVsZW1lbnQgd2UgbWFrZSBiZWZvcmUgbXVzdCBhcHBlbmQgaXRcbiAgICBjb25zdCB0aGVhZCA9IHRoaXMuaHRtbEdlbmVyYXRvcigndGhlYWQnLCBudWxsLCAnZGF0YXRhYmxlLWhlYWQnKTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZCh0aGVhZCk7XG4gICAgLy8gd2UgbmVlZCBvbmUgdHIgYW5kIGl0IG11c3QgaGF2ZSBjbGFzcyB0aGVuIHRoZWFkIGVsZW1lbnQgd2UgbWFrZSBiZWZvcmUgbXVzdCBhcHBlbmQgaXRcbiAgICBjb25zdCB0ckhlYWQgPSB0aGlzLmh0bWxHZW5lcmF0b3IoJ3RyJywgJ251bGwnLCAnZGF0YXRhYmxlLXJvdycpO1xuICAgIHRoZWFkLmFwcGVuZENoaWxkKHRySGVhZCk7XG4gICAgLy8gd2UgbmVlZCBtYWtlIHRkIGR5bmFtaWNhbGx5IGFuZCBsYXN0IHRyIG11c3QgYXBwZW5kIGl0IChpdCBtYWtlcyBoZWFkZXIgb2YgdGFibGUgKVxuXG4gICAgdGhpcy5yZWFkTW9yZUhlYWRlci5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICBjb25zdCB0ZEhlYWQgPSB0aGlzLmh0bWxHZW5lcmF0b3IoJ3RoJywgbnVsbCwgbnVsbCk7XG4gICAgICB0ckhlYWQuYXBwZW5kQ2hpbGQodGRIZWFkKTtcbiAgICAgIHRkSGVhZC5pbm5lclRleHQgPSBoZWFkZXI7XG4gICAgfSk7XG5cbiAgICAvLyB3ZSBuZWVkIG9uZSB0Ym9keSBhbmQgaXQgbXVzdCBoYXZlIGNsYXNzIHRoZW4gdGFibGUgbXVzdCBhcHBlbmQgaXRcbiAgICBjb25zdCB0YWJCb2R5ID0gdGhpcy5odG1sR2VuZXJhdG9yKCd0Ym9keScsIG51bGwsICdkYXRhdGFibGUtYm9keScpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRhYkJvZHkpO1xuICAgIC8vIHdlIG5lZWQgb25lIHRyIGFuZCBpdCBtdXN0IGhhdmUgY2xhc3MgdGhlbiAgdEJvZHkgIG11c3QgYXBwZW5kIGl0XG4gICAgY29uc3QgdEJvZHlSb3cgPSB0aGlzLmh0bWxHZW5lcmF0b3IoJ3RyJywgbnVsbCwgJ2RhdGF0YWJsZS1yb3cnKTtcbiAgICB0YWJCb2R5LmFwcGVuZENoaWxkKHRCb2R5Um93KTtcbiAgICAvLyB3ZSBuZWVkIG1ha2UgdGQgZHluYW1pY2FsbHkgYW5kIGxhc3QgdHIgbXVzdCBhcHBlbmQgaXQgKGl0IG1ha2VzIHZhbHVlIHRyIG9mIHRhYmxlIClcbiAgICB0aGlzLnJlYWRNb3JlVmFsdWUuZm9yRWFjaChyb3dJdGVtID0+IHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGlmIChyb3dJdGVtLmN1c3RvbVRlbXBsYXRlKSB7XG4gICAgICAgIC8vIHdlIG5lZWQgbWFrZSB0ZCBkeW5hbWljYWxseSBhbmQgbGFzdCB0ciBtdXN0IGFwcGVuZCBpdCAoaXQgbWFrZXMgdmFsdWUgdHIgb2YgdGFibGUgKVxuICAgICAgICBjb25zdCB0ZCA9IHRoaXMuaHRtbEdlbmVyYXRvcigndGQnLCBudWxsLCBudWxsKTtcbiAgICAgICAgdEJvZHlSb3cuYXBwZW5kQ2hpbGQodGQpO1xuICAgICAgICAvLyB3ZSBoYXZlIGN1c3RvbSB0ZW1wbGF0ZSB0aGlzIHBhcnQgYW5kIHdlIG5lZWQgcmVhZCBpdCBmcm9tIHJlYWQgbW9yZSBjb25maWcgc28gd2UgbmVlZCB0byB1c2UgY3JlYXRlRW1iZWRkZWRWaWV3XG4gICAgICAgIC8vIHdlIGRldGVjdENoYW5nZXMgaXQgZm9yIGNvbmZpZGVuY2UgKGl0IG11c3QgYmUgc2FmZSlcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBlbWJlZGRlZFZpZXdSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHJvd0l0ZW0uY3VzdG9tVGVtcGxhdGUsIHtyb3c6IGRhdGEuZGF0YX0pO1xuICAgICAgICBlbWJlZGRlZFZpZXdSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAvLyBoZXJlIHdlIGhhdmUgZW1iZWRkZWRWaWV3UmVmIGFuZCBpdCBjYW4gYmUgaGF2ZSBtb3JlIHRoYW4gb25lIG5vZGUgc28gd2UgbmVlZCB0byBoYXZlIGZvciBvbiBpdFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVtYmVkZGVkVmlld1JlZi5yb290Tm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAvLyB3ZSBoYXZlIDIgY29uZGl0aW9uIGhlcmUgMS1oYXZlIHRlbXBsYXRlIDItZG9udCBoYXZlIChzaW1wbGUgdmFsdWUgd2UgcmVhZCBzaW1wbHkgZnJvbSByZXEpXG4gICAgICAgICAgLy8gaGVyZSB3ZSBoYXZlIHRlbXBsYXRlXG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVtYmVkZGVkVmlld1JlZi5yb290Tm9kZXNbaV07XG4gICAgICAgICAgdGQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGhlcmUgZG9udCBoYXZlIHRlbXBsYXRlXG4gICAgICAgIGNvbnN0IHZhbHVlVGQgPSB0aGlzLmh0bWxHZW5lcmF0b3IoJ3RkJywgbnVsbCwgbnVsbCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3Qgc3BhblZhbHVlID0gdGhpcy5odG1sR2VuZXJhdG9yKCdzcGFuJywgbnVsbCwgbnVsbCwgcm93SXRlbS52YWx1ZSk7XG4gICAgICAgIHRCb2R5Um93LmFwcGVuZENoaWxkKHZhbHVlVGQpO1xuICAgICAgICB2YWx1ZVRkLmFwcGVuZENoaWxkKHNwYW5WYWx1ZSk7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgICAvLyBoZXJlIHdlIGFwcGVuZCBhbGwgZWxlbWVudCB3ZSBtYWtlIGJlZm9yZSBiZWZvcmUgZW5kIHNlbGVjdGVkIGVsZW1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmVhZE1vcmVIdG1sRWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIHRoaXMucmVhZE1vcmVIdG1sKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gY29sbGFwc2VkIG9iamVjdHtpZDpudW1iZXIsc3RhdGU6Ym9vbGVhbn1cbiAgICovXG4gIHRyaWdnZXJDb2xsYXBzZWQoY29sbGFwc2VkOiBhbnkpOiB2b2lkIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdGhpcy5pc0NvbGxhcHNlZFtjb2xsYXBzZWQuaWRdID0gY29sbGFwc2VkLnN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqL1xuICBjcmVhdGVEYXRhRnJvbVRhYmxlQ29uZmlnKGRhdGE6IGFueSk6IHZvaWQge1xuICAgIGRhdGEudGFibGVDb25maWcuZm9yRWFjaCgoaTogYW55KSA9PiB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLnJlYWRNb3JlSGVhZGVyLnB1c2goaS5oZWFkZXIpO1xuICAgICAgLy8gcmVhZCBtb3JlIHZhbHVlIGNvbnRhaW4gdmFsdWUgYW5kIHRlbXBsYXRlXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLnJlYWRNb3JlVmFsdWUucHVzaCh7dmFsdWU6IGRhdGEuZGF0YVtpLnZhbHVlXSwgY3VzdG9tVGVtcGxhdGU6IGkuY3VzdG9tVGVtcGxhdGV9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBpdHMgbmVlZCBmb3Igc2hvd1JlYWRNb3JlIG1ldGhvZFxuICAgKiBAcGFyYW0gX2VsZW1lbnROYW1lIHRhZyBuYW1lXG4gICAqIEBwYXJhbSBfaWROYW1lIGlmIHdlIGhhdmUgaWRcbiAgICogQHBhcmFtIF9jbGFzc05hbWUgaWYgd2UgaGF2ZSBjbGFzc1xuICAgKiBAcGFyYW0gX2VsZW1lbnRWYWx1ZSBpZiB3ZSBoYXZlIHZhbHVlIGZvciBlbGVtZW50XG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZSB0eXBlZGVmXG4gIGh0bWxHZW5lcmF0b3IoX2VsZW1lbnROYW1lOiBhbnksIF9pZE5hbWU/OiBhbnksIF9jbGFzc05hbWU/OiBhbnksIF9lbGVtZW50VmFsdWU/OiBhbnkpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChfZWxlbWVudE5hbWUpO1xuICAgIGlmIChfaWROYW1lICE9PSBudWxsKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBfaWROYW1lKTtcbiAgICB9XG4gICAgaWYgKF9jbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIF9jbGFzc05hbWUpO1xuICAgIH1cbiAgICBpZiAoX2VsZW1lbnRWYWx1ZSkge1xuICAgICAgZWxlbWVudC5pbm5lclRleHQgPSBfZWxlbWVudFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHBhZ2VOdW1iZXIgcGFnZSBudW1iZXJcbiAgICogY2FsY1BhZ2luYXRpb25BbW91bnRcbiAgICovXG4gIGNoYW5nZVBhZ2UocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlID0gcGFnZU51bWJlcjtcbiAgICB0aGlzLm1ha2VHcmlkU2VydmljZSh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUpO1xuICAgIHRoaXMuY2FsY1BhZ2luYXRpb25BbW91bnQoKTtcbiAgfVxuXG4gIC8qKipcbiAgICogaXRzIGNhbGN1bGF0ZSB3aGljaCBkYXRhIGlzIGFjdGl2ZSBub3cgZnJvbSAuLiB0by4uLlxuICAgKi9cbiAgY2FsY1BhZ2luYXRpb25BbW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5udW1iZXJPZkRhdGFTdGFydCA9ICh0aGlzLnBhZ2UgLSAxKSAqIHRoaXMucGFnZVNpemUgKyAxO1xuICAgIHRoaXMubnVtYmVyT2ZEYXRhRW5kID0gKHRoaXMucGFnZSAtIDEpICogdGhpcy5wYWdlU2l6ZSArIHRoaXMucGFnZVNpemU7XG4gICAgaWYgKHRoaXMubnVtYmVyT2ZEYXRhRW5kID4gdGhpcy50b3RhbE51bWJlck9mRGF0YSkge1xuICAgICAgdGhpcy5udW1iZXJPZkRhdGFFbmQgPSB0aGlzLnRvdGFsTnVtYmVyT2ZEYXRhO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRDb2x1bW5zXG4gICAqIGhlYWRlclRhYmxlQ2VsbHMgYW5kIGVhY2ggcm93IGRhdGFcbiAgICogd2UgaGF2ZSBhcnJheSBAdHlwZSBzdHJpbmdcbiAgICogaXQgbWFrZSBoZWFkZXIgYW5kIHJvdyBkYXRhIHdpdGggZ3JpZCBASW5wdXRcbiAgICovXG4gIHByaXZhdGUgc2V0Q29sdW1ucygpOiB2b2lkIHtcbiAgICAvLyBoZWFkZXJUYWJsZUNlbGxzIGhhdmUgdG8ga2VlcCBhbGwgdGhlYWQgbmFtZSB3aGljaCBpcyBsYWJlbCB1bmQgdXNlciBzZXQgaXQgaW4gZ3JpZCBjb25maWdcbiAgICB0aGlzLnRIZWFkTGFiZWxzID0gW107XG4gICAgLy8gdEhlYWRTb3J0Q29uZmlnIGhhdmUgdG8ga2VlcCBhbGwgdGhlYWQgdmFsdWUgKGRhdGFiYXNlIG5hbWUgOikpIGFuZCBzb3J0YWJsZSBzdGF0dXNcbiAgICB0aGlzLnRIZWFkU29ydENvbmZpZyA9IFtdO1xuICAgIC8vIHdlIHVzZSB2YWx1ZSBhbmQgZmlsbCB0YWJsZSB3aXRoIGNvbHVtbkRhdGFcbiAgICB0aGlzLmNvbHVtbkRhdGEgPSBbXTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmlkLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuY29sdW1uRGF0YS5wdXNoKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZ3JpZC5jb2x1bW5zW2ldKSk7XG4gICAgICAvLyBkaXNhYmxlSGVhZGVyVGFibGVDZWxsIGlzIGxpdHRsZSBiaXQgdHJpY2t5IDopIHdlIGNhbiBkaXNhYmxlIHRoZWFkIGFuZCB3ZSBjYW4gaGlkZSBpdCBmcm9tIHVzZXIgc29cbiAgICAgIC8vIHdoZW4gd2UgaGF2ZSB0aGlzIHByb3BlcnR5IHdlIGFkZCBlbXB0eSB2YWx1ZSBpbiBhcnJheVxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgdGhpcy50SGVhZExhYmVscy5wdXNoKCh0aGlzLmdyaWQuY29sdW1uc1tpXS5kaXNhYmxlSGVhZGVyVGFibGVDZWxsKSA/ICcnIDogdGhpcy5ncmlkLmNvbHVtbnNbaV0uaGVhZGVyVGFibGVDZWxsKTtcbiAgICAgIHRoaXMudEhlYWRTb3J0Q29uZmlnLnB1c2goe1xuICAgICAgICB2YWx1ZTogdGhpcy5ncmlkLmNvbHVtbnNbaV0uc29ydGFibGVOYW1lID8gdGhpcy5ncmlkLmNvbHVtbnNbaV0uc29ydGFibGVOYW1lIDogdGhpcy5ncmlkLmNvbHVtbnNbaV0udmFsdWUsXG4gICAgICAgIHNvcnRhYmxlOiB0aGlzLmdyaWQuY29sdW1uc1tpXS5zb3J0QWJsZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBzb3J0RGlyZWN0aW9uQ29uZmlnIGluY2x1ZGVkIHNvcnREaXJlY3Rpb24gKGl0IGNvbnRhaW4gQVNDLCBERVNDIGFuZCB3aXRob3V0U29ydClcbiAgICogYW5kIGNvbHVtbiB3aGljaCBpcyBjb2x1bW4gbmFtZSB3ZSBtdXN0IHNvcnQgYmFzZSBvbiBpblxuICAgKi9cbiAgc29ydGluZyhzb3J0RGlyZWN0aW9uQ29uZmlnOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1ha2VHcmlkU2VydmljZSh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHNvcnREaXJlY3Rpb25Db25maWcpO1xuICB9XG59XG5cblxuIiwiPCEtLSBiZWdpbjpUYWJsZSAtLT5cbjxkaXYgY2xhc3M9XCJhbmd1bGFyLWJvb3RzdHJhcC10YWJsZVwiPlxuICA8ZGl2IGNsYXNzPVwidGFibGUtYm94IHRhYmxlLXJlc3BvbnNpdmVcIj5cbiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1oZWFkLWN1c3RvbSB0YWJsZS12ZXJ0aWNhbC1jZW50ZXIgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgPCEtLWJlZ2luOmhlYWRlci0tPlxuICAgICAgPHRoZWFkPlxuICAgICAgPGhlYWRlci10YWJsZS1jZWxsIFt0aGVhZFNvcnRDb25maWddPVwidEhlYWRTb3J0Q29uZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbZGVmYXVsdFNvcnRdPVwiZ3JpZC5kZWZhdWx0U29ydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW3RoZWFkTGFiZWxdPVwidEhlYWRMYWJlbHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIChzb3J0KT1cInNvcnRpbmcoJGV2ZW50KVwiXG4gICAgICA+PC9oZWFkZXItdGFibGUtY2VsbD5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8IS0tZW5kOmhlYWRlci0tPlxuICAgICAgPHRib2R5PlxuICAgICAgPCEtLXJvdy0tPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGFMb2FkaW5nLnZhbHVlICYmIHJvd3MudmFsdWUubGVuZ3RoPjA7ZWxzZSBub0RhdGFcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcm93SXRlbXMgb2Ygcm93cyB8IGFzeW5jO2xldCBpbmRleD1pbmRleFwiPlxuICAgICAgICAgIDx0ciBbbmdDbGFzc109XCJyb3dJdGVtc3xSb3dDbGFzc0NhbGxiYWNrOmdyaWQucm93Q2xhc3NDYWxsYmFja1wiPlxuICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCByb3dJdGVtIG9mIGNvbHVtbkRhdGFcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIkNvbHVtblRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDp7dmFsdWU6cm93SXRlbXN8bmVzdGVkSnNvbjpyb3dJdGVtLnZhbHVlLHJvdzpyb3dJdGVtLGNvbHVtbjpyb3dJdGVtc31cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8IS0tY29sbGFwc2VkIHJlZCBNb3JlIGNvbnRleHQtLT5cbiAgICAgICAgICA8dHIgW25nYkNvbGxhcHNlXT1cIiFpc0NvbGxhcHNlZFtyb3dJdGVtc1snaWQnXV1cIlxuICAgICAgICAgICAgICBbaWRdPVwicm93SXRlbXMmJnJvd0l0ZW1zWydpZCddPydyZWFkLW1vcmUnK3Jvd0l0ZW1zWydpZCddOicnXCI+PC90cj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwhLS0gd2hlbiB3ZSBoYXZlIG5vIGRhdGEtLT5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjbm9EYXRhPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm8tZGF0YSB0ZXh0LWNlbnRlciBwLTVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1wcmltYXJ5XCIgcm9sZT1cInN0YXR1c1wiICpuZ0lmPVwiIWRhdGFMb2FkaW5nLnZhbHVlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwICpuZ0lmPVwicm93cy52YWx1ZS5sZW5ndGg9PTAgJiYgZGF0YUxvYWRpbmcudmFsdWVcIj5cbiAgICAgICAgICAgIHt7Z3JpZC5ub0RhdGFNZXNzYWdlfX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgPC9kaXY+XG4gIDwhLS0gZW5kOiBUYWJsZSAtLT5cbiAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tYm94XCI+XG4gICAgPCEtLSBiZWdpbjpwYWdpbmF0aW9uIC0tPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhTG9hZGluZy52YWx1ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQucGFnaW5hdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzLnZhbHVlLmxlbmd0aCE9PTBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggbXQtMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibXItYXV0byBkYXRhdGFibGUtcGFnZXJcIj5cbiAgICAgICAgICA8bmdiLXBhZ2luYXRpb24gW2NvbGxlY3Rpb25TaXplXT1cInRvdGFsTnVtYmVyT2ZEYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWyhwYWdlKV09XCJwYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgI3BhZ2luYXRvclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbcGFnZVNpemVdPVwicGFnZVNpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbbWF4U2l6ZV09XCJncmlkLnBhZ2luYXRpb24ubWF4U2l6ZT9ncmlkLnBhZ2luYXRpb24ubWF4U2l6ZTo1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3JvdGF0ZV09XCJncmlkLnBhZ2luYXRpb24ucm90YXRlP2dyaWQucGFnaW5hdGlvbi5yb3RhdGU6dHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtib3VuZGFyeUxpbmtzXT1cImdyaWQucGFnaW5hdGlvbi5ib3VuZGFyeUxpbmtzP2dyaWQucGFnaW5hdGlvbi5ib3VuZGFyeUxpbmtzOmZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHBhZ2VDaGFuZ2UpPVwiY2hhbmdlUGFnZSgkZXZlbnQpXCI+XG4gICAgICAgICAgPC9uZ2ItcGFnaW5hdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gYmVnaW46cGFnaW5hdGlvbiBpdGVtIHBlciBwYWdlIHNlbGVjdG9yIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LXBhZ2luYXRpb25cIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ3JpZC5wYWdpbmF0aW9uLml0ZW1QZXJQYWdlU2VsZWN0b3JPcHRpb25cbiAgICAgICAgICAgICAgICYmIGdyaWQucGFnaW5hdGlvbi5pdGVtUGVyUGFnZVNlbGVjdG9yT3B0aW9uLmxlbmd0aD4wXCI+XG4gICAgICAgICAgICA8bmctc2VsZWN0IFtpdGVtc109XCJncmlkLnBhZ2luYXRpb24uaXRlbVBlclBhZ2VTZWxlY3Rvck9wdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgIGJpbmRMYWJlbD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICBbc2VhcmNoYWJsZV09XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtjbGVhcmFibGVdPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cImNoYW5nZVBhZ2UoZmlyc3RQYWdlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGNpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInBhZ2VTaXplXCI+XG4gICAgICAgICAgICA8L25nLXNlbGVjdD5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gZW5kOnBhZ2luYXRpb24gaXRlbSBwZXIgcGFnZSBzZWxlY3RvciAtLT5cbiAgICAgICAgPCEtLSBiZWdpbjpkYXRhIGluZm9ybWF0aW9uIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWwtMiBtdC0xIHBhZ2luYXRlLWRldGFpbFwiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIiFncmlkLnBhZ2luYXRpb24uaGFzT3duUHJvcGVydHkoJ2Rpc2FibGVOdW1iZXJPZkRhdGEnKSB8fCAhZ3JpZC5wYWdpbmF0aW9uLmRpc2FibGVOdW1iZXJPZkRhdGFcIlxuICAgICAgICAgICAgICBjbGFzcz1cInBhZ2luYXRpb24tZGF0YS1pbmZvXCI+e3snU2hvd2luZyAnICsgbnVtYmVyT2ZEYXRhU3RhcnQgKyAnIC0gJyArIG51bWJlck9mRGF0YUVuZCArICcgb2YgJyArIHRvdGFsTnVtYmVyT2ZEYXRhfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIGVuZDpkYXRhIGluZm9ybWF0aW9uIC0tPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPCEtLSBlbmQ6cGFnaW5hdGlvbiAtLT5cbiAgPC9kaXY+XG48L2Rpdj5cbjwhLS1zdGFydDpjb2x1bW5UZW1wbGF0ZSAtLT5cbjxuZy10ZW1wbGF0ZSAjQ29sdW1uVGVtcGxhdGUgbGV0LXJvdz1cInJvd1wiIGxldC12YWx1ZT1cInZhbHVlXCIgbGV0LWNvbHVtbj1cImNvbHVtblwiPlxuICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJyb3cudHlwZVwiPlxuICAgIDx0ZXh0LWNvbHVtbiAqbmdTd2l0Y2hDYXNlPVwiJ1RleHQnXCIgW3ZhbHVlXT1cInZhbHVlXCIgW3Jvd109XCJyb3dcIj48L3RleHQtY29sdW1uPlxuICAgIDxib29sZWFuLWNvbHVtbiAqbmdTd2l0Y2hDYXNlPVwiJ0Jvb2xlYW4nXCIgW3ZhbHVlXT1cInZhbHVlXCIgW3Jvd109XCJyb3dcIj48L2Jvb2xlYW4tY29sdW1uPlxuICAgIDxpbWFnZS1jb2x1bW4gKm5nU3dpdGNoQ2FzZT1cIidJbWFnZSdcIiBbdmFsdWVdPVwidmFsdWVcIiBbcm93XT1cInJvd1wiPjwvaW1hZ2UtY29sdW1uPlxuICAgIDxpY29uLWNvbHVtbiAqbmdTd2l0Y2hDYXNlPVwiJ0ljb24nXCIgW3ZhbHVlXT1cInZhbHVlXCIgW3Jvd109XCJyb3dcIj48L2ljb24tY29sdW1uPlxuICAgIDxjdXN0b20tY29sdW1uICpuZ1N3aXRjaENhc2U9XCInQ3VzdG9tJ1wiIFt2YWx1ZV09XCJ2YWx1ZVwiIFtyb3ddPVwicm93XCIgW2NvbHVtbl09XCJjb2x1bW5cIj48L2N1c3RvbS1jb2x1bW4+XG4gICAgPGRhdGUtY29sdW1uICpuZ1N3aXRjaENhc2U9XCInRGF0ZSdcIiBbdmFsdWVdPVwidmFsdWVcIiBbcm93XT1cInJvd1wiPjwvZGF0ZS1jb2x1bW4+XG4gICAgPHN0YXR1cy1jb2x1bW4gKm5nU3dpdGNoQ2FzZT1cIidTdGF0dXMnXCIgW3ZhbHVlXT1cInZhbHVlXCIgW3Jvd109XCJyb3dcIj48L3N0YXR1cy1jb2x1bW4+XG4gICAgPGFjdGlvbi1jb2x1bW4gKm5nU3dpdGNoQ2FzZT1cIidBY3Rpb24nXCIgW3ZhbHVlXT1cInZhbHVlXCIgW3Jvd109XCJyb3dcIiBbY29sdW1uXT1cImNvbHVtblwiPjwvYWN0aW9uLWNvbHVtbj5cbiAgICA8bGluay1jb2x1bW4gKm5nU3dpdGNoQ2FzZT1cIidMaW5rJ1wiIFt2YWx1ZV09XCJ2YWx1ZVwiIFtyb3ddPVwicm93XCIgW2NvbHVtbl09XCJjb2x1bW5cIj48L2xpbmstY29sdW1uPlxuICAgIDxyZWFkLW1vcmUtY29sdW1uICpuZ1N3aXRjaENhc2U9XCInUmVhZE1vcmUnXCIgW3ZhbHVlXT1cInZhbHVlXCIgW2NvbHVtbl09XCJjb2x1bW5cIiBbcm93XT1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgKHJlYWRNb3JlRGF0YSk9XCJzaG93UmVhZE1vcmUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgKGNvbGxhcHNlZE5vdGlmaWVyKT1cInRoaXMudHJpZ2dlckNvbGxhcHNlZCgkZXZlbnQpXCJcbiAgICA+PC9yZWFkLW1vcmUtY29sdW1uPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvbmctdGVtcGxhdGU+XG48IS0tICBlbmQ6IGNvbHVtblRlbXBsYXRlIC0tPlxuXG4iXX0=