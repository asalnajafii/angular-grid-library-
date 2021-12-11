import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵelementContainer, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, ɵɵtemplate, ɵɵreference, ɵɵadvance, ɵɵproperty, ɵɵpureFunction1, ɵɵtextInterpolate1, ɵɵpureFunction3, ɵɵelement, ɵɵelementContainerStart, ɵɵtemplateRefExtractor, ɵɵelementContainerEnd, EventEmitter, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, Component, ViewChildren, Input, Output, ɵɵtextInterpolate, ɵɵclassMapInterpolate1, ɵɵpropertyInterpolate, ɵɵsanitizeUrl, ɵɵdefinePipe, Pipe, ɵɵpipe, ɵɵpipeBind2, ɵɵclassMap, ɵɵpipeBind1, ɵɵpureFunction2, ɵɵdirectiveInject, ɵɵstaticViewQuery, ViewChild, ChangeDetectorRef, ViewContainerRef, ViewEncapsulation, ɵɵdefineDirective, Directive, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { Subject, BehaviorSubject, Subscription, empty, fromEvent, timer } from 'rxjs';
import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { filter, map, take, switchMap, debounceTime, debounce, distinctUntilChanged } from 'rxjs/operators';
import { NgForOf, NgIf, NgClass, NgTemplateOutlet, NgStyle, DatePipe, NgSwitch, NgSwitchCase, AsyncPipe, CommonModule } from '@angular/common';
import { NgbCollapse, NgbPagination, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { NgControlStatus, NgModel, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, DefaultValueAccessor, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipDirective, TooltipModule } from 'ngx-bootstrap/tooltip';
import * as moment from 'moment';
import { BsDropdownDirective, BsDropdownToggleDirective, BsDropdownMenuDirective, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { get } from 'lodash';

/**
 * Column:array of columns
 * modelType:we need model for get data from grid service
 * baseUrl: is api base url
 * simpleSearch: grid can have simple search so we need som config for it
 * rowClassCallback it access to all row data to check it of we need and add custom class for each tr
 *
 */
class Grid {
    constructor() {
        this.columns = [];
        this.modelType = '';
        this.baseUrl = '';
        this.relativeGetMethodUrl = '';
        this.page = 1;
        this.noDataMessage = 'There is no data.';
    }
}

class GridService {
    constructor(http) {
        this.http = http;
    }
    /**
     *
     * @param apiAddress
     * @param params
     */
    getData(apiAddress, params) {
        return this.http.get(apiAddress, { params });
    }
    /**
     *
     * @param apiAddress
     * @param body
     */
    postData(apiAddress, body) {
        return this.http.post(apiAddress, body);
    }
}

class GridFactoryService {
    constructor(http) {
        this.http = http;
    }
    /**
     *
     * @param resourceName
     * @constructor
     */
    CreateGridService(resourceName) {
        return new GridService(this.http);
    }
}
GridFactoryService.ɵfac = function GridFactoryService_Factory(t) { return new (t || GridFactoryService)(ɵɵinject(HttpClient)); };
GridFactoryService.ɵprov = ɵɵdefineInjectable({ token: GridFactoryService, factory: GridFactoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GridFactoryService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: HttpClient }]; }, null); })();

class GridActionsNotifier {
    constructor() {
        this.broadcastEvent = new Subject();
    }
    broadcast(key, data) {
        this.broadcastEvent.next({ key, data });
    }
    ListenOn(key) {
        return this.broadcastEvent.asObservable()
            .pipe(filter(event => event.key === key), map(event => event.data));
    }
}
GridActionsNotifier.ɵfac = function GridActionsNotifier_Factory(t) { return new (t || GridActionsNotifier)(); };
GridActionsNotifier.ɵprov = ɵɵdefineInjectable({ token: GridActionsNotifier, factory: GridActionsNotifier.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GridActionsNotifier, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

var SortOrder;
(function (SortOrder) {
    SortOrder["ASC"] = "ASC";
    SortOrder["DESC"] = "DESC";
    SortOrder["withoutSort"] = "withoutSort";
})(SortOrder || (SortOrder = {}));

const _c0 = ["sortingList"];
function HeaderTableCellComponent_ng_container_0_th_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c1 = function (a0) { return { "sorting-start": a0 }; };
const _c2 = function (a0, a1, a2) { return { index: a0, sortableStatus: a1, sortColumnValue: a2 }; };
function HeaderTableCellComponent_ng_container_0_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "th");
    ɵɵelementStart(1, "div", 4, 5);
    ɵɵlistener("click", function HeaderTableCellComponent_ng_container_0_th_1_Template_div_click_1_listener() { ɵɵrestoreView(_r12); const index_r4 = ɵɵnextContext().index; const ctx_r10 = ɵɵnextContext(); return ctx_r10.onSortClick(index_r4); });
    ɵɵelementStart(3, "div", 6);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵtemplate(5, HeaderTableCellComponent_ng_container_0_th_1_ng_container_5_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵɵnextContext();
    const index_r4 = ctx_r13.index;
    const tHead_r3 = ctx_r13.$implicit;
    const ctx_r5 = ɵɵnextContext();
    const _r1 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c1, ctx_r5.isSortingStart && ctx_r5.isSortingStart[index_r4]));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", tHead_r3, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵɵpureFunction3(6, _c2, index_r4, ctx_r5.theadSortConfig[index_r4]["sortable"], ctx_r5.theadSortConfig[index_r4]["value"]));
} }
function HeaderTableCellComponent_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "th", 8);
} }
function HeaderTableCellComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, HeaderTableCellComponent_ng_container_0_th_1_Template, 6, 10, "th", 2);
    ɵɵtemplate(2, HeaderTableCellComponent_ng_container_0_ng_template_2_Template, 1, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const tHead_r3 = ctx.$implicit;
    const _r6 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", tHead_r3 !== "")("ngIfElse", _r6);
} }
function HeaderTableCellComponent_ng_template_1_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "i", 12);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r18.defaultSort.sortDir === ctx_r18.sortDir ? "fa-long-arrow-down" : "fa-long-arrow-up");
} }
function HeaderTableCellComponent_ng_template_1_ng_container_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 13);
} }
function HeaderTableCellComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 10);
    ɵɵtemplate(2, HeaderTableCellComponent_ng_template_1_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 2);
    ɵɵtemplate(3, HeaderTableCellComponent_ng_template_1_ng_container_0_ng_template_3_Template, 1, 0, "ng-template", null, 11, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r19 = ɵɵreference(4);
    const sortColumnValue_r16 = ɵɵnextContext().sortColumnValue;
    const ctx_r17 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r17.defaultSort && sortColumnValue_r16 === ctx_r17.defaultSort.sortColumn)("ngIfElse", _r19);
} }
function HeaderTableCellComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, HeaderTableCellComponent_ng_template_1_ng_container_0_Template, 5, 2, "ng-container", 9);
} if (rf & 2) {
    const sortableStatus_r15 = ctx.sortableStatus;
    ɵɵproperty("ngIf", sortableStatus_r15 !== false);
} }
class HeaderTableCellComponent {
    constructor() {
        this.theadLabel = [];
        this.theadSortConfig = [];
        this.sort = new EventEmitter();
        // default value for sorting is DEC
        this.sortDir = SortOrder.DESC;
        this.isSortingStart = [];
    }
    ngOnInit() {
        if (this.defaultSort) {
            this.sort.emit({ sortDirection: this.defaultSort.sortDir, column: this.defaultSort.sortColumn });
        }
    }
    onSortClick(index) {
        // TODO :default value must be have sorting-start class
        // Todo : class name must be set by user
        // we need to have array of sorting element
        const sortingList = this.sortingList.toArray();
        // we have disableHeader, in sortingList we dont count disable one so i need to counting index
        const disableCount = this.theadLabel.length - sortingList.length;
        const filterIcon = sortingList[index - disableCount].nativeElement.querySelector('.filter-icon');
        // we have situation to disable sorting so we need to check filterIcon
        if (filterIcon) {
            const filterIconClassList = filterIcon.classList;
            if (filterIconClassList.contains('fa-sort-alt')) {
                // @ts-ignore
                this.isSortingStart[index] = true;
                this.sortDir = SortOrder.DESC;
                filterIconClassList.remove('fa-sort-alt');
                filterIconClassList.add('fa-long-arrow-down');
            }
            else if (filterIconClassList.contains('fa-long-arrow-down')) {
                // @ts-ignore
                this.isSortingStart[index] = true;
                this.sortDir = SortOrder.ASC;
                filterIconClassList.remove('fa-long-arrow-down');
                filterIconClassList.add('fa-long-arrow-up');
            }
            else {
                // @ts-ignore
                this.isSortingStart[index] = false;
                this.sortDir = SortOrder.withoutSort;
                filterIconClassList.remove('fa-long-arrow-up');
                filterIconClassList.add('fa-sort-alt');
            }
            // we send req with sort eventEmitter
            this.sort.emit({ sortDirection: this.sortDir, column: this.theadSortConfig[index].value });
        }
    }
}
HeaderTableCellComponent.ɵfac = function HeaderTableCellComponent_Factory(t) { return new (t || HeaderTableCellComponent)(); };
HeaderTableCellComponent.ɵcmp = ɵɵdefineComponent({ type: HeaderTableCellComponent, selectors: [["header-table-cell"]], viewQuery: function HeaderTableCellComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sortingList = _t);
    } }, inputs: { theadLabel: "theadLabel", theadSortConfig: "theadSortConfig", defaultSort: "defaultSort" }, outputs: { sort: "sort" }, decls: 3, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["sortingIcon", ""], [4, "ngIf", "ngIfElse"], ["disableHeader", ""], [1, "d-flex", 3, "ngClass", "click"], ["sortingList", ""], [1, "mr-auto", "title-header"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "disable-header"], [4, "ngIf"], [1, "filter-box"], ["haveNoDefault", ""], [1, "filter-icon", "fal", 3, "ngClass"], [1, "filter-icon", "fal", "fa-sort-alt"]], template: function HeaderTableCellComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, HeaderTableCellComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        ɵɵtemplate(1, HeaderTableCellComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.theadLabel);
    } }, directives: [NgForOf, NgIf, NgClass, NgTemplateOutlet], styles: ["header-table-cell{display:table-row}  .filter-icon{cursor:pointer;height:20px;width:20px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HeaderTableCellComponent, [{
        type: Component,
        args: [{
                selector: 'header-table-cell',
                templateUrl: './header-table-cell.component.html',
                styleUrls: ['./header-table-cell.component.css']
            }]
    }], null, { sortingList: [{
            type: ViewChildren,
            args: ['sortingList']
        }], theadLabel: [{
            type: Input
        }], theadSortConfig: [{
            type: Input
        }], defaultSort: [{
            type: Input
        }], sort: [{
            type: Output
        }] }); })();

class TextColumnComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
TextColumnComponent.ɵfac = function TextColumnComponent_Factory(t) { return new (t || TextColumnComponent)(); };
TextColumnComponent.ɵcmp = ɵɵdefineComponent({ type: TextColumnComponent, selectors: [["text-column"]], inputs: { value: "value", row: "row" }, decls: 2, vars: 1, template: function TextColumnComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span");
        ɵɵtext(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ctx.value, "\n");
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TextColumnComponent, [{
        type: Component,
        args: [{
                selector: 'text-column',
                templateUrl: './text-column.component.html',
                styleUrls: ['./text-column.component.css']
            }]
    }], function () { return []; }, { value: [{
            type: Input,
            args: ['value']
        }], row: [{
            type: Input,
            args: ['row']
        }] }); })();

class BooleanColumnComponent {
    constructor() { }
    ngOnInit() {
    }
}
BooleanColumnComponent.ɵfac = function BooleanColumnComponent_Factory(t) { return new (t || BooleanColumnComponent)(); };
BooleanColumnComponent.ɵcmp = ɵɵdefineComponent({ type: BooleanColumnComponent, selectors: [["boolean-column"]], inputs: { value: "value", row: "row" }, decls: 2, vars: 1, template: function BooleanColumnComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span");
        ɵɵtext(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate(ctx.value);
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BooleanColumnComponent, [{
        type: Component,
        args: [{
                selector: 'boolean-column',
                templateUrl: './boolean-column.component.html',
                styleUrls: ['./boolean-column.component.css']
            }]
    }], function () { return []; }, { value: [{
            type: Input,
            args: ['value']
        }], row: [{
            type: Input,
            args: ['row']
        }] }); })();

const _c0$1 = function (a0) { return { "max-width.px": a0 }; };
class ImageColumnComponent {
    constructor() {
        this.styles = {};
    }
    ngOnInit() {
    }
}
ImageColumnComponent.ɵfac = function ImageColumnComponent_Factory(t) { return new (t || ImageColumnComponent)(); };
ImageColumnComponent.ɵcmp = ɵɵdefineComponent({ type: ImageColumnComponent, selectors: [["image-column"]], inputs: { value: "value", row: "row" }, decls: 1, vars: 9, consts: [[3, "src", "alt", "ngClass", "ngStyle"]], template: function ImageColumnComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "img", 0);
    } if (rf & 2) {
        ɵɵclassMapInterpolate1("img-thumbnail ", "float-" + ctx.row.float, "");
        ɵɵpropertyInterpolate("src", ctx.value, ɵɵsanitizeUrl);
        ɵɵpropertyInterpolate("alt", ctx.row.alt);
        ɵɵproperty("ngClass", ctx.row.customClass ? ctx.row.customClass : "")("ngStyle", ɵɵpureFunction1(7, _c0$1, ctx.row.maxWidth));
    } }, directives: [NgClass, NgStyle], styles: [".float-none[_ngcontent-%COMP%]{display:block!important;margin-left:auto!important;margin-right:auto!important}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ImageColumnComponent, [{
        type: Component,
        args: [{
                selector: 'image-column',
                templateUrl: './image-column.component.html',
                styleUrls: ['./image-column.component.css']
            }]
    }], function () { return []; }, { value: [{
            type: Input,
            args: ['value']
        }], row: [{
            type: Input,
            args: ['row']
        }] }); })();

const _c0$2 = function (a0) { return { "color": a0 }; };
function IconColumnComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 1);
    ɵɵelementStart(2, "i", 2);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngClass", icon_r1.customClass)("tooltip", icon_r1.tooltip.tooltipText)("delay", icon_r1.tooltip.delay)("isDisabled", icon_r1.tooltip.isDisabled)("tooltipAnimation", icon_r1.tooltip.tooltipAnimation)("placement", icon_r1.tooltip.hasOwnProperty("placement") ? icon_r1.tooltip.placement : "top");
    ɵɵadvance(1);
    ɵɵproperty("ngClass", icon_r1.icon)("ngStyle", ɵɵpureFunction1(9, _c0$2, icon_r1.color));
    ɵɵadvance(1);
    ɵɵtextInterpolate(icon_r1.name);
} }
class IconColumnComponent {
    constructor() { }
    ngOnInit() {
    }
}
IconColumnComponent.ɵfac = function IconColumnComponent_Factory(t) { return new (t || IconColumnComponent)(); };
IconColumnComponent.ɵcmp = ɵɵdefineComponent({ type: IconColumnComponent, selectors: [["icon-column"]], inputs: { value: "value", row: "row" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "mr-2", 3, "ngClass", "tooltip", "delay", "isDisabled", "tooltipAnimation", "placement"], [3, "ngClass", "ngStyle"]], template: function IconColumnComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, IconColumnComponent_ng_container_0_Template, 4, 11, "ng-container", 0);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.row.icons);
    } }, directives: [NgForOf, NgClass, TooltipDirective, NgStyle], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(IconColumnComponent, [{
        type: Component,
        args: [{
                selector: 'icon-column',
                templateUrl: './icon-column.component.html',
                styleUrls: ['./icon-column.component.css']
            }]
    }], function () { return []; }, { value: [{
            type: Input,
            args: ['value']
        }], row: [{
            type: Input,
            args: ['row']
        }] }); })();

function CustomColumnComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c0$3 = function (a0, a1, a2) { return { value: a0, row: a1, column: a2 }; };
class CustomColumnComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomColumnComponent.ɵfac = function CustomColumnComponent_Factory(t) { return new (t || CustomColumnComponent)(); };
CustomColumnComponent.ɵcmp = ɵɵdefineComponent({ type: CustomColumnComponent, selectors: [["custom-column"]], inputs: { value: "value", row: "row", column: "column" }, decls: 1, vars: 6, consts: [[4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function CustomColumnComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, CustomColumnComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
    } if (rf & 2) {
        ɵɵproperty("ngTemplateOutlet", ctx.row.customTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c0$3, ctx.value, ctx.row, ctx.column));
    } }, directives: [NgTemplateOutlet], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CustomColumnComponent, [{
        type: Component,
        args: [{
                selector: 'custom-column',
                templateUrl: './custom-column.component.html',
                styleUrls: ['./custom-column.component.css']
            }]
    }], function () { return []; }, { value: [{
            type: Input,
            args: ['value']
        }], row: [{
            type: Input,
            args: ['row']
        }], column: [{
            type: Input,
            args: ['column']
        }] }); })();

class DateFormatPipe {
    transform(data, format) {
        return moment(data).format(format);
    }
}
DateFormatPipe.ɵfac = function DateFormatPipe_Factory(t) { return new (t || DateFormatPipe)(); };
DateFormatPipe.ɵpipe = ɵɵdefinePipe({ name: "dateFormat", type: DateFormatPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DateFormatPipe, [{
        type: Pipe,
        args: [{
                name: 'dateFormat',
            }]
    }], null, null); })();

function DateColumnComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "date");
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, ctx_r0.value, ctx_r0.row.dateFormat), " ");
} }
function DateColumnComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "dateFormat");
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, ctx_r2.value, ctx_r2.row.dateFormat), " ");
} }
var pipeFormatEnum;
(function (pipeFormatEnum) {
    pipeFormatEnum["date"] = "date";
    pipeFormatEnum["Moment"] = "Moment";
})(pipeFormatEnum || (pipeFormatEnum = {}));
class DateColumnComponent {
    constructor() {
    }
    ngOnInit() {
    }
    /**
     * @method  access to enum data
     */
    get pipeFormat() {
        return pipeFormatEnum;
    }
}
DateColumnComponent.ɵfac = function DateColumnComponent_Factory(t) { return new (t || DateColumnComponent)(); };
DateColumnComponent.ɵcmp = ɵɵdefineComponent({ type: DateColumnComponent, selectors: [["date-column"]], inputs: { value: "value", row: "row" }, decls: 4, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["moment", ""]], template: function DateColumnComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span");
        ɵɵtemplate(1, DateColumnComponent_ng_container_1_Template, 3, 4, "ng-container", 0);
        ɵɵtemplate(2, DateColumnComponent_ng_template_2_Template, 2, 4, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵɵreference(3);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.row.pipeFormat == ctx.pipeFormat.date)("ngIfElse", _r1);
    } }, directives: [NgIf], pipes: [DatePipe, DateFormatPipe], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DateColumnComponent, [{
        type: Component,
        args: [{
                selector: 'date-column',
                templateUrl: './date-column.component.html',
                styleUrls: ['./date-column.component.css']
            }]
    }], function () { return []; }, { value: [{
            type: Input,
            args: ['value']
        }], row: [{
            type: Input,
            args: ['row']
        }] }); })();

function StatusColumnComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "Active");
    ɵɵelementEnd();
} }
function StatusColumnComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "Inactive");
    ɵɵelementEnd();
} }
function StatusColumnComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "In progress");
    ɵɵelementEnd();
} }
const _c0$4 = function (a0) { return { "color": a0 }; };
var statusState;
(function (statusState) {
    statusState[statusState["active"] = 1] = "active";
    statusState[statusState["inactive"] = 0] = "inactive";
    statusState[statusState["inProgress"] = 2] = "inProgress";
})(statusState || (statusState = {}));
class StatusColumnComponent {
    constructor() {
    }
    ngOnInit() {
    }
    /**
     * @method access to enum data
     */
    get statusState() {
        return statusState;
    }
}
StatusColumnComponent.ɵfac = function StatusColumnComponent_Factory(t) { return new (t || StatusColumnComponent)(); };
StatusColumnComponent.ɵcmp = ɵɵdefineComponent({ type: StatusColumnComponent, selectors: [["status-column"]], inputs: { value: "value", row: "row" }, decls: 6, vars: 8, consts: [[3, "ngStyle"], [3, "ngClass"], [3, "ngSwitch"], [4, "ngSwitchCase"]], template: function StatusColumnComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵelement(1, "i", 1);
        ɵɵelementContainerStart(2, 2);
        ɵɵtemplate(3, StatusColumnComponent_span_3_Template, 2, 0, "span", 3);
        ɵɵtemplate(4, StatusColumnComponent_span_4_Template, 2, 0, "span", 3);
        ɵɵtemplate(5, StatusColumnComponent_span_5_Template, 2, 0, "span", 3);
        ɵɵelementContainerEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngStyle", ɵɵpureFunction1(6, _c0$4, ctx.row.color));
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ctx.row.icon);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitch", ctx.value);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.statusState.active);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.statusState.inactive);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.statusState.inProgress);
    } }, directives: [NgStyle, NgClass, NgSwitch, NgSwitchCase], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StatusColumnComponent, [{
        type: Component,
        args: [{
                selector: 'status-column',
                templateUrl: './status-column.component.html',
                styleUrls: ['./status-column.component.css']
            }]
    }], function () { return []; }, { value: [{
            type: Input,
            args: ['value']
        }], row: [{
            type: Input,
            args: ['row']
        }] }); })();

class ActionClassPipe {
    transform(data) {
        if (data.hasOwnProperty('margin')) {
            return 'm' + data.margin;
        }
        else if (data.hasOwnProperty('marginRight')) {
            return 'mr-' + data.marginRight;
        }
        else if (data.hasOwnProperty('marginLeft')) {
            return 'ml-' + data.marginLeft;
        }
    }
}
ActionClassPipe.ɵfac = function ActionClassPipe_Factory(t) { return new (t || ActionClassPipe)(); };
ActionClassPipe.ɵpipe = ɵɵdefinePipe({ name: "actionBtnClass", type: ActionClassPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ActionClassPipe, [{
        type: Pipe,
        args: [{
                name: 'actionBtnClass',
            }]
    }], null, null); })();

class RowChangeNamePipe {
    transform(rowData, value) {
        if (typeof (value) !== "string")
            return value(rowData);
        return value;
    }
}
RowChangeNamePipe.ɵfac = function RowChangeNamePipe_Factory(t) { return new (t || RowChangeNamePipe)(); };
RowChangeNamePipe.ɵpipe = ɵɵdefinePipe({ name: "rowChangeName", type: RowChangeNamePipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RowChangeNamePipe, [{
        type: Pipe,
        args: [{
                name: 'rowChangeName',
            }]
    }], null, null); })();

function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_i_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i");
} if (rf & 2) {
    const action_r2 = ɵɵnextContext(3).$implicit;
    ɵɵclassMap(action_r2.dropDownIcon);
} }
function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_ng_container_1_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i");
    ɵɵpipe(1, "rowChangeName");
} if (rf & 2) {
    const dropDownOption_r12 = ɵɵnextContext().$implicit;
    const ctx_r14 = ɵɵnextContext(6);
    ɵɵclassMap(ɵɵpipeBind2(1, 3, ctx_r14.column, dropDownOption_r12.icon));
} }
function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 14);
} }
function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 11);
    ɵɵelementStart(2, "a", 12);
    ɵɵlistener("click", function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_ng_container_1_Template_a_click_2_listener() { ɵɵrestoreView(_r18); const dropDownOption_r12 = ctx.$implicit; const ctx_r17 = ɵɵnextContext(6); return dropDownOption_r12.onclick(ctx_r17.column); });
    ɵɵtemplate(3, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_ng_container_1_i_3_Template, 2, 6, "i", 7);
    ɵɵtext(4);
    ɵɵpipe(5, "rowChangeName");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(6, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_ng_container_1_div_6_Template, 1, 0, "div", 13);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const dropDownOption_r12 = ctx.$implicit;
    const ctx_r11 = ɵɵnextContext(6);
    ɵɵadvance(2);
    ɵɵproperty("ngClass", dropDownOption_r12.customClass);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", dropDownOption_r12.icon);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(5, 4, ctx_r11.column, dropDownOption_r12.name), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", dropDownOption_r12.dropdownDivider);
} }
function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 10);
    ɵɵtemplate(1, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_ng_container_1_Template, 7, 7, "ng-container", 1);
    ɵɵelementEnd();
} if (rf & 2) {
    const action_r2 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", action_r2.dropDownItems);
} }
const _c0$5 = function (a0) { return { "padding": a0 }; };
function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 5);
    ɵɵelementStart(2, "button", 6);
    ɵɵpipe(3, "actionBtnClass");
    ɵɵtemplate(4, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_i_4_Template, 1, 3, "i", 7);
    ɵɵtext(5);
    ɵɵelement(6, "span", 8);
    ɵɵelementEnd();
    ɵɵtemplate(7, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_Template, 2, 1, "ul", 9);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const action_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵclassMapInterpolate1("btn dropdown-toggle ", action_r2.customClass, "");
    ɵɵproperty("ngStyle", ɵɵpureFunction1(9, _c0$5, ctx_r5.row.buttonPadding))("ngClass", ɵɵpipeBind1(3, 7, action_r2));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", action_r2.dropDownIcon);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", action_r2.name, " ");
} }
function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span");
} if (rf & 2) {
    const action_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r21 = ɵɵnextContext(2);
    ɵɵclassMap(action_r2.classCallback(ctx_r21.column));
} }
function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 17);
} if (rf & 2) {
    const action_r2 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngClass", action_r2.icon);
} }
function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const action_r2 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", action_r2.name, "");
} }
function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 15);
    ɵɵlistener("click", function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_Template_button_click_0_listener() { ɵɵrestoreView(_r28); const action_r2 = ɵɵnextContext(2).$implicit; const ctx_r27 = ɵɵnextContext(2); return action_r2.onclick(ctx_r27.column); });
    ɵɵpipe(1, "actionBtnClass");
    ɵɵtemplate(2, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_span_2_Template, 1, 2, "span", 7);
    ɵɵtemplate(3, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_i_3_Template, 1, 1, "i", 16);
    ɵɵtemplate(4, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_span_4_Template, 2, 1, "span", 0);
    ɵɵelementEnd();
} if (rf & 2) {
    const action_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵclassMap(ɵɵpipeBind1(1, 12, action_r2));
    ɵɵproperty("tooltip", action_r2.tooltip ? action_r2.tooltip.tooltipText : "")("placement", action_r2.tooltip ? action_r2.tooltip.placement : "")("delay", action_r2.tooltip ? action_r2.tooltip.delay : "")("ngStyle", ɵɵpureFunction1(14, _c0$5, ctx_r7.row.buttonPadding))("isDisabled", action_r2.tooltip ? action_r2.tooltip.isDisabled : "")("tooltipAnimation", action_r2.tooltip ? action_r2.tooltip.tooltipAnimation : "")("ngClass", action_r2.customClass);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", action_r2.classCallback(ctx_r7.column));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", action_r2.icon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", action_r2.name);
} }
function ActionColumnComponent_ng_container_1_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_Template, 8, 11, "ng-container", 3);
    ɵɵtemplate(2, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_Template, 5, 16, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r6 = ɵɵreference(3);
    const action_r2 = ɵɵnextContext().$implicit;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", action_r2.buttonType == ctx_r3.buttonType.DropDownButton)("ngIfElse", _r6);
} }
const _c1$1 = function (a0) { return { row: a0 }; };
function ActionColumnComponent_ng_container_1_span_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 18);
} if (rf & 2) {
    const action_r2 = ɵɵnextContext().$implicit;
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", action_r2.customTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1$1, ctx_r4.column));
} }
function ActionColumnComponent_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, ActionColumnComponent_ng_container_1_span_1_ng_container_1_Template, 4, 2, "ng-container", 0);
    ɵɵtemplate(2, ActionColumnComponent_ng_container_1_span_1_ng_container_2_Template, 1, 4, "ng-container", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    const action_r2 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !action_r2.customTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", action_r2.customTemplate);
} }
function ActionColumnComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ActionColumnComponent_ng_container_1_span_1_Template, 3, 2, "span", 1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.row.buttonItems);
} }
var buttonTypeEnum;
(function (buttonTypeEnum) {
    buttonTypeEnum["DropDownButton"] = "DropDownButton";
    buttonTypeEnum["simpleButton"] = "simpleButton";
})(buttonTypeEnum || (buttonTypeEnum = {}));
class ActionColumnComponent {
    constructor() {
    }
    ngOnInit() {
    }
    /**
     *  @method  access to enum data
     */
    get buttonType() {
        return buttonTypeEnum;
    }
}
ActionColumnComponent.ɵfac = function ActionColumnComponent_Factory(t) { return new (t || ActionColumnComponent)(); };
ActionColumnComponent.ɵcmp = ɵɵdefineComponent({ type: ActionColumnComponent, selectors: [["action-column"]], inputs: { value: "value", row: "row", column: "column" }, decls: 2, vars: 4, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["simpleButton", ""], ["dropdown", "", 1, "btn-group"], ["id", "button-basic", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-custom-html", 3, "ngStyle", "ngClass"], [3, "class", 4, "ngIf"], [1, "caret"], ["id", "dropdown-basic", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-basic", 4, "dropdownMenu"], ["id", "dropdown-basic", "role", "menu", "aria-labelledby", "button-basic", 1, "dropdown-menu"], ["role", "menuitem"], [1, "dropdown-item", 3, "ngClass", "click"], ["class", "dropdown-divider", 4, "ngIf"], [1, "dropdown-divider"], [1, "btn", 3, "tooltip", "placement", "delay", "ngStyle", "isDisabled", "tooltipAnimation", "ngClass", "click"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function ActionColumnComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵtemplate(1, ActionColumnComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap("text-" + ctx.row.position);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.row.buttonItems);
    } }, directives: [NgIf, NgForOf, BsDropdownDirective, BsDropdownToggleDirective, NgStyle, NgClass, BsDropdownMenuDirective, TooltipDirective, NgTemplateOutlet], pipes: [ActionClassPipe, RowChangeNamePipe], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ActionColumnComponent, [{
        type: Component,
        args: [{
                selector: 'action-column',
                templateUrl: './action-column.component.html',
                styleUrls: ['./action-column.component.css']
            }]
    }], function () { return []; }, { value: [{
            type: Input,
            args: ['value']
        }], row: [{
            type: Input,
            args: ['row']
        }], column: [{
            type: Input,
            args: ['column']
        }] }); })();

class LinkColumnComponent {
    constructor() { }
    ngOnInit() {
    }
}
LinkColumnComponent.ɵfac = function LinkColumnComponent_Factory(t) { return new (t || LinkColumnComponent)(); };
LinkColumnComponent.ɵcmp = ɵɵdefineComponent({ type: LinkColumnComponent, selectors: [["link-column"]], inputs: { value: "value", row: "row", column: "column" }, decls: 2, vars: 1, consts: [[3, "click"]], template: function LinkColumnComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵlistener("click", function LinkColumnComponent_Template_span_click_0_listener() { return ctx.row.onclick(ctx.column); });
        ɵɵtext(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ctx.value, "\n");
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LinkColumnComponent, [{
        type: Component,
        args: [{
                selector: 'link-column',
                templateUrl: './link-column.component.html',
                styleUrls: ['./link-column.component.css']
            }]
    }], function () { return []; }, { value: [{
            type: Input,
            args: ['value']
        }], row: [{
            type: Input,
            args: ['row']
        }], column: [{
            type: Input,
            args: ['column']
        }] }); })();

const _c0$6 = ["readMoreTemplate"];
const _c1$2 = function (a0, a1) { return [a0, a1]; };
function ReadMoreColumnComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 3);
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c1$2, ctx_r0.row.iconName ? ctx_r0.row.iconName : "", ctx_r0.addClass ? "rotate" : ""));
} }
function ReadMoreColumnComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1.row.btnName);
} }
class ReadMoreColumnComponent {
    constructor(gridFactoryService) {
        this.gridFactoryService = gridFactoryService;
        this.readMoreData = new EventEmitter();
        this.collapsedNotifier = new EventEmitter();
        this.addClass = false;
        this.isCollapsed = [];
    }
    /**
     * call read more service
     */
    generateReadMoreService() {
        /**
         * we have to send request just in first time in other situation we must just toggle
         */
        this.cloneDataObservable = undefined;
        let url = `${this.row.url}`;
        url = url.replace('{{value}}', this.value);
        let service = this.gridFactoryService.CreateGridService(this.row.modelType);
        /**
         * http service generator
         */
        service.getData(url).pipe(take(1)).subscribe((res) => {
            this.cloneDataObservable = res;
            this.readMoreData.emit({ data: res, id: this.value, tableConfig: this.row.tableConfig });
        });
    }
    /**
     * it trigger collapsed and emit it to grid component to show and hide data
     * @param id {number}- which item click
     */
    triggerCollapsed(id) {
        this.addClass = !this.addClass;
        // if first time we must send request else we just collapsed
        if (this.cloneDataObservable === undefined && this.isCollapsed[id] == undefined) {
            this.generateReadMoreService();
        }
        this.collapsedNotifier.emit({ id: id, state: !this.isCollapsed[id] });
        // @ts-ignore
        this.isCollapsed[id] = !this.isCollapsed[id];
    }
}
ReadMoreColumnComponent.ɵfac = function ReadMoreColumnComponent_Factory(t) { return new (t || ReadMoreColumnComponent)(ɵɵdirectiveInject(GridFactoryService)); };
ReadMoreColumnComponent.ɵcmp = ɵɵdefineComponent({ type: ReadMoreColumnComponent, selectors: [["read-more-column"]], viewQuery: function ReadMoreColumnComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$6, true);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.readMoreTemplate = _t.first);
    } }, inputs: { value: "value", row: "row", column: "column" }, outputs: { readMoreData: "readMoreData", collapsedNotifier: "collapsedNotifier" }, decls: 3, vars: 3, consts: [["role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 3, "ngClass", "click"], ["class", "read-more-icon", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "read-more-icon", 3, "ngClass"]], template: function ReadMoreColumnComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "a", 0);
        ɵɵlistener("click", function ReadMoreColumnComponent_Template_a_click_0_listener() { return ctx.triggerCollapsed(ctx.column.id); });
        ɵɵtemplate(1, ReadMoreColumnComponent_i_1_Template, 1, 4, "i", 1);
        ɵɵtemplate(2, ReadMoreColumnComponent_span_2_Template, 2, 1, "span", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngClass", ctx.row.btnClass ? ctx.row.btnClass : "");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.row.iconName);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.row.btnName);
    } }, directives: [NgClass, NgIf], styles: [".rotate[_ngcontent-%COMP%]{transform:rotate(90deg)}.read-more-icon[_ngcontent-%COMP%], .rotate[_ngcontent-%COMP%]{transition:.9s}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ReadMoreColumnComponent, [{
        type: Component,
        args: [{
                selector: 'read-more-column',
                templateUrl: './read-more-column.component.html',
                styleUrls: ['./read-more-column.component.css']
            }]
    }], function () { return [{ type: GridFactoryService }]; }, { value: [{
            type: Input,
            args: ['value']
        }], row: [{
            type: Input,
            args: ['row']
        }], column: [{
            type: Input,
            args: ['column']
        }], readMoreData: [{
            type: Output
        }], collapsedNotifier: [{
            type: Output
        }], readMoreTemplate: [{
            type: ViewChild,
            args: ['readMoreTemplate', { static: true }]
        }] }); })();

class RowClassCallbackPipe {
    transform(rowData, value) {
        if (value) {
            const cssClass = value(rowData);
            return cssClass;
        }
    }
}
RowClassCallbackPipe.ɵfac = function RowClassCallbackPipe_Factory(t) { return new (t || RowClassCallbackPipe)(); };
RowClassCallbackPipe.ɵpipe = ɵɵdefinePipe({ name: "RowClassCallback", type: RowClassCallbackPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RowClassCallbackPipe, [{
        type: Pipe,
        args: [{
                name: 'RowClassCallback',
            }]
    }], null, null); })();

class NestedJsonPipe {
    transform(data, value) {
        return get(data, value);
    }
}
NestedJsonPipe.ɵfac = function NestedJsonPipe_Factory(t) { return new (t || NestedJsonPipe)(); };
NestedJsonPipe.ɵpipe = ɵɵdefinePipe({ name: "nestedJson", type: NestedJsonPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NestedJsonPipe, [{
        type: Pipe,
        args: [{
                name: 'nestedJson',
            }]
    }], null, null); })();

// angular basic
const _c0$7 = ["paginator"];
function GridComponent_ng_container_6_ng_container_1_td_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c1$3 = function (a0, a1, a2) { return { value: a0, row: a1, column: a2 }; };
function GridComponent_ng_container_6_ng_container_1_td_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtemplate(1, GridComponent_ng_container_6_ng_container_1_td_3_ng_container_1_Template, 1, 0, "ng-container", 12);
    ɵɵpipe(2, "nestedJson");
    ɵɵelementEnd();
} if (rf & 2) {
    const rowItem_r10 = ctx.$implicit;
    const rowItems_r7 = ɵɵnextContext().$implicit;
    ɵɵnextContext(2);
    const _r4 = ɵɵreference(12);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", ɵɵpureFunction3(5, _c1$3, ɵɵpipeBind2(2, 2, rowItems_r7, rowItem_r10.value), rowItem_r10, rowItems_r7));
} }
function GridComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "tr", 10);
    ɵɵpipe(2, "RowClassCallback");
    ɵɵtemplate(3, GridComponent_ng_container_6_ng_container_1_td_3_Template, 3, 9, "td", 9);
    ɵɵelementEnd();
    ɵɵelement(4, "tr", 11);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const rowItems_r7 = ctx.$implicit;
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpipeBind2(2, 4, rowItems_r7, ctx_r6.grid.rowClassCallback));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r6.columnData);
    ɵɵadvance(1);
    ɵɵproperty("ngbCollapse", !ctx_r6.isCollapsed[rowItems_r7["id"]])("id", rowItems_r7 && rowItems_r7["id"] ? "read-more" + rowItems_r7["id"] : "");
} }
function GridComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, GridComponent_ng_container_6_ng_container_1_Template, 5, 7, "ng-container", 9);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(2, 1, ctx_r0.rows));
} }
function GridComponent_ng_template_7_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵelementStart(1, "span", 16);
    ɵɵtext(2, "Loading...");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function GridComponent_ng_template_7_p_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r14.grid.noDataMessage, " ");
} }
function GridComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtemplate(1, GridComponent_ng_template_7_div_1_Template, 3, 0, "div", 14);
    ɵɵtemplate(2, GridComponent_ng_template_7_p_2_Template, 2, 1, "p", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r2.dataLoading.value);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.rows.value.length == 0 && ctx_r2.dataLoading.value);
} }
function GridComponent_ng_container_10_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "ng-select", 24);
    ɵɵlistener("change", function GridComponent_ng_container_10_ng_container_6_Template_ng_select_change_1_listener() { ɵɵrestoreView(_r19); const ctx_r18 = ɵɵnextContext(2); return ctx_r18.changePage(ctx_r18.firstPage); })("ngModelChange", function GridComponent_ng_container_10_ng_container_6_Template_ng_select_ngModelChange_1_listener($event) { ɵɵrestoreView(_r19); const ctx_r20 = ɵɵnextContext(2); return ctx_r20.pageSize = $event; });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("items", ctx_r16.grid.pagination.itemPerPageSelectorOption)("searchable", false)("clearable", false)("ngModel", ctx_r16.pageSize);
} }
function GridComponent_ng_container_10_span_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate("Showing " + ctx_r17.numberOfDataStart + " - " + ctx_r17.numberOfDataEnd + " of " + ctx_r17.totalNumberOfData);
} }
function GridComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 17);
    ɵɵelementStart(2, "div", 18);
    ɵɵelementStart(3, "ngb-pagination", 19, 20);
    ɵɵlistener("pageChange", function GridComponent_ng_container_10_Template_ngb_pagination_pageChange_3_listener($event) { ɵɵrestoreView(_r22); const ctx_r21 = ɵɵnextContext(); return ctx_r21.page = $event; })("pageChange", function GridComponent_ng_container_10_Template_ngb_pagination_pageChange_3_listener($event) { ɵɵrestoreView(_r22); const ctx_r23 = ɵɵnextContext(); return ctx_r23.changePage($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 21);
    ɵɵtemplate(6, GridComponent_ng_container_10_ng_container_6_Template, 2, 4, "ng-container", 7);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 22);
    ɵɵtemplate(8, GridComponent_ng_container_10_span_8_Template, 2, 1, "span", 23);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("collectionSize", ctx_r3.totalNumberOfData)("page", ctx_r3.page)("pageSize", ctx_r3.pageSize)("maxSize", ctx_r3.grid.pagination.maxSize ? ctx_r3.grid.pagination.maxSize : 5)("rotate", ctx_r3.grid.pagination.rotate ? ctx_r3.grid.pagination.rotate : true)("boundaryLinks", ctx_r3.grid.pagination.boundaryLinks ? ctx_r3.grid.pagination.boundaryLinks : false);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r3.grid.pagination.itemPerPageSelectorOption && ctx_r3.grid.pagination.itemPerPageSelectorOption.length > 0);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r3.grid.pagination.hasOwnProperty("disableNumberOfData") || !ctx_r3.grid.pagination.disableNumberOfData);
} }
function GridComponent_ng_template_11_text_column_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "text-column", 30);
} if (rf & 2) {
    const ctx_r37 = ɵɵnextContext();
    const value_r25 = ctx_r37.value;
    const row_r24 = ctx_r37.row;
    ɵɵproperty("value", value_r25)("row", row_r24);
} }
function GridComponent_ng_template_11_boolean_column_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "boolean-column", 30);
} if (rf & 2) {
    const ctx_r38 = ɵɵnextContext();
    const value_r25 = ctx_r38.value;
    const row_r24 = ctx_r38.row;
    ɵɵproperty("value", value_r25)("row", row_r24);
} }
function GridComponent_ng_template_11_image_column_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "image-column", 30);
} if (rf & 2) {
    const ctx_r39 = ɵɵnextContext();
    const value_r25 = ctx_r39.value;
    const row_r24 = ctx_r39.row;
    ɵɵproperty("value", value_r25)("row", row_r24);
} }
function GridComponent_ng_template_11_icon_column_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "icon-column", 30);
} if (rf & 2) {
    const ctx_r40 = ɵɵnextContext();
    const value_r25 = ctx_r40.value;
    const row_r24 = ctx_r40.row;
    ɵɵproperty("value", value_r25)("row", row_r24);
} }
function GridComponent_ng_template_11_custom_column_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "custom-column", 31);
} if (rf & 2) {
    const ctx_r41 = ɵɵnextContext();
    const value_r25 = ctx_r41.value;
    const row_r24 = ctx_r41.row;
    const column_r26 = ctx_r41.column;
    ɵɵproperty("value", value_r25)("row", row_r24)("column", column_r26);
} }
function GridComponent_ng_template_11_date_column_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "date-column", 30);
} if (rf & 2) {
    const ctx_r42 = ɵɵnextContext();
    const value_r25 = ctx_r42.value;
    const row_r24 = ctx_r42.row;
    ɵɵproperty("value", value_r25)("row", row_r24);
} }
function GridComponent_ng_template_11_status_column_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "status-column", 30);
} if (rf & 2) {
    const ctx_r43 = ɵɵnextContext();
    const value_r25 = ctx_r43.value;
    const row_r24 = ctx_r43.row;
    ɵɵproperty("value", value_r25)("row", row_r24);
} }
function GridComponent_ng_template_11_action_column_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "action-column", 31);
} if (rf & 2) {
    const ctx_r44 = ɵɵnextContext();
    const value_r25 = ctx_r44.value;
    const row_r24 = ctx_r44.row;
    const column_r26 = ctx_r44.column;
    ɵɵproperty("value", value_r25)("row", row_r24)("column", column_r26);
} }
function GridComponent_ng_template_11_link_column_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "link-column", 31);
} if (rf & 2) {
    const ctx_r45 = ɵɵnextContext();
    const value_r25 = ctx_r45.value;
    const row_r24 = ctx_r45.row;
    const column_r26 = ctx_r45.column;
    ɵɵproperty("value", value_r25)("row", row_r24)("column", column_r26);
} }
function GridComponent_ng_template_11_read_more_column_10_Template(rf, ctx) { if (rf & 1) {
    const _r47 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "read-more-column", 32);
    ɵɵlistener("readMoreData", function GridComponent_ng_template_11_read_more_column_10_Template_read_more_column_readMoreData_0_listener($event) { ɵɵrestoreView(_r47); const ctx_r46 = ɵɵnextContext(2); return ctx_r46.showReadMore($event); })("collapsedNotifier", function GridComponent_ng_template_11_read_more_column_10_Template_read_more_column_collapsedNotifier_0_listener($event) { ɵɵrestoreView(_r47); const ctx_r48 = ɵɵnextContext(2); return ctx_r48.triggerCollapsed($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r49 = ɵɵnextContext();
    const value_r25 = ctx_r49.value;
    const column_r26 = ctx_r49.column;
    const row_r24 = ctx_r49.row;
    ɵɵproperty("value", value_r25)("column", column_r26)("row", row_r24);
} }
function GridComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0, 26);
    ɵɵtemplate(1, GridComponent_ng_template_11_text_column_1_Template, 1, 2, "text-column", 27);
    ɵɵtemplate(2, GridComponent_ng_template_11_boolean_column_2_Template, 1, 2, "boolean-column", 27);
    ɵɵtemplate(3, GridComponent_ng_template_11_image_column_3_Template, 1, 2, "image-column", 27);
    ɵɵtemplate(4, GridComponent_ng_template_11_icon_column_4_Template, 1, 2, "icon-column", 27);
    ɵɵtemplate(5, GridComponent_ng_template_11_custom_column_5_Template, 1, 3, "custom-column", 28);
    ɵɵtemplate(6, GridComponent_ng_template_11_date_column_6_Template, 1, 2, "date-column", 27);
    ɵɵtemplate(7, GridComponent_ng_template_11_status_column_7_Template, 1, 2, "status-column", 27);
    ɵɵtemplate(8, GridComponent_ng_template_11_action_column_8_Template, 1, 3, "action-column", 28);
    ɵɵtemplate(9, GridComponent_ng_template_11_link_column_9_Template, 1, 3, "link-column", 28);
    ɵɵtemplate(10, GridComponent_ng_template_11_read_more_column_10_Template, 1, 3, "read-more-column", 29);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r24 = ctx.row;
    ɵɵproperty("ngSwitch", row_r24.type);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "Text");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "Boolean");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "Image");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "Icon");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "Custom");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "Date");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "Status");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "Action");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "Link");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "ReadMore");
} }
class GridComponent {
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
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(ɵɵdirectiveInject(GridFactoryService), ɵɵdirectiveInject(GridActionsNotifier), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ViewContainerRef)); };
GridComponent.ɵcmp = ɵɵdefineComponent({ type: GridComponent, selectors: [["lib-grid"]], viewQuery: function GridComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$7, true);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.paginator = _t.first);
    } }, inputs: { grid: "grid", refreshGrid: "refreshGrid" }, decls: 13, vars: 6, consts: [[1, "angular-bootstrap-table"], [1, "table-box", "table-responsive"], [1, "table", "table-head-custom", "table-vertical-center", "table-striped"], [3, "theadSortConfig", "defaultSort", "theadLabel", "sort"], [4, "ngIf", "ngIfElse"], ["noData", ""], [1, "pagination-box"], [4, "ngIf"], ["ColumnTemplate", ""], [4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "ngbCollapse", "id"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "no-data", "text-center", "p-5"], ["class", "spinner-border text-primary", "role", "status", 4, "ngIf"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "sr-only"], [1, "d-flex", "mt-2"], [1, "mr-auto", "datatable-pager"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"], ["paginator", ""], [1, "select-pagination"], [1, "ml-2", "mt-1", "paginate-detail"], ["class", "pagination-data-info", 4, "ngIf"], ["bindLabel", "name", "placeholder", "Select city", 3, "items", "searchable", "clearable", "ngModel", "change", "ngModelChange"], [1, "pagination-data-info"], [3, "ngSwitch"], [3, "value", "row", 4, "ngSwitchCase"], [3, "value", "row", "column", 4, "ngSwitchCase"], [3, "value", "column", "row", "readMoreData", "collapsedNotifier", 4, "ngSwitchCase"], [3, "value", "row"], [3, "value", "row", "column"], [3, "value", "column", "row", "readMoreData", "collapsedNotifier"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "table", 2);
        ɵɵelementStart(3, "thead");
        ɵɵelementStart(4, "header-table-cell", 3);
        ɵɵlistener("sort", function GridComponent_Template_header_table_cell_sort_4_listener($event) { return ctx.sorting($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "tbody");
        ɵɵtemplate(6, GridComponent_ng_container_6_Template, 3, 3, "ng-container", 4);
        ɵɵtemplate(7, GridComponent_ng_template_7_Template, 3, 2, "ng-template", null, 5, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 6);
        ɵɵtemplate(10, GridComponent_ng_container_10_Template, 9, 8, "ng-container", 7);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(11, GridComponent_ng_template_11_Template, 11, 11, "ng-template", null, 8, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵɵreference(8);
        ɵɵadvance(4);
        ɵɵproperty("theadSortConfig", ctx.tHeadSortConfig)("defaultSort", ctx.grid.defaultSort)("theadLabel", ctx.tHeadLabels);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.dataLoading.value && ctx.rows.value.length > 0)("ngIfElse", _r1);
        ɵɵadvance(4);
        ɵɵproperty("ngIf", ctx.dataLoading.value && ctx.grid.pagination && ctx.rows.value.length !== 0);
    } }, directives: [HeaderTableCellComponent, NgIf, NgForOf, NgClass, NgbCollapse, NgTemplateOutlet, NgbPagination, NgSelectComponent, NgControlStatus, NgModel, NgSwitch, NgSwitchCase, TextColumnComponent, BooleanColumnComponent, ImageColumnComponent, IconColumnComponent, CustomColumnComponent, DateColumnComponent, StatusColumnComponent, ActionColumnComponent, LinkColumnComponent, ReadMoreColumnComponent], pipes: [AsyncPipe, RowClassCallbackPipe, NestedJsonPipe], styles: ["div#child_data_local_1{display:block;width:100%}tbody.datatable-body,thead.datatable-head{display:table;width:100%}table.datatable-table,tr#read-more1{width:100%}.disable-header{width:20px}.no-data{left:0;margin-top:15px;position:absolute;right:0;width:auto}table{display:table;min-height:100px;width:100%}.pagination-data-info{padding:0 15px;vertical-align:top}"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GridComponent, [{
        type: Component,
        args: [{
                selector: 'lib-grid',
                templateUrl: './grid.component.html',
                styleUrls: ['./grid.component.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: GridFactoryService }, { type: GridActionsNotifier }, { type: ChangeDetectorRef }, { type: ViewContainerRef }]; }, { grid: [{
            type: Input
        }], refreshGrid: [{
            type: Input
        }], paginator: [{
            type: ViewChild,
            args: ['paginator', { static: true }]
        }] }); })();

class SortGridPipe {
    transform(data, direction, name) {
        return true;
        // return _.orderBy(data, [name], [direction == 'asc' ? 'asc' : 'desc']);
    }
}
SortGridPipe.ɵfac = function SortGridPipe_Factory(t) { return new (t || SortGridPipe)(); };
SortGridPipe.ɵpipe = ɵɵdefinePipe({ name: "SortGridPipe", type: SortGridPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SortGridPipe, [{
        type: Pipe,
        args: [{
                name: 'SortGridPipe',
            }]
    }], null, null); })();

class PaginationPipe {
    transform(data, currentPage, pageSize) {
        return [...data.slice(pageSize * (currentPage), pageSize * (currentPage + 1))];
    }
}
PaginationPipe.ɵfac = function PaginationPipe_Factory(t) { return new (t || PaginationPipe)(); };
PaginationPipe.ɵpipe = ɵɵdefinePipe({ name: "pagination", type: PaginationPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PaginationPipe, [{
        type: Pipe,
        args: [{
                name: 'pagination',
            }]
    }], null, null); })();

class SimpleSearch {
}
class SimpleSearchConfig {
}

class DebounceClickDirective {
    constructor() {
        this.debounceTime = 500;
        this.debounceClick = new EventEmitter();
        this.clicks = new Subject();
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.subscription = this.clicks.pipe(debounceTime(this.debounceTime)).subscribe(e => this.debounceClick.emit(e));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    clickEvent(event) {
        event.preventDefault();
        event.stopPropagation();
        this.clicks.next(event);
    }
}
DebounceClickDirective.ɵfac = function DebounceClickDirective_Factory(t) { return new (t || DebounceClickDirective)(); };
DebounceClickDirective.ɵdir = ɵɵdefineDirective({ type: DebounceClickDirective, selectors: [["", "appDebounceClick", ""]], hostBindings: function DebounceClickDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function DebounceClickDirective_click_HostBindingHandler($event) { return ctx.clickEvent($event); });
    } }, inputs: { debounceTime: "debounceTime" }, outputs: { debounceClick: "debounceClick" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DebounceClickDirective, [{
        type: Directive,
        args: [{
                selector: '[appDebounceClick]'
            }]
    }], function () { return []; }, { debounceTime: [{
            type: Input
        }], debounceClick: [{
            type: Output
        }], clickEvent: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();

//angular basic
const _c0$8 = ["simpleSearchInput"];
function SearchComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "label");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.search.inputLabel);
} }
function SearchComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵelementStart(1, "span", 7);
    ɵɵelement(2, "i", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.search.iconCustomClass);
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ctx_r1.search.icon);
} }
function SearchComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵlistener("debounceClick", function SearchComponent_button_6_Template_button_debounceClick_0_listener() { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.searchCompleteOnButtonPress(ctx_r4.searchModel); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r3.search.buttonCustomClass)("debounceTime", 700);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r3.search.buttonName, " ");
} }
class SearchComponent {
    constructor(gridActionsNotifier) {
        this.gridActionsNotifier = gridActionsNotifier;
        this.search = new SimpleSearchConfig();
        this.subscription = new Subscription();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngOnInit() {
        if (!this.search.haveButton) {
            this.subscription = fromEvent(this.simpleSearchInput && this.simpleSearchInput.nativeElement, 'keyup').pipe(
            // Time in milliseconds between key events
            // @ts-ignore
            debounce((event) => {
                if (event.key !== 'Enter') {
                    return timer(1000);
                }
                return timer(0);
            }), 
            // get value
            map((event) => {
                /**
                 * here we check event.target.value if it is empty or length <2 we must return clone of last data
                 */
                return event.target.value;
            })
            // if character length greater then 2
            , filter((res => res.length == 0 || res.length > 2))
            // If previous query is different from current
            , distinctUntilChanged()
            // subscription for response
            ).subscribe((text) => {
                // notify data change
                this.searchCompleteOnButtonPress(text);
            });
        }
    }
    /**
     * this
     * @param data- its search field value and
     */
    searchCompleteOnButtonPress(data) {
        this.gridActionsNotifier.broadcast('simpleSearch', data);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(ɵɵdirectiveInject(GridActionsNotifier)); };
SearchComponent.ɵcmp = ɵɵdefineComponent({ type: SearchComponent, selectors: [["lib-search"]], viewQuery: function SearchComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$8, true);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.simpleSearchInput = _t.first);
    } }, inputs: { search: "search" }, decls: 7, vars: 5, consts: [[4, "ngIf"], [1, "input-group"], ["class", "input-group-prepend", 3, "ngClass", 4, "ngIf"], ["id", "search", "autocomplete", "off", "name", "searchModel", "aria-describedby", "inputGroupPrepend", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["simpleSearchInput", ""], ["type", "submit", "class", "btn", "appDebounceClick", "", 3, "ngClass", "debounceTime", "debounceClick", 4, "ngIf"], [1, "input-group-prepend", 3, "ngClass"], ["id", "inputGroupPrepend", 1, "input-group-text"], [3, "ngClass"], ["type", "submit", "appDebounceClick", "", 1, "btn", 3, "ngClass", "debounceTime", "debounceClick"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "form");
        ɵɵtemplate(1, SearchComponent_label_1_Template, 2, 1, "label", 0);
        ɵɵelementStart(2, "div", 1);
        ɵɵtemplate(3, SearchComponent_div_3_Template, 3, 2, "div", 2);
        ɵɵelementStart(4, "input", 3, 4);
        ɵɵlistener("ngModelChange", function SearchComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchModel = $event; });
        ɵɵelementEnd();
        ɵɵtemplate(6, SearchComponent_button_6_Template, 2, 3, "button", 5);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.search.inputLabel);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.search.icon);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.searchModel)("placeholder", ctx.search.placeHolder);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.search.haveButton);
    } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, NgClass, DebounceClickDirective], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SearchComponent, [{
        type: Component,
        args: [{
                selector: 'lib-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.css']
            }]
    }], function () { return [{ type: GridActionsNotifier }]; }, { search: [{
            type: Input,
            args: ['search']
        }], simpleSearchInput: [{
            type: ViewChild,
            args: ['simpleSearchInput', { static: true }]
        }] }); })();

class GridModule {
}
GridModule.ɵmod = ɵɵdefineNgModule({ type: GridModule });
GridModule.ɵinj = ɵɵdefineInjector({ factory: function GridModule_Factory(t) { return new (t || GridModule)(); }, imports: [[
            NgbModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            BsDropdownModule.forRoot(),
            TooltipModule.forRoot(),
            NgSelectModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(GridModule, { declarations: [GridComponent,
        NestedJsonPipe,
        SortGridPipe,
        PaginationPipe,
        DateFormatPipe,
        ActionClassPipe,
        BooleanColumnComponent,
        TextColumnComponent,
        ImageColumnComponent,
        CustomColumnComponent,
        IconColumnComponent,
        ReadMoreColumnComponent,
        SearchComponent,
        DateColumnComponent,
        StatusColumnComponent,
        ActionColumnComponent,
        LinkColumnComponent,
        RowClassCallbackPipe,
        RowChangeNamePipe,
        DebounceClickDirective,
        HeaderTableCellComponent], imports: [NgbModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule, BsDropdownModule, TooltipModule, NgSelectModule], exports: [GridComponent,
        SearchComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(GridModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    GridComponent,
                    NestedJsonPipe,
                    SortGridPipe,
                    PaginationPipe,
                    DateFormatPipe,
                    ActionClassPipe,
                    BooleanColumnComponent,
                    TextColumnComponent,
                    ImageColumnComponent,
                    CustomColumnComponent,
                    IconColumnComponent,
                    ReadMoreColumnComponent,
                    SearchComponent,
                    DateColumnComponent,
                    StatusColumnComponent,
                    ActionColumnComponent,
                    LinkColumnComponent,
                    RowClassCallbackPipe,
                    RowChangeNamePipe,
                    DebounceClickDirective,
                    HeaderTableCellComponent
                ],
                exports: [
                    GridComponent,
                    SearchComponent,
                ],
                imports: [
                    NgbModule,
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    BsDropdownModule.forRoot(),
                    TooltipModule.forRoot(),
                    NgSelectModule
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of grid-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GridComponent, GridModule, SearchComponent };
//# sourceMappingURL=music-platform-grid.js.map
