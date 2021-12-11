(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/common'), require('@ng-bootstrap/ng-bootstrap'), require('@ng-select/ng-select'), require('@angular/forms'), require('ngx-bootstrap/tooltip'), require('moment'), require('ngx-bootstrap/dropdown'), require('lodash')) :
    typeof define === 'function' && define.amd ? define('@music-platform/grid', ['exports', '@angular/core', 'rxjs', '@angular/common/http', 'rxjs/operators', '@angular/common', '@ng-bootstrap/ng-bootstrap', '@ng-select/ng-select', '@angular/forms', 'ngx-bootstrap/tooltip', 'moment', 'ngx-bootstrap/dropdown', 'lodash'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['music-platform'] = global['music-platform'] || {}, global['music-platform'].grid = {}), global.ng.core, global.rxjs, global.ng.common.http, global.rxjs.operators, global.ng.common, global.i5, global.i6, global.ng.forms, global.i2, global.moment, global.i2$1, global._));
}(this, (function (exports, i0, rxjs, i1, operators, i1$1, i5, i6, i2$2, i2, moment, i2$1, _) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var moment__namespace = /*#__PURE__*/_interopNamespace(moment);

    /**
     * Column:array of columns
     * modelType:we need model for get data from grid service
     * baseUrl: is api base url
     * simpleSearch: grid can have simple search so we need som config for it
     * rowClassCallback it access to all row data to check it of we need and add custom class for each tr
     *
     */
    var Grid = /** @class */ (function () {
        function Grid() {
            this.columns = [];
            this.modelType = '';
            this.baseUrl = '';
            this.relativeGetMethodUrl = '';
            this.page = 1;
            this.noDataMessage = 'There is no data.';
        }
        return Grid;
    }());

    var GridService = /** @class */ (function () {
        function GridService(http) {
            this.http = http;
        }
        /**
         *
         * @param apiAddress
         * @param params
         */
        GridService.prototype.getData = function (apiAddress, params) {
            return this.http.get(apiAddress, { params: params });
        };
        /**
         *
         * @param apiAddress
         * @param body
         */
        GridService.prototype.postData = function (apiAddress, body) {
            return this.http.post(apiAddress, body);
        };
        return GridService;
    }());

    var GridFactoryService = /** @class */ (function () {
        function GridFactoryService(http) {
            this.http = http;
        }
        /**
         *
         * @param resourceName
         * @constructor
         */
        GridFactoryService.prototype.CreateGridService = function (resourceName) {
            return new GridService(this.http);
        };
        return GridFactoryService;
    }());
    GridFactoryService.ɵfac = function GridFactoryService_Factory(t) { return new (t || GridFactoryService)(i0.ɵɵinject(i1.HttpClient)); };
    GridFactoryService.ɵprov = i0.ɵɵdefineInjectable({ token: GridFactoryService, factory: GridFactoryService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GridFactoryService, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], function () { return [{ type: i1.HttpClient }]; }, null);
    })();

    var GridActionsNotifier = /** @class */ (function () {
        function GridActionsNotifier() {
            this.broadcastEvent = new rxjs.Subject();
        }
        GridActionsNotifier.prototype.broadcast = function (key, data) {
            this.broadcastEvent.next({ key: key, data: data });
        };
        GridActionsNotifier.prototype.ListenOn = function (key) {
            return this.broadcastEvent.asObservable()
                .pipe(operators.filter(function (event) { return event.key === key; }), operators.map(function (event) { return event.data; }));
        };
        return GridActionsNotifier;
    }());
    GridActionsNotifier.ɵfac = function GridActionsNotifier_Factory(t) { return new (t || GridActionsNotifier)(); };
    GridActionsNotifier.ɵprov = i0.ɵɵdefineInjectable({ token: GridActionsNotifier, factory: GridActionsNotifier.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GridActionsNotifier, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], null, null);
    })();

    var SortOrder;
    (function (SortOrder) {
        SortOrder["ASC"] = "ASC";
        SortOrder["DESC"] = "DESC";
        SortOrder["withoutSort"] = "withoutSort";
    })(SortOrder || (SortOrder = {}));

    var _c0 = ["sortingList"];
    function HeaderTableCellComponent_ng_container_0_th_1_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c1 = function (a0) { return { "sorting-start": a0 }; };
    var _c2 = function (a0, a1, a2) { return { index: a0, sortableStatus: a1, sortColumnValue: a2 }; };
    function HeaderTableCellComponent_ng_container_0_th_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "th");
            i0.ɵɵelementStart(1, "div", 4, 5);
            i0.ɵɵlistener("click", function HeaderTableCellComponent_ng_container_0_th_1_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r12_1); var index_r4 = i0.ɵɵnextContext().index; var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onSortClick(index_r4); });
            i0.ɵɵelementStart(3, "div", 6);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, HeaderTableCellComponent_ng_container_0_th_1_ng_container_5_Template, 1, 0, "ng-container", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r13 = i0.ɵɵnextContext();
            var index_r4 = ctx_r13.index;
            var tHead_r3 = ctx_r13.$implicit;
            var ctx_r5 = i0.ɵɵnextContext();
            var _r1 = i0.ɵɵreference(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c1, ctx_r5.isSortingStart && ctx_r5.isSortingStart[index_r4]));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", tHead_r3, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction3(6, _c2, index_r4, ctx_r5.theadSortConfig[index_r4]["sortable"], ctx_r5.theadSortConfig[index_r4]["value"]));
        }
    }
    function HeaderTableCellComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "th", 8);
        }
    }
    function HeaderTableCellComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, HeaderTableCellComponent_ng_container_0_th_1_Template, 6, 10, "th", 2);
            i0.ɵɵtemplate(2, HeaderTableCellComponent_ng_container_0_ng_template_2_Template, 1, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var tHead_r3 = ctx.$implicit;
            var _r6 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", tHead_r3 !== "")("ngIfElse", _r6);
        }
    }
    function HeaderTableCellComponent_ng_template_1_ng_container_0_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelement(1, "i", 12);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r18 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", ctx_r18.defaultSort.sortDir === ctx_r18.sortDir ? "fa-long-arrow-down" : "fa-long-arrow-up");
        }
    }
    function HeaderTableCellComponent_ng_template_1_ng_container_0_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 13);
        }
    }
    function HeaderTableCellComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 10);
            i0.ɵɵtemplate(2, HeaderTableCellComponent_ng_template_1_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 2);
            i0.ɵɵtemplate(3, HeaderTableCellComponent_ng_template_1_ng_container_0_ng_template_3_Template, 1, 0, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r19 = i0.ɵɵreference(4);
            var sortColumnValue_r16 = i0.ɵɵnextContext().sortColumnValue;
            var ctx_r17 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r17.defaultSort && sortColumnValue_r16 === ctx_r17.defaultSort.sortColumn)("ngIfElse", _r19);
        }
    }
    function HeaderTableCellComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, HeaderTableCellComponent_ng_template_1_ng_container_0_Template, 5, 2, "ng-container", 9);
        }
        if (rf & 2) {
            var sortableStatus_r15 = ctx.sortableStatus;
            i0.ɵɵproperty("ngIf", sortableStatus_r15 !== false);
        }
    }
    var HeaderTableCellComponent = /** @class */ (function () {
        function HeaderTableCellComponent() {
            this.theadLabel = [];
            this.theadSortConfig = [];
            this.sort = new i0.EventEmitter();
            // default value for sorting is DEC
            this.sortDir = SortOrder.DESC;
            this.isSortingStart = [];
        }
        HeaderTableCellComponent.prototype.ngOnInit = function () {
            if (this.defaultSort) {
                this.sort.emit({ sortDirection: this.defaultSort.sortDir, column: this.defaultSort.sortColumn });
            }
        };
        HeaderTableCellComponent.prototype.onSortClick = function (index) {
            // TODO :default value must be have sorting-start class
            // Todo : class name must be set by user
            // we need to have array of sorting element
            var sortingList = this.sortingList.toArray();
            // we have disableHeader, in sortingList we dont count disable one so i need to counting index
            var disableCount = this.theadLabel.length - sortingList.length;
            var filterIcon = sortingList[index - disableCount].nativeElement.querySelector('.filter-icon');
            // we have situation to disable sorting so we need to check filterIcon
            if (filterIcon) {
                var filterIconClassList = filterIcon.classList;
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
        };
        return HeaderTableCellComponent;
    }());
    HeaderTableCellComponent.ɵfac = function HeaderTableCellComponent_Factory(t) { return new (t || HeaderTableCellComponent)(); };
    HeaderTableCellComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderTableCellComponent, selectors: [["header-table-cell"]], viewQuery: function HeaderTableCellComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, true);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sortingList = _t);
            }
        }, inputs: { theadLabel: "theadLabel", theadSortConfig: "theadSortConfig", defaultSort: "defaultSort" }, outputs: { sort: "sort" }, decls: 3, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["sortingIcon", ""], [4, "ngIf", "ngIfElse"], ["disableHeader", ""], [1, "d-flex", 3, "ngClass", "click"], ["sortingList", ""], [1, "mr-auto", "title-header"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "disable-header"], [4, "ngIf"], [1, "filter-box"], ["haveNoDefault", ""], [1, "filter-icon", "fal", 3, "ngClass"], [1, "filter-icon", "fal", "fa-sort-alt"]], template: function HeaderTableCellComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, HeaderTableCellComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
                i0.ɵɵtemplate(1, HeaderTableCellComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngForOf", ctx.theadLabel);
            }
        }, directives: [i1$1.NgForOf, i1$1.NgIf, i1$1.NgClass, i1$1.NgTemplateOutlet], styles: ["header-table-cell{display:table-row}  .filter-icon{cursor:pointer;height:20px;width:20px}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HeaderTableCellComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'header-table-cell',
                        templateUrl: './header-table-cell.component.html',
                        styleUrls: ['./header-table-cell.component.css']
                    }]
            }], null, { sortingList: [{
                    type: i0.ViewChildren,
                    args: ['sortingList']
                }], theadLabel: [{
                    type: i0.Input
                }], theadSortConfig: [{
                    type: i0.Input
                }], defaultSort: [{
                    type: i0.Input
                }], sort: [{
                    type: i0.Output
                }] });
    })();

    var TextColumnComponent = /** @class */ (function () {
        function TextColumnComponent() {
        }
        TextColumnComponent.prototype.ngOnInit = function () {
        };
        return TextColumnComponent;
    }());
    TextColumnComponent.ɵfac = function TextColumnComponent_Factory(t) { return new (t || TextColumnComponent)(); };
    TextColumnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TextColumnComponent, selectors: [["text-column"]], inputs: { value: "value", row: "row" }, decls: 2, vars: 1, template: function TextColumnComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "span");
                i0.ɵɵtext(1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", ctx.value, "\n");
            }
        }, styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TextColumnComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'text-column',
                        templateUrl: './text-column.component.html',
                        styleUrls: ['./text-column.component.css']
                    }]
            }], function () { return []; }, { value: [{
                    type: i0.Input,
                    args: ['value']
                }], row: [{
                    type: i0.Input,
                    args: ['row']
                }] });
    })();

    var BooleanColumnComponent = /** @class */ (function () {
        function BooleanColumnComponent() {
        }
        BooleanColumnComponent.prototype.ngOnInit = function () {
        };
        return BooleanColumnComponent;
    }());
    BooleanColumnComponent.ɵfac = function BooleanColumnComponent_Factory(t) { return new (t || BooleanColumnComponent)(); };
    BooleanColumnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BooleanColumnComponent, selectors: [["boolean-column"]], inputs: { value: "value", row: "row" }, decls: 2, vars: 1, template: function BooleanColumnComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "span");
                i0.ɵɵtext(1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate(ctx.value);
            }
        }, styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(BooleanColumnComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'boolean-column',
                        templateUrl: './boolean-column.component.html',
                        styleUrls: ['./boolean-column.component.css']
                    }]
            }], function () { return []; }, { value: [{
                    type: i0.Input,
                    args: ['value']
                }], row: [{
                    type: i0.Input,
                    args: ['row']
                }] });
    })();

    var _c0$1 = function (a0) { return { "max-width.px": a0 }; };
    var ImageColumnComponent = /** @class */ (function () {
        function ImageColumnComponent() {
            this.styles = {};
        }
        ImageColumnComponent.prototype.ngOnInit = function () {
        };
        return ImageColumnComponent;
    }());
    ImageColumnComponent.ɵfac = function ImageColumnComponent_Factory(t) { return new (t || ImageColumnComponent)(); };
    ImageColumnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ImageColumnComponent, selectors: [["image-column"]], inputs: { value: "value", row: "row" }, decls: 1, vars: 9, consts: [[3, "src", "alt", "ngClass", "ngStyle"]], template: function ImageColumnComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "img", 0);
            }
            if (rf & 2) {
                i0.ɵɵclassMapInterpolate1("img-thumbnail ", "float-" + ctx.row.float, "");
                i0.ɵɵpropertyInterpolate("src", ctx.value, i0.ɵɵsanitizeUrl);
                i0.ɵɵpropertyInterpolate("alt", ctx.row.alt);
                i0.ɵɵproperty("ngClass", ctx.row.customClass ? ctx.row.customClass : "")("ngStyle", i0.ɵɵpureFunction1(7, _c0$1, ctx.row.maxWidth));
            }
        }, directives: [i1$1.NgClass, i1$1.NgStyle], styles: [".float-none[_ngcontent-%COMP%]{display:block!important;margin-left:auto!important;margin-right:auto!important}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ImageColumnComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'image-column',
                        templateUrl: './image-column.component.html',
                        styleUrls: ['./image-column.component.css']
                    }]
            }], function () { return []; }, { value: [{
                    type: i0.Input,
                    args: ['value']
                }], row: [{
                    type: i0.Input,
                    args: ['row']
                }] });
    })();

    var _c0$2 = function (a0) { return { "color": a0 }; };
    function IconColumnComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "span", 1);
            i0.ɵɵelementStart(2, "i", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var icon_r1 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", icon_r1.customClass)("tooltip", icon_r1.tooltip.tooltipText)("delay", icon_r1.tooltip.delay)("isDisabled", icon_r1.tooltip.isDisabled)("tooltipAnimation", icon_r1.tooltip.tooltipAnimation)("placement", icon_r1.tooltip.hasOwnProperty("placement") ? icon_r1.tooltip.placement : "top");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", icon_r1.icon)("ngStyle", i0.ɵɵpureFunction1(9, _c0$2, icon_r1.color));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(icon_r1.name);
        }
    }
    var IconColumnComponent = /** @class */ (function () {
        function IconColumnComponent() {
        }
        IconColumnComponent.prototype.ngOnInit = function () {
        };
        return IconColumnComponent;
    }());
    IconColumnComponent.ɵfac = function IconColumnComponent_Factory(t) { return new (t || IconColumnComponent)(); };
    IconColumnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: IconColumnComponent, selectors: [["icon-column"]], inputs: { value: "value", row: "row" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "mr-2", 3, "ngClass", "tooltip", "delay", "isDisabled", "tooltipAnimation", "placement"], [3, "ngClass", "ngStyle"]], template: function IconColumnComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, IconColumnComponent_ng_container_0_Template, 4, 11, "ng-container", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngForOf", ctx.row.icons);
            }
        }, directives: [i1$1.NgForOf, i1$1.NgClass, i2.TooltipDirective, i1$1.NgStyle], styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(IconColumnComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'icon-column',
                        templateUrl: './icon-column.component.html',
                        styleUrls: ['./icon-column.component.css']
                    }]
            }], function () { return []; }, { value: [{
                    type: i0.Input,
                    args: ['value']
                }], row: [{
                    type: i0.Input,
                    args: ['row']
                }] });
    })();

    function CustomColumnComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c0$3 = function (a0, a1, a2) { return { value: a0, row: a1, column: a2 }; };
    var CustomColumnComponent = /** @class */ (function () {
        function CustomColumnComponent() {
        }
        CustomColumnComponent.prototype.ngOnInit = function () {
        };
        return CustomColumnComponent;
    }());
    CustomColumnComponent.ɵfac = function CustomColumnComponent_Factory(t) { return new (t || CustomColumnComponent)(); };
    CustomColumnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CustomColumnComponent, selectors: [["custom-column"]], inputs: { value: "value", row: "row", column: "column" }, decls: 1, vars: 6, consts: [[4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function CustomColumnComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, CustomColumnComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngTemplateOutlet", ctx.row.customTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c0$3, ctx.value, ctx.row, ctx.column));
            }
        }, directives: [i1$1.NgTemplateOutlet], styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CustomColumnComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'custom-column',
                        templateUrl: './custom-column.component.html',
                        styleUrls: ['./custom-column.component.css']
                    }]
            }], function () { return []; }, { value: [{
                    type: i0.Input,
                    args: ['value']
                }], row: [{
                    type: i0.Input,
                    args: ['row']
                }], column: [{
                    type: i0.Input,
                    args: ['column']
                }] });
    })();

    var DateFormatPipe = /** @class */ (function () {
        function DateFormatPipe() {
        }
        DateFormatPipe.prototype.transform = function (data, format) {
            return moment__namespace(data).format(format);
        };
        return DateFormatPipe;
    }());
    DateFormatPipe.ɵfac = function DateFormatPipe_Factory(t) { return new (t || DateFormatPipe)(); };
    DateFormatPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "dateFormat", type: DateFormatPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DateFormatPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'dateFormat',
                    }]
            }], null, null);
    })();

    function DateColumnComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "date");
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, ctx_r0.value, ctx_r0.row.dateFormat), " ");
        }
    }
    function DateColumnComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0);
            i0.ɵɵpipe(1, "dateFormat");
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(1, 1, ctx_r2.value, ctx_r2.row.dateFormat), " ");
        }
    }
    var pipeFormatEnum;
    (function (pipeFormatEnum) {
        pipeFormatEnum["date"] = "date";
        pipeFormatEnum["Moment"] = "Moment";
    })(pipeFormatEnum || (pipeFormatEnum = {}));
    var DateColumnComponent = /** @class */ (function () {
        function DateColumnComponent() {
        }
        DateColumnComponent.prototype.ngOnInit = function () {
        };
        Object.defineProperty(DateColumnComponent.prototype, "pipeFormat", {
            /**
             * @method  access to enum data
             */
            get: function () {
                return pipeFormatEnum;
            },
            enumerable: false,
            configurable: true
        });
        return DateColumnComponent;
    }());
    DateColumnComponent.ɵfac = function DateColumnComponent_Factory(t) { return new (t || DateColumnComponent)(); };
    DateColumnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateColumnComponent, selectors: [["date-column"]], inputs: { value: "value", row: "row" }, decls: 4, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["moment", ""]], template: function DateColumnComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "span");
                i0.ɵɵtemplate(1, DateColumnComponent_ng_container_1_Template, 3, 4, "ng-container", 0);
                i0.ɵɵtemplate(2, DateColumnComponent_ng_template_2_Template, 2, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(3);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.row.pipeFormat == ctx.pipeFormat.date)("ngIfElse", _r1);
            }
        }, directives: [i1$1.NgIf], pipes: [i1$1.DatePipe, DateFormatPipe], styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DateColumnComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'date-column',
                        templateUrl: './date-column.component.html',
                        styleUrls: ['./date-column.component.css']
                    }]
            }], function () { return []; }, { value: [{
                    type: i0.Input,
                    args: ['value']
                }], row: [{
                    type: i0.Input,
                    args: ['row']
                }] });
    })();

    function StatusColumnComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1, "Active");
            i0.ɵɵelementEnd();
        }
    }
    function StatusColumnComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1, "Inactive");
            i0.ɵɵelementEnd();
        }
    }
    function StatusColumnComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1, "In progress");
            i0.ɵɵelementEnd();
        }
    }
    var _c0$4 = function (a0) { return { "color": a0 }; };
    var statusState;
    (function (statusState) {
        statusState[statusState["active"] = 1] = "active";
        statusState[statusState["inactive"] = 0] = "inactive";
        statusState[statusState["inProgress"] = 2] = "inProgress";
    })(statusState || (statusState = {}));
    var StatusColumnComponent = /** @class */ (function () {
        function StatusColumnComponent() {
        }
        StatusColumnComponent.prototype.ngOnInit = function () {
        };
        Object.defineProperty(StatusColumnComponent.prototype, "statusState", {
            /**
             * @method access to enum data
             */
            get: function () {
                return statusState;
            },
            enumerable: false,
            configurable: true
        });
        return StatusColumnComponent;
    }());
    StatusColumnComponent.ɵfac = function StatusColumnComponent_Factory(t) { return new (t || StatusColumnComponent)(); };
    StatusColumnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: StatusColumnComponent, selectors: [["status-column"]], inputs: { value: "value", row: "row" }, decls: 6, vars: 8, consts: [[3, "ngStyle"], [3, "ngClass"], [3, "ngSwitch"], [4, "ngSwitchCase"]], template: function StatusColumnComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "span", 0);
                i0.ɵɵelement(1, "i", 1);
                i0.ɵɵelementContainerStart(2, 2);
                i0.ɵɵtemplate(3, StatusColumnComponent_span_3_Template, 2, 0, "span", 3);
                i0.ɵɵtemplate(4, StatusColumnComponent_span_4_Template, 2, 0, "span", 3);
                i0.ɵɵtemplate(5, StatusColumnComponent_span_5_Template, 2, 0, "span", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(6, _c0$4, ctx.row.color));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngClass", ctx.row.icon);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitch", ctx.value);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", ctx.statusState.active);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", ctx.statusState.inactive);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", ctx.statusState.inProgress);
            }
        }, directives: [i1$1.NgStyle, i1$1.NgClass, i1$1.NgSwitch, i1$1.NgSwitchCase], styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(StatusColumnComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'status-column',
                        templateUrl: './status-column.component.html',
                        styleUrls: ['./status-column.component.css']
                    }]
            }], function () { return []; }, { value: [{
                    type: i0.Input,
                    args: ['value']
                }], row: [{
                    type: i0.Input,
                    args: ['row']
                }] });
    })();

    var ActionClassPipe = /** @class */ (function () {
        function ActionClassPipe() {
        }
        ActionClassPipe.prototype.transform = function (data) {
            if (data.hasOwnProperty('margin')) {
                return 'm' + data.margin;
            }
            else if (data.hasOwnProperty('marginRight')) {
                return 'mr-' + data.marginRight;
            }
            else if (data.hasOwnProperty('marginLeft')) {
                return 'ml-' + data.marginLeft;
            }
        };
        return ActionClassPipe;
    }());
    ActionClassPipe.ɵfac = function ActionClassPipe_Factory(t) { return new (t || ActionClassPipe)(); };
    ActionClassPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "actionBtnClass", type: ActionClassPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ActionClassPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'actionBtnClass',
                    }]
            }], null, null);
    })();

    var RowChangeNamePipe = /** @class */ (function () {
        function RowChangeNamePipe() {
        }
        RowChangeNamePipe.prototype.transform = function (rowData, value) {
            if (typeof (value) !== "string")
                return value(rowData);
            return value;
        };
        return RowChangeNamePipe;
    }());
    RowChangeNamePipe.ɵfac = function RowChangeNamePipe_Factory(t) { return new (t || RowChangeNamePipe)(); };
    RowChangeNamePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "rowChangeName", type: RowChangeNamePipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RowChangeNamePipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'rowChangeName',
                    }]
            }], null, null);
    })();

    function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_i_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i");
        }
        if (rf & 2) {
            var action_r2 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵclassMap(action_r2.dropDownIcon);
        }
    }
    function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_ng_container_1_i_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i");
            i0.ɵɵpipe(1, "rowChangeName");
        }
        if (rf & 2) {
            var dropDownOption_r12 = i0.ɵɵnextContext().$implicit;
            var ctx_r14 = i0.ɵɵnextContext(6);
            i0.ɵɵclassMap(i0.ɵɵpipeBind2(1, 3, ctx_r14.column, dropDownOption_r12.icon));
        }
    }
    function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_ng_container_1_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 14);
        }
    }
    function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "li", 11);
            i0.ɵɵelementStart(2, "a", 12);
            i0.ɵɵlistener("click", function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_ng_container_1_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r18_1); var dropDownOption_r12 = ctx.$implicit; var ctx_r17 = i0.ɵɵnextContext(6); return dropDownOption_r12.onclick(ctx_r17.column); });
            i0.ɵɵtemplate(3, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_ng_container_1_i_3_Template, 2, 6, "i", 7);
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "rowChangeName");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_ng_container_1_div_6_Template, 1, 0, "div", 13);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var dropDownOption_r12 = ctx.$implicit;
            var ctx_r11 = i0.ɵɵnextContext(6);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", dropDownOption_r12.customClass);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", dropDownOption_r12.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(5, 4, ctx_r11.column, dropDownOption_r12.name), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", dropDownOption_r12.dropdownDivider);
        }
    }
    function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 10);
            i0.ɵɵtemplate(1, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_ng_container_1_Template, 7, 7, "ng-container", 1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var action_r2 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", action_r2.dropDownItems);
        }
    }
    var _c0$5 = function (a0) { return { "padding": a0 }; };
    function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "span", 5);
            i0.ɵɵelementStart(2, "button", 6);
            i0.ɵɵpipe(3, "actionBtnClass");
            i0.ɵɵtemplate(4, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_i_4_Template, 1, 3, "i", 7);
            i0.ɵɵtext(5);
            i0.ɵɵelement(6, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_Template, 2, 1, "ul", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var action_r2 = i0.ɵɵnextContext(2).$implicit;
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("btn dropdown-toggle ", action_r2.customClass, "");
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(9, _c0$5, ctx_r5.row.buttonPadding))("ngClass", i0.ɵɵpipeBind1(3, 7, action_r2));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", action_r2.dropDownIcon);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", action_r2.name, " ");
        }
    }
    function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "span");
        }
        if (rf & 2) {
            var action_r2 = i0.ɵɵnextContext(3).$implicit;
            var ctx_r21 = i0.ɵɵnextContext(2);
            i0.ɵɵclassMap(action_r2.classCallback(ctx_r21.column));
        }
    }
    function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_i_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 17);
        }
        if (rf & 2) {
            var action_r2 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵproperty("ngClass", action_r2.icon);
        }
    }
    function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_span_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var action_r2 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", action_r2.name, "");
        }
    }
    function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r28_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 15);
            i0.ɵɵlistener("click", function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r28_1); var action_r2 = i0.ɵɵnextContext(2).$implicit; var ctx_r27 = i0.ɵɵnextContext(2); return action_r2.onclick(ctx_r27.column); });
            i0.ɵɵpipe(1, "actionBtnClass");
            i0.ɵɵtemplate(2, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_span_2_Template, 1, 2, "span", 7);
            i0.ɵɵtemplate(3, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_i_3_Template, 1, 1, "i", 16);
            i0.ɵɵtemplate(4, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_span_4_Template, 2, 1, "span", 0);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var action_r2 = i0.ɵɵnextContext(2).$implicit;
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵclassMap(i0.ɵɵpipeBind1(1, 12, action_r2));
            i0.ɵɵproperty("tooltip", action_r2.tooltip ? action_r2.tooltip.tooltipText : "")("placement", action_r2.tooltip ? action_r2.tooltip.placement : "")("delay", action_r2.tooltip ? action_r2.tooltip.delay : "")("ngStyle", i0.ɵɵpureFunction1(14, _c0$5, ctx_r7.row.buttonPadding))("isDisabled", action_r2.tooltip ? action_r2.tooltip.isDisabled : "")("tooltipAnimation", action_r2.tooltip ? action_r2.tooltip.tooltipAnimation : "")("ngClass", action_r2.customClass);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", action_r2.classCallback(ctx_r7.column));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", action_r2.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", action_r2.name);
        }
    }
    function ActionColumnComponent_ng_container_1_span_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_Template, 8, 11, "ng-container", 3);
            i0.ɵɵtemplate(2, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_Template, 5, 16, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r6 = i0.ɵɵreference(3);
            var action_r2 = i0.ɵɵnextContext().$implicit;
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", action_r2.buttonType == ctx_r3.buttonType.DropDownButton)("ngIfElse", _r6);
        }
    }
    var _c1$1 = function (a0) { return { row: a0 }; };
    function ActionColumnComponent_ng_container_1_span_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0, 18);
        }
        if (rf & 2) {
            var action_r2 = i0.ɵɵnextContext().$implicit;
            var ctx_r4 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngTemplateOutlet", action_r2.customTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1$1, ctx_r4.column));
        }
    }
    function ActionColumnComponent_ng_container_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtemplate(1, ActionColumnComponent_ng_container_1_span_1_ng_container_1_Template, 4, 2, "ng-container", 0);
            i0.ɵɵtemplate(2, ActionColumnComponent_ng_container_1_span_1_ng_container_2_Template, 1, 4, "ng-container", 2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var action_r2 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !action_r2.customTemplate);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", action_r2.customTemplate);
        }
    }
    function ActionColumnComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, ActionColumnComponent_ng_container_1_span_1_Template, 3, 2, "span", 1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r0.row.buttonItems);
        }
    }
    var buttonTypeEnum;
    (function (buttonTypeEnum) {
        buttonTypeEnum["DropDownButton"] = "DropDownButton";
        buttonTypeEnum["simpleButton"] = "simpleButton";
    })(buttonTypeEnum || (buttonTypeEnum = {}));
    var ActionColumnComponent = /** @class */ (function () {
        function ActionColumnComponent() {
        }
        ActionColumnComponent.prototype.ngOnInit = function () {
        };
        Object.defineProperty(ActionColumnComponent.prototype, "buttonType", {
            /**
             *  @method  access to enum data
             */
            get: function () {
                return buttonTypeEnum;
            },
            enumerable: false,
            configurable: true
        });
        return ActionColumnComponent;
    }());
    ActionColumnComponent.ɵfac = function ActionColumnComponent_Factory(t) { return new (t || ActionColumnComponent)(); };
    ActionColumnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ActionColumnComponent, selectors: [["action-column"]], inputs: { value: "value", row: "row", column: "column" }, decls: 2, vars: 4, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["simpleButton", ""], ["dropdown", "", 1, "btn-group"], ["id", "button-basic", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-custom-html", 3, "ngStyle", "ngClass"], [3, "class", 4, "ngIf"], [1, "caret"], ["id", "dropdown-basic", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-basic", 4, "dropdownMenu"], ["id", "dropdown-basic", "role", "menu", "aria-labelledby", "button-basic", 1, "dropdown-menu"], ["role", "menuitem"], [1, "dropdown-item", 3, "ngClass", "click"], ["class", "dropdown-divider", 4, "ngIf"], [1, "dropdown-divider"], [1, "btn", 3, "tooltip", "placement", "delay", "ngStyle", "isDisabled", "tooltipAnimation", "ngClass", "click"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function ActionColumnComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div");
                i0.ɵɵtemplate(1, ActionColumnComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵclassMap("text-" + ctx.row.position);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.row.buttonItems);
            }
        }, directives: [i1$1.NgIf, i1$1.NgForOf, i2$1.BsDropdownDirective, i2$1.BsDropdownToggleDirective, i1$1.NgStyle, i1$1.NgClass, i2$1.BsDropdownMenuDirective, i2.TooltipDirective, i1$1.NgTemplateOutlet], pipes: [ActionClassPipe, RowChangeNamePipe], styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ActionColumnComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'action-column',
                        templateUrl: './action-column.component.html',
                        styleUrls: ['./action-column.component.css']
                    }]
            }], function () { return []; }, { value: [{
                    type: i0.Input,
                    args: ['value']
                }], row: [{
                    type: i0.Input,
                    args: ['row']
                }], column: [{
                    type: i0.Input,
                    args: ['column']
                }] });
    })();

    var LinkColumnComponent = /** @class */ (function () {
        function LinkColumnComponent() {
        }
        LinkColumnComponent.prototype.ngOnInit = function () {
        };
        return LinkColumnComponent;
    }());
    LinkColumnComponent.ɵfac = function LinkColumnComponent_Factory(t) { return new (t || LinkColumnComponent)(); };
    LinkColumnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LinkColumnComponent, selectors: [["link-column"]], inputs: { value: "value", row: "row", column: "column" }, decls: 2, vars: 1, consts: [[3, "click"]], template: function LinkColumnComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "span", 0);
                i0.ɵɵlistener("click", function LinkColumnComponent_Template_span_click_0_listener() { return ctx.row.onclick(ctx.column); });
                i0.ɵɵtext(1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", ctx.value, "\n");
            }
        }, styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LinkColumnComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'link-column',
                        templateUrl: './link-column.component.html',
                        styleUrls: ['./link-column.component.css']
                    }]
            }], function () { return []; }, { value: [{
                    type: i0.Input,
                    args: ['value']
                }], row: [{
                    type: i0.Input,
                    args: ['row']
                }], column: [{
                    type: i0.Input,
                    args: ['column']
                }] });
    })();

    var _c0$6 = ["readMoreTemplate"];
    var _c1$2 = function (a0, a1) { return [a0, a1]; };
    function ReadMoreColumnComponent_i_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 3);
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c1$2, ctx_r0.row.iconName ? ctx_r0.row.iconName : "", ctx_r0.addClass ? "rotate" : ""));
        }
    }
    function ReadMoreColumnComponent_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r1.row.btnName);
        }
    }
    var ReadMoreColumnComponent = /** @class */ (function () {
        function ReadMoreColumnComponent(gridFactoryService) {
            this.gridFactoryService = gridFactoryService;
            this.readMoreData = new i0.EventEmitter();
            this.collapsedNotifier = new i0.EventEmitter();
            this.addClass = false;
            this.isCollapsed = [];
        }
        /**
         * call read more service
         */
        ReadMoreColumnComponent.prototype.generateReadMoreService = function () {
            var _this = this;
            /**
             * we have to send request just in first time in other situation we must just toggle
             */
            this.cloneDataObservable = undefined;
            var url = "" + this.row.url;
            url = url.replace('{{value}}', this.value);
            var service = this.gridFactoryService.CreateGridService(this.row.modelType);
            /**
             * http service generator
             */
            service.getData(url).pipe(operators.take(1)).subscribe(function (res) {
                _this.cloneDataObservable = res;
                _this.readMoreData.emit({ data: res, id: _this.value, tableConfig: _this.row.tableConfig });
            });
        };
        /**
         * it trigger collapsed and emit it to grid component to show and hide data
         * @param id {number}- which item click
         */
        ReadMoreColumnComponent.prototype.triggerCollapsed = function (id) {
            this.addClass = !this.addClass;
            // if first time we must send request else we just collapsed
            if (this.cloneDataObservable === undefined && this.isCollapsed[id] == undefined) {
                this.generateReadMoreService();
            }
            this.collapsedNotifier.emit({ id: id, state: !this.isCollapsed[id] });
            // @ts-ignore
            this.isCollapsed[id] = !this.isCollapsed[id];
        };
        return ReadMoreColumnComponent;
    }());
    ReadMoreColumnComponent.ɵfac = function ReadMoreColumnComponent_Factory(t) { return new (t || ReadMoreColumnComponent)(i0.ɵɵdirectiveInject(GridFactoryService)); };
    ReadMoreColumnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ReadMoreColumnComponent, selectors: [["read-more-column"]], viewQuery: function ReadMoreColumnComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵstaticViewQuery(_c0$6, true);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.readMoreTemplate = _t.first);
            }
        }, inputs: { value: "value", row: "row", column: "column" }, outputs: { readMoreData: "readMoreData", collapsedNotifier: "collapsedNotifier" }, decls: 3, vars: 3, consts: [["role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 3, "ngClass", "click"], ["class", "read-more-icon", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "read-more-icon", 3, "ngClass"]], template: function ReadMoreColumnComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "a", 0);
                i0.ɵɵlistener("click", function ReadMoreColumnComponent_Template_a_click_0_listener() { return ctx.triggerCollapsed(ctx.column.id); });
                i0.ɵɵtemplate(1, ReadMoreColumnComponent_i_1_Template, 1, 4, "i", 1);
                i0.ɵɵtemplate(2, ReadMoreColumnComponent_span_2_Template, 2, 1, "span", 2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.row.btnClass ? ctx.row.btnClass : "");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.row.iconName);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.row.btnName);
            }
        }, directives: [i1$1.NgClass, i1$1.NgIf], styles: [".rotate[_ngcontent-%COMP%]{transform:rotate(90deg)}.read-more-icon[_ngcontent-%COMP%], .rotate[_ngcontent-%COMP%]{transition:.9s}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ReadMoreColumnComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'read-more-column',
                        templateUrl: './read-more-column.component.html',
                        styleUrls: ['./read-more-column.component.css']
                    }]
            }], function () { return [{ type: GridFactoryService }]; }, { value: [{
                    type: i0.Input,
                    args: ['value']
                }], row: [{
                    type: i0.Input,
                    args: ['row']
                }], column: [{
                    type: i0.Input,
                    args: ['column']
                }], readMoreData: [{
                    type: i0.Output
                }], collapsedNotifier: [{
                    type: i0.Output
                }], readMoreTemplate: [{
                    type: i0.ViewChild,
                    args: ['readMoreTemplate', { static: true }]
                }] });
    })();

    var RowClassCallbackPipe = /** @class */ (function () {
        function RowClassCallbackPipe() {
        }
        RowClassCallbackPipe.prototype.transform = function (rowData, value) {
            if (value) {
                var cssClass = value(rowData);
                return cssClass;
            }
        };
        return RowClassCallbackPipe;
    }());
    RowClassCallbackPipe.ɵfac = function RowClassCallbackPipe_Factory(t) { return new (t || RowClassCallbackPipe)(); };
    RowClassCallbackPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "RowClassCallback", type: RowClassCallbackPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RowClassCallbackPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'RowClassCallback',
                    }]
            }], null, null);
    })();

    var NestedJsonPipe = /** @class */ (function () {
        function NestedJsonPipe() {
        }
        NestedJsonPipe.prototype.transform = function (data, value) {
            return _.get(data, value);
        };
        return NestedJsonPipe;
    }());
    NestedJsonPipe.ɵfac = function NestedJsonPipe_Factory(t) { return new (t || NestedJsonPipe)(); };
    NestedJsonPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "nestedJson", type: NestedJsonPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NestedJsonPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'nestedJson',
                    }]
            }], null, null);
    })();

    // angular basic
    var _c0$7 = ["paginator"];
    function GridComponent_ng_container_6_ng_container_1_td_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c1$3 = function (a0, a1, a2) { return { value: a0, row: a1, column: a2 }; };
    function GridComponent_ng_container_6_ng_container_1_td_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td");
            i0.ɵɵtemplate(1, GridComponent_ng_container_6_ng_container_1_td_3_ng_container_1_Template, 1, 0, "ng-container", 12);
            i0.ɵɵpipe(2, "nestedJson");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var rowItem_r10 = ctx.$implicit;
            var rowItems_r7 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵnextContext(2);
            var _r4 = i0.ɵɵreference(12);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction3(5, _c1$3, i0.ɵɵpipeBind2(2, 2, rowItems_r7, rowItem_r10.value), rowItem_r10, rowItems_r7));
        }
    }
    function GridComponent_ng_container_6_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "tr", 10);
            i0.ɵɵpipe(2, "RowClassCallback");
            i0.ɵɵtemplate(3, GridComponent_ng_container_6_ng_container_1_td_3_Template, 3, 9, "td", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "tr", 11);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var rowItems_r7 = ctx.$implicit;
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpipeBind2(2, 4, rowItems_r7, ctx_r6.grid.rowClassCallback));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx_r6.columnData);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngbCollapse", !ctx_r6.isCollapsed[rowItems_r7["id"]])("id", rowItems_r7 && rowItems_r7["id"] ? "read-more" + rowItems_r7["id"] : "");
        }
    }
    function GridComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, GridComponent_ng_container_6_ng_container_1_Template, 5, 7, "ng-container", 9);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r0.rows));
        }
    }
    function GridComponent_ng_template_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 15);
            i0.ɵɵelementStart(1, "span", 16);
            i0.ɵɵtext(2, "Loading...");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function GridComponent_ng_template_7_p_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r14 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r14.grid.noDataMessage, " ");
        }
    }
    function GridComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 13);
            i0.ɵɵtemplate(1, GridComponent_ng_template_7_div_1_Template, 3, 0, "div", 14);
            i0.ɵɵtemplate(2, GridComponent_ng_template_7_p_2_Template, 2, 1, "p", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r2.dataLoading.value);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.rows.value.length == 0 && ctx_r2.dataLoading.value);
        }
    }
    function GridComponent_ng_container_10_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r19_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "ng-select", 24);
            i0.ɵɵlistener("change", function GridComponent_ng_container_10_ng_container_6_Template_ng_select_change_1_listener() { i0.ɵɵrestoreView(_r19_1); var ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.changePage(ctx_r18.firstPage); })("ngModelChange", function GridComponent_ng_container_10_ng_container_6_Template_ng_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r19_1); var ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.pageSize = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r16 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("items", ctx_r16.grid.pagination.itemPerPageSelectorOption)("searchable", false)("clearable", false)("ngModel", ctx_r16.pageSize);
        }
    }
    function GridComponent_ng_container_10_span_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 25);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r17 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate("Showing " + ctx_r17.numberOfDataStart + " - " + ctx_r17.numberOfDataEnd + " of " + ctx_r17.totalNumberOfData);
        }
    }
    function GridComponent_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
            var _r22_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 17);
            i0.ɵɵelementStart(2, "div", 18);
            i0.ɵɵelementStart(3, "ngb-pagination", 19, 20);
            i0.ɵɵlistener("pageChange", function GridComponent_ng_container_10_Template_ngb_pagination_pageChange_3_listener($event) { i0.ɵɵrestoreView(_r22_1); var ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.page = $event; })("pageChange", function GridComponent_ng_container_10_Template_ngb_pagination_pageChange_3_listener($event) { i0.ɵɵrestoreView(_r22_1); var ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.changePage($event); });
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
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("collectionSize", ctx_r3.totalNumberOfData)("page", ctx_r3.page)("pageSize", ctx_r3.pageSize)("maxSize", ctx_r3.grid.pagination.maxSize ? ctx_r3.grid.pagination.maxSize : 5)("rotate", ctx_r3.grid.pagination.rotate ? ctx_r3.grid.pagination.rotate : true)("boundaryLinks", ctx_r3.grid.pagination.boundaryLinks ? ctx_r3.grid.pagination.boundaryLinks : false);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx_r3.grid.pagination.itemPerPageSelectorOption && ctx_r3.grid.pagination.itemPerPageSelectorOption.length > 0);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx_r3.grid.pagination.hasOwnProperty("disableNumberOfData") || !ctx_r3.grid.pagination.disableNumberOfData);
        }
    }
    function GridComponent_ng_template_11_text_column_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "text-column", 30);
        }
        if (rf & 2) {
            var ctx_r37 = i0.ɵɵnextContext();
            var value_r25 = ctx_r37.value;
            var row_r24 = ctx_r37.row;
            i0.ɵɵproperty("value", value_r25)("row", row_r24);
        }
    }
    function GridComponent_ng_template_11_boolean_column_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "boolean-column", 30);
        }
        if (rf & 2) {
            var ctx_r38 = i0.ɵɵnextContext();
            var value_r25 = ctx_r38.value;
            var row_r24 = ctx_r38.row;
            i0.ɵɵproperty("value", value_r25)("row", row_r24);
        }
    }
    function GridComponent_ng_template_11_image_column_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "image-column", 30);
        }
        if (rf & 2) {
            var ctx_r39 = i0.ɵɵnextContext();
            var value_r25 = ctx_r39.value;
            var row_r24 = ctx_r39.row;
            i0.ɵɵproperty("value", value_r25)("row", row_r24);
        }
    }
    function GridComponent_ng_template_11_icon_column_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "icon-column", 30);
        }
        if (rf & 2) {
            var ctx_r40 = i0.ɵɵnextContext();
            var value_r25 = ctx_r40.value;
            var row_r24 = ctx_r40.row;
            i0.ɵɵproperty("value", value_r25)("row", row_r24);
        }
    }
    function GridComponent_ng_template_11_custom_column_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "custom-column", 31);
        }
        if (rf & 2) {
            var ctx_r41 = i0.ɵɵnextContext();
            var value_r25 = ctx_r41.value;
            var row_r24 = ctx_r41.row;
            var column_r26 = ctx_r41.column;
            i0.ɵɵproperty("value", value_r25)("row", row_r24)("column", column_r26);
        }
    }
    function GridComponent_ng_template_11_date_column_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "date-column", 30);
        }
        if (rf & 2) {
            var ctx_r42 = i0.ɵɵnextContext();
            var value_r25 = ctx_r42.value;
            var row_r24 = ctx_r42.row;
            i0.ɵɵproperty("value", value_r25)("row", row_r24);
        }
    }
    function GridComponent_ng_template_11_status_column_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "status-column", 30);
        }
        if (rf & 2) {
            var ctx_r43 = i0.ɵɵnextContext();
            var value_r25 = ctx_r43.value;
            var row_r24 = ctx_r43.row;
            i0.ɵɵproperty("value", value_r25)("row", row_r24);
        }
    }
    function GridComponent_ng_template_11_action_column_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "action-column", 31);
        }
        if (rf & 2) {
            var ctx_r44 = i0.ɵɵnextContext();
            var value_r25 = ctx_r44.value;
            var row_r24 = ctx_r44.row;
            var column_r26 = ctx_r44.column;
            i0.ɵɵproperty("value", value_r25)("row", row_r24)("column", column_r26);
        }
    }
    function GridComponent_ng_template_11_link_column_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "link-column", 31);
        }
        if (rf & 2) {
            var ctx_r45 = i0.ɵɵnextContext();
            var value_r25 = ctx_r45.value;
            var row_r24 = ctx_r45.row;
            var column_r26 = ctx_r45.column;
            i0.ɵɵproperty("value", value_r25)("row", row_r24)("column", column_r26);
        }
    }
    function GridComponent_ng_template_11_read_more_column_10_Template(rf, ctx) {
        if (rf & 1) {
            var _r47_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "read-more-column", 32);
            i0.ɵɵlistener("readMoreData", function GridComponent_ng_template_11_read_more_column_10_Template_read_more_column_readMoreData_0_listener($event) { i0.ɵɵrestoreView(_r47_1); var ctx_r46 = i0.ɵɵnextContext(2); return ctx_r46.showReadMore($event); })("collapsedNotifier", function GridComponent_ng_template_11_read_more_column_10_Template_read_more_column_collapsedNotifier_0_listener($event) { i0.ɵɵrestoreView(_r47_1); var ctx_r48 = i0.ɵɵnextContext(2); return ctx_r48.triggerCollapsed($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r49 = i0.ɵɵnextContext();
            var value_r25 = ctx_r49.value;
            var column_r26 = ctx_r49.column;
            var row_r24 = ctx_r49.row;
            i0.ɵɵproperty("value", value_r25)("column", column_r26)("row", row_r24);
        }
    }
    function GridComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
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
        }
        if (rf & 2) {
            var row_r24 = ctx.row;
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
        }
    }
    var GridComponent = /** @class */ (function () {
        function GridComponent(gridFactoryService, gridActionsNotifier, cdRef, viewContainerRef) {
            this.gridFactoryService = gridFactoryService;
            this.gridActionsNotifier = gridActionsNotifier;
            this.cdRef = cdRef;
            this.grid = new Grid();
            this.refreshGrid = new rxjs.BehaviorSubject(false);
            // general
            this.subscription = new rxjs.Subscription();
            // read only
            this.firstPage = 1;
            this.defaultItemsPerPage = 10;
            this.withoutSort = 'withoutSort';
            this.tHeadLabels = [];
            this.tHeadSortConfig = [];
            this.columnData = [];
            this.rows = new rxjs.BehaviorSubject([]);
            // read more
            this.readMoreValue = [];
            this.readMoreHeader = [];
            this.isCollapsed = [];
            // loading
            this.dataLoading = new rxjs.BehaviorSubject(false);
            // pagination
            this.page = this.firstPage;
            this.pageSize = this.defaultItemsPerPage;
            this.requestUrl = '';
            this.params = new i1.HttpParams();
            this.requestSubject$ = new rxjs.BehaviorSubject(false);
            this.viewContainerRef = viewContainerRef;
            this.gridService = this.gridFactoryService.CreateGridService(this.grid.modelType);
        }
        GridComponent.prototype.ngAfterViewInit = function () {
        };
        GridComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.pageSize = this.grid.pagination.itemsPerPage;
            this.requestUrl = this.grid.baseUrl + "/" + this.grid.relativeGetMethodUrl;
            this.setColumns();
            // in page load we dont need sort so make service call without sorting
            if (!this.grid.defaultSort) {
                this.makeGridService(this.page, this.pageSize);
            }
            this.simpleSearch();
            this.refreshGrid.subscribe(function (res) {
                if (res) {
                    _this.makeGridService(_this.page, _this.pageSize);
                    _this.refreshGrid.next(false);
                }
            });
            this.subscription.add(this.requestSubject$.pipe(operators.switchMap(function (res) {
                if (res) {
                    return _this.gridService.getData(_this.requestUrl, _this.params);
                }
                return rxjs.empty();
            })).subscribe(function (res) {
                _this.bindGrid(res);
            }));
        };
        /**
         * this method should bind grid we have different situation to bind grid for example search pagination and...
         * so we have method get
         * @param gridRows(data)
         * and fill variable we need
         */
        GridComponent.prototype.bindGrid = function (gridRows) {
            /**
             * @method markForCheck its for ChangeDetectionStrategy OnPush
             */
            this.cdRef.markForCheck();
            this.rows.next(gridRows.hasOwnProperty('data') ? gridRows.data : gridRows);
            this.totalNumberOfData = gridRows.totalItems;
            this.calcPaginationAmount();
            this.dataLoading.next(true);
        };
        /**
         * gridFactoryService decide and generate grid service
         * @param page which page we are on in
         * @param itemsPerPage count of item in each page
         * @param sortDir if we call sorting function then we have sortDir
         * included sortDirection (it contain ASC, DESC and withoutSort)
         * and column which is column name we must sort base on in
         */
        GridComponent.prototype.makeGridService = function (page, itemsPerPage, sortDir) {
            // this part using for pagination
            this.params = this.params.set('page', page + '').set('itemsPerPage', itemsPerPage + '');
            // this part using for sorting
            if (sortDir && sortDir.column) {
                if (sortDir.sortDirection === this.withoutSort) {
                    this.params = this.params.delete("order[" + sortDir.column + "]");
                }
                else {
                    this.params = this.params.set("order[" + sortDir.column + "]", sortDir.sortDirection + '');
                }
            }
            // this part call request
            this.requestSubject$.next(true);
        };
        /**
         * if we have simple search
         * gridActionsNotifier listen and if some changes happened return new data
         * getSimpleSearch is my new service
         *
         */
        GridComponent.prototype.simpleSearch = function () {
            var _this = this;
            if (this.grid.simpleSearch) {
                this.subscription.add(this.gridActionsNotifier.ListenOn('simpleSearch').subscribe(function (res) {
                    _this.params = _this.params.set(_this.grid.simpleSearch.queryParamName, res);
                    _this.page = 1;
                    _this.params = _this.params.set('page', '1');
                    _this.requestSubject$.next(true);
                }));
            }
        };
        /**
         *
         * @param data read more column event emitter
         */
        GridComponent.prototype.showReadMore = function (data) {
            var _this = this;
            this.readMoreHtml = document.createElement('td');
            this.readMoreHtml.setAttribute('class', 'append-table');
            this.readMoreHtml.setAttribute('colspan', "" + (this.grid != undefined
                && this.grid.columns != undefined
                && this.grid.columns.length ? this.grid.columns.length : 1));
            this.readMoreValue = [];
            this.readMoreHeader = [];
            // get element which we have id
            var readMoreHtmlElement;
            readMoreHtmlElement = document.getElementById('read-more' + data.id);
            // we have loop in config and then make html
            // read more column tables config have 3 property header value and template
            this.createDataFromTableConfig(data);
            // here we must create table dynamically
            // we need one div and it must have id and class then we must append it to read more Html field
            var div = this.htmlGenerator('div', 'child_data_local_1', 'datatable datatable-default  datatable-scroll datatable-loaded');
            this.readMoreHtml.appendChild(div);
            // we need one table and it must have class then div element we make before must append it
            var table = this.htmlGenerator('table', null, 'datatable-table table');
            div.appendChild(table);
            // we need one thead and it must have class then table element we make before must append it
            var thead = this.htmlGenerator('thead', null, 'datatable-head');
            table.appendChild(thead);
            // we need one tr and it must have class then thead element we make before must append it
            var trHead = this.htmlGenerator('tr', 'null', 'datatable-row');
            thead.appendChild(trHead);
            // we need make td dynamically and last tr must append it (it makes header of table )
            this.readMoreHeader.forEach(function (header) {
                var tdHead = _this.htmlGenerator('th', null, null);
                trHead.appendChild(tdHead);
                tdHead.innerText = header;
            });
            // we need one tbody and it must have class then table must append it
            var tabBody = this.htmlGenerator('tbody', null, 'datatable-body');
            table.appendChild(tabBody);
            // we need one tr and it must have class then  tBody  must append it
            var tBodyRow = this.htmlGenerator('tr', null, 'datatable-row');
            tabBody.appendChild(tBodyRow);
            // we need make td dynamically and last tr must append it (it makes value tr of table )
            this.readMoreValue.forEach(function (rowItem) {
                // @ts-ignore
                if (rowItem.customTemplate) {
                    // we need make td dynamically and last tr must append it (it makes value tr of table )
                    var td = _this.htmlGenerator('td', null, null);
                    tBodyRow.appendChild(td);
                    // we have custom template this part and we need read it from read more config so we need to use createEmbeddedView
                    // we detectChanges it for confidence (it must be safe)
                    // @ts-ignore
                    var embeddedViewRef = _this.viewContainerRef.createEmbeddedView(rowItem.customTemplate, { row: data.data });
                    embeddedViewRef.detectChanges();
                    // here we have embeddedViewRef and it can be have more than one node so we need to have for on it
                    for (var i = 0; i < embeddedViewRef.rootNodes.length; i++) {
                        // we have 2 condition here 1-have template 2-dont have (simple value we read simply from req)
                        // here we have template
                        var element = embeddedViewRef.rootNodes[i];
                        td.appendChild(element);
                    }
                }
                else {
                    // here dont have template
                    var valueTd = _this.htmlGenerator('td', null, null);
                    // @ts-ignore
                    var spanValue = _this.htmlGenerator('span', null, null, rowItem.value);
                    tBodyRow.appendChild(valueTd);
                    valueTd.appendChild(spanValue);
                }
            });
            // here we append all element we make before before end selected element
            // @ts-ignore
            readMoreHtmlElement.insertAdjacentElement('beforeend', this.readMoreHtml);
        };
        /**
         *
         * @param collapsed object{id:number,state:boolean}
         */
        GridComponent.prototype.triggerCollapsed = function (collapsed) {
            // @ts-ignore
            this.isCollapsed[collapsed.id] = collapsed.state;
        };
        /**
         *
         * @param data
         */
        GridComponent.prototype.createDataFromTableConfig = function (data) {
            var _this = this;
            data.tableConfig.forEach(function (i) {
                // @ts-ignore
                _this.readMoreHeader.push(i.header);
                // read more value contain value and template
                // @ts-ignore
                _this.readMoreValue.push({ value: data.data[i.value], customTemplate: i.customTemplate });
            });
        };
        /**
         * its need for showReadMore method
         * @param _elementName tag name
         * @param _idName if we have id
         * @param _className if we have class
         * @param _elementValue if we have value for element
         */
        // tslint:disable-next-line:variable-name typedef
        GridComponent.prototype.htmlGenerator = function (_elementName, _idName, _className, _elementValue) {
            var element = document.createElement(_elementName);
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
        };
        GridComponent.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        /**
         *
         * @param pageNumber page number
         * calcPaginationAmount
         */
        GridComponent.prototype.changePage = function (pageNumber) {
            this.page = pageNumber;
            this.makeGridService(this.page, this.pageSize);
            this.calcPaginationAmount();
        };
        /***
         * its calculate which data is active now from .. to...
         */
        GridComponent.prototype.calcPaginationAmount = function () {
            this.numberOfDataStart = (this.page - 1) * this.pageSize + 1;
            this.numberOfDataEnd = (this.page - 1) * this.pageSize + this.pageSize;
            if (this.numberOfDataEnd > this.totalNumberOfData) {
                this.numberOfDataEnd = this.totalNumberOfData;
            }
        };
        /**
         * setColumns
         * headerTableCells and each row data
         * we have array @type string
         * it make header and row data with grid @Input
         */
        GridComponent.prototype.setColumns = function () {
            // headerTableCells have to keep all thead name which is label und user set it in grid config
            this.tHeadLabels = [];
            // tHeadSortConfig have to keep all thead value (database name :)) and sortable status
            this.tHeadSortConfig = [];
            // we use value and fill table with columnData
            this.columnData = [];
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < this.grid.columns.length; i++) {
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
        };
        /**
         *
         * @param sortDirectionConfig included sortDirection (it contain ASC, DESC and withoutSort)
         * and column which is column name we must sort base on in
         */
        GridComponent.prototype.sorting = function (sortDirectionConfig) {
            this.makeGridService(this.page, this.pageSize, sortDirectionConfig);
        };
        return GridComponent;
    }());
    GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(i0.ɵɵdirectiveInject(GridFactoryService), i0.ɵɵdirectiveInject(GridActionsNotifier), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    GridComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GridComponent, selectors: [["lib-grid"]], viewQuery: function GridComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵstaticViewQuery(_c0$7, true);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
            }
        }, inputs: { grid: "grid", refreshGrid: "refreshGrid" }, decls: 13, vars: 6, consts: [[1, "angular-bootstrap-table"], [1, "table-box", "table-responsive"], [1, "table", "table-head-custom", "table-vertical-center", "table-striped"], [3, "theadSortConfig", "defaultSort", "theadLabel", "sort"], [4, "ngIf", "ngIfElse"], ["noData", ""], [1, "pagination-box"], [4, "ngIf"], ["ColumnTemplate", ""], [4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "ngbCollapse", "id"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "no-data", "text-center", "p-5"], ["class", "spinner-border text-primary", "role", "status", 4, "ngIf"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "sr-only"], [1, "d-flex", "mt-2"], [1, "mr-auto", "datatable-pager"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"], ["paginator", ""], [1, "select-pagination"], [1, "ml-2", "mt-1", "paginate-detail"], ["class", "pagination-data-info", 4, "ngIf"], ["bindLabel", "name", "placeholder", "Select city", 3, "items", "searchable", "clearable", "ngModel", "change", "ngModelChange"], [1, "pagination-data-info"], [3, "ngSwitch"], [3, "value", "row", 4, "ngSwitchCase"], [3, "value", "row", "column", 4, "ngSwitchCase"], [3, "value", "column", "row", "readMoreData", "collapsedNotifier", 4, "ngSwitchCase"], [3, "value", "row"], [3, "value", "row", "column"], [3, "value", "column", "row", "readMoreData", "collapsedNotifier"]], template: function GridComponent_Template(rf, ctx) {
            if (rf & 1) {
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
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(8);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("theadSortConfig", ctx.tHeadSortConfig)("defaultSort", ctx.grid.defaultSort)("theadLabel", ctx.tHeadLabels);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.dataLoading.value && ctx.rows.value.length > 0)("ngIfElse", _r1);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngIf", ctx.dataLoading.value && ctx.grid.pagination && ctx.rows.value.length !== 0);
            }
        }, directives: [HeaderTableCellComponent, i1$1.NgIf, i1$1.NgForOf, i1$1.NgClass, i5.NgbCollapse, i1$1.NgTemplateOutlet, i5.NgbPagination, i6.NgSelectComponent, i2$2.NgControlStatus, i2$2.NgModel, i1$1.NgSwitch, i1$1.NgSwitchCase, TextColumnComponent, BooleanColumnComponent, ImageColumnComponent, IconColumnComponent, CustomColumnComponent, DateColumnComponent, StatusColumnComponent, ActionColumnComponent, LinkColumnComponent, ReadMoreColumnComponent], pipes: [i1$1.AsyncPipe, RowClassCallbackPipe, NestedJsonPipe], styles: ["div#child_data_local_1{display:block;width:100%}tbody.datatable-body,thead.datatable-head{display:table;width:100%}table.datatable-table,tr#read-more1{width:100%}.disable-header{width:20px}.no-data{left:0;margin-top:15px;position:absolute;right:0;width:auto}table{display:table;min-height:100px;width:100%}.pagination-data-info{padding:0 15px;vertical-align:top}"], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GridComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-grid',
                        templateUrl: './grid.component.html',
                        styleUrls: ['./grid.component.scss'],
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () { return [{ type: GridFactoryService }, { type: GridActionsNotifier }, { type: i0.ChangeDetectorRef }, { type: i0.ViewContainerRef }]; }, { grid: [{
                    type: i0.Input
                }], refreshGrid: [{
                    type: i0.Input
                }], paginator: [{
                    type: i0.ViewChild,
                    args: ['paginator', { static: true }]
                }] });
    })();

    var SortGridPipe = /** @class */ (function () {
        function SortGridPipe() {
        }
        SortGridPipe.prototype.transform = function (data, direction, name) {
            return true;
            // return _.orderBy(data, [name], [direction == 'asc' ? 'asc' : 'desc']);
        };
        return SortGridPipe;
    }());
    SortGridPipe.ɵfac = function SortGridPipe_Factory(t) { return new (t || SortGridPipe)(); };
    SortGridPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "SortGridPipe", type: SortGridPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SortGridPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'SortGridPipe',
                    }]
            }], null, null);
    })();

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var PaginationPipe = /** @class */ (function () {
        function PaginationPipe() {
        }
        PaginationPipe.prototype.transform = function (data, currentPage, pageSize) {
            return __spread(data.slice(pageSize * (currentPage), pageSize * (currentPage + 1)));
        };
        return PaginationPipe;
    }());
    PaginationPipe.ɵfac = function PaginationPipe_Factory(t) { return new (t || PaginationPipe)(); };
    PaginationPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "pagination", type: PaginationPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PaginationPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'pagination',
                    }]
            }], null, null);
    })();

    var SimpleSearch = /** @class */ (function () {
        function SimpleSearch() {
        }
        return SimpleSearch;
    }());
    var SimpleSearchConfig = /** @class */ (function () {
        function SimpleSearchConfig() {
        }
        return SimpleSearchConfig;
    }());

    var DebounceClickDirective = /** @class */ (function () {
        function DebounceClickDirective() {
            this.debounceTime = 500;
            this.debounceClick = new i0.EventEmitter();
            this.clicks = new rxjs.Subject();
            this.subscription = new rxjs.Subscription();
        }
        DebounceClickDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.subscription = this.clicks.pipe(operators.debounceTime(this.debounceTime)).subscribe(function (e) { return _this.debounceClick.emit(e); });
        };
        DebounceClickDirective.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        DebounceClickDirective.prototype.clickEvent = function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.clicks.next(event);
        };
        return DebounceClickDirective;
    }());
    DebounceClickDirective.ɵfac = function DebounceClickDirective_Factory(t) { return new (t || DebounceClickDirective)(); };
    DebounceClickDirective.ɵdir = i0.ɵɵdefineDirective({ type: DebounceClickDirective, selectors: [["", "appDebounceClick", ""]], hostBindings: function DebounceClickDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function DebounceClickDirective_click_HostBindingHandler($event) { return ctx.clickEvent($event); });
            }
        }, inputs: { debounceTime: "debounceTime" }, outputs: { debounceClick: "debounceClick" } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DebounceClickDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[appDebounceClick]'
                    }]
            }], function () { return []; }, { debounceTime: [{
                    type: i0.Input
                }], debounceClick: [{
                    type: i0.Output
                }], clickEvent: [{
                    type: i0.HostListener,
                    args: ['click', ['$event']]
                }] });
    })();

    //angular basic
    var _c0$8 = ["simpleSearchInput"];
    function SearchComponent_label_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "label");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r0.search.inputLabel);
        }
    }
    function SearchComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 6);
            i0.ɵɵelementStart(1, "span", 7);
            i0.ɵɵelement(2, "i", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", ctx_r1.search.iconCustomClass);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx_r1.search.icon);
        }
    }
    function SearchComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 9);
            i0.ɵɵlistener("debounceClick", function SearchComponent_button_6_Template_button_debounceClick_0_listener() { i0.ɵɵrestoreView(_r5_1); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.searchCompleteOnButtonPress(ctx_r4.searchModel); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", ctx_r3.search.buttonCustomClass)("debounceTime", 700);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r3.search.buttonName, " ");
        }
    }
    var SearchComponent = /** @class */ (function () {
        function SearchComponent(gridActionsNotifier) {
            this.gridActionsNotifier = gridActionsNotifier;
            this.search = new SimpleSearchConfig();
            this.subscription = new rxjs.Subscription();
        }
        SearchComponent.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        SearchComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (!this.search.haveButton) {
                this.subscription = rxjs.fromEvent(this.simpleSearchInput && this.simpleSearchInput.nativeElement, 'keyup').pipe(
                // Time in milliseconds between key events
                // @ts-ignore
                operators.debounce(function (event) {
                    if (event.key !== 'Enter') {
                        return rxjs.timer(1000);
                    }
                    return rxjs.timer(0);
                }), 
                // get value
                operators.map(function (event) {
                    /**
                     * here we check event.target.value if it is empty or length <2 we must return clone of last data
                     */
                    return event.target.value;
                })
                // if character length greater then 2
                , operators.filter((function (res) { return res.length == 0 || res.length > 2; }))
                // If previous query is different from current
                , operators.distinctUntilChanged()
                // subscription for response
                ).subscribe(function (text) {
                    // notify data change
                    _this.searchCompleteOnButtonPress(text);
                });
            }
        };
        /**
         * this
         * @param data- its search field value and
         */
        SearchComponent.prototype.searchCompleteOnButtonPress = function (data) {
            this.gridActionsNotifier.broadcast('simpleSearch', data);
        };
        return SearchComponent;
    }());
    SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(i0.ɵɵdirectiveInject(GridActionsNotifier)); };
    SearchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SearchComponent, selectors: [["lib-search"]], viewQuery: function SearchComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵstaticViewQuery(_c0$8, true);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.simpleSearchInput = _t.first);
            }
        }, inputs: { search: "search" }, decls: 7, vars: 5, consts: [[4, "ngIf"], [1, "input-group"], ["class", "input-group-prepend", 3, "ngClass", 4, "ngIf"], ["id", "search", "autocomplete", "off", "name", "searchModel", "aria-describedby", "inputGroupPrepend", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["simpleSearchInput", ""], ["type", "submit", "class", "btn", "appDebounceClick", "", 3, "ngClass", "debounceTime", "debounceClick", 4, "ngIf"], [1, "input-group-prepend", 3, "ngClass"], ["id", "inputGroupPrepend", 1, "input-group-text"], [3, "ngClass"], ["type", "submit", "appDebounceClick", "", 1, "btn", 3, "ngClass", "debounceTime", "debounceClick"]], template: function SearchComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "form");
                i0.ɵɵtemplate(1, SearchComponent_label_1_Template, 2, 1, "label", 0);
                i0.ɵɵelementStart(2, "div", 1);
                i0.ɵɵtemplate(3, SearchComponent_div_3_Template, 3, 2, "div", 2);
                i0.ɵɵelementStart(4, "input", 3, 4);
                i0.ɵɵlistener("ngModelChange", function SearchComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchModel = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(6, SearchComponent_button_6_Template, 2, 3, "button", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.search.inputLabel);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.search.icon);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.searchModel)("placeholder", ctx.search.placeHolder);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.search.haveButton);
            }
        }, directives: [i2$2.ɵangular_packages_forms_forms_y, i2$2.NgControlStatusGroup, i2$2.NgForm, i1$1.NgIf, i2$2.DefaultValueAccessor, i2$2.NgControlStatus, i2$2.NgModel, i1$1.NgClass, DebounceClickDirective], styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SearchComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-search',
                        templateUrl: './search.component.html',
                        styleUrls: ['./search.component.css']
                    }]
            }], function () { return [{ type: GridActionsNotifier }]; }, { search: [{
                    type: i0.Input,
                    args: ['search']
                }], simpleSearchInput: [{
                    type: i0.ViewChild,
                    args: ['simpleSearchInput', { static: true }]
                }] });
    })();

    var GridModule = /** @class */ (function () {
        function GridModule() {
        }
        return GridModule;
    }());
    GridModule.ɵmod = i0.ɵɵdefineNgModule({ type: GridModule });
    GridModule.ɵinj = i0.ɵɵdefineInjector({ factory: function GridModule_Factory(t) { return new (t || GridModule)(); }, imports: [[
                i5.NgbModule,
                i1$1.CommonModule,
                i2$2.FormsModule,
                i2$2.ReactiveFormsModule,
                i1.HttpClientModule,
                i2$1.BsDropdownModule.forRoot(),
                i2.TooltipModule.forRoot(),
                i6.NgSelectModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GridModule, { declarations: [GridComponent,
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
                HeaderTableCellComponent], imports: [i5.NgbModule,
                i1$1.CommonModule,
                i2$2.FormsModule,
                i2$2.ReactiveFormsModule,
                i1.HttpClientModule, i2$1.BsDropdownModule, i2.TooltipModule, i6.NgSelectModule], exports: [GridComponent,
                SearchComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GridModule, [{
                type: i0.NgModule,
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
                            i5.NgbModule,
                            i1$1.CommonModule,
                            i2$2.FormsModule,
                            i2$2.ReactiveFormsModule,
                            i1.HttpClientModule,
                            i2$1.BsDropdownModule.forRoot(),
                            i2.TooltipModule.forRoot(),
                            i6.NgSelectModule
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of grid-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.GridComponent = GridComponent;
    exports.GridModule = GridModule;
    exports.SearchComponent = SearchComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=music-platform-grid.umd.js.map
