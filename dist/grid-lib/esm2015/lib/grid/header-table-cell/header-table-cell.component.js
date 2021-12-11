import { Component, EventEmitter, Input, Output, ViewChildren } from '@angular/core';
import { SortOrder } from '../../model/sortorder.type';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["sortingList"];
function HeaderTableCellComponent_ng_container_0_th_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c1 = function (a0) { return { "sorting-start": a0 }; };
const _c2 = function (a0, a1, a2) { return { index: a0, sortableStatus: a1, sortColumnValue: a2 }; };
function HeaderTableCellComponent_ng_container_0_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵelementStart(1, "div", 4, 5);
    i0.ɵɵlistener("click", function HeaderTableCellComponent_ng_container_0_th_1_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r12); const index_r4 = i0.ɵɵnextContext().index; const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onSortClick(index_r4); });
    i0.ɵɵelementStart(3, "div", 6);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, HeaderTableCellComponent_ng_container_0_th_1_ng_container_5_Template, 1, 0, "ng-container", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext();
    const index_r4 = ctx_r13.index;
    const tHead_r3 = ctx_r13.$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c1, ctx_r5.isSortingStart && ctx_r5.isSortingStart[index_r4]));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", tHead_r3, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction3(6, _c2, index_r4, ctx_r5.theadSortConfig[index_r4]["sortable"], ctx_r5.theadSortConfig[index_r4]["value"]));
} }
function HeaderTableCellComponent_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 8);
} }
function HeaderTableCellComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HeaderTableCellComponent_ng_container_0_th_1_Template, 6, 10, "th", 2);
    i0.ɵɵtemplate(2, HeaderTableCellComponent_ng_container_0_ng_template_2_Template, 1, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tHead_r3 = ctx.$implicit;
    const _r6 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", tHead_r3 !== "")("ngIfElse", _r6);
} }
function HeaderTableCellComponent_ng_template_1_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r18.defaultSort.sortDir === ctx_r18.sortDir ? "fa-long-arrow-down" : "fa-long-arrow-up");
} }
function HeaderTableCellComponent_ng_template_1_ng_container_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 13);
} }
function HeaderTableCellComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵtemplate(2, HeaderTableCellComponent_ng_template_1_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(3, HeaderTableCellComponent_ng_template_1_ng_container_0_ng_template_3_Template, 1, 0, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r19 = i0.ɵɵreference(4);
    const sortColumnValue_r16 = i0.ɵɵnextContext().sortColumnValue;
    const ctx_r17 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r17.defaultSort && sortColumnValue_r16 === ctx_r17.defaultSort.sortColumn)("ngIfElse", _r19);
} }
function HeaderTableCellComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, HeaderTableCellComponent_ng_template_1_ng_container_0_Template, 5, 2, "ng-container", 9);
} if (rf & 2) {
    const sortableStatus_r15 = ctx.sortableStatus;
    i0.ɵɵproperty("ngIf", sortableStatus_r15 !== false);
} }
export class HeaderTableCellComponent {
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
HeaderTableCellComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderTableCellComponent, selectors: [["header-table-cell"]], viewQuery: function HeaderTableCellComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sortingList = _t);
    } }, inputs: { theadLabel: "theadLabel", theadSortConfig: "theadSortConfig", defaultSort: "defaultSort" }, outputs: { sort: "sort" }, decls: 3, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["sortingIcon", ""], [4, "ngIf", "ngIfElse"], ["disableHeader", ""], [1, "d-flex", 3, "ngClass", "click"], ["sortingList", ""], [1, "mr-auto", "title-header"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "disable-header"], [4, "ngIf"], [1, "filter-box"], ["haveNoDefault", ""], [1, "filter-icon", "fal", 3, "ngClass"], [1, "filter-icon", "fal", "fa-sort-alt"]], template: function HeaderTableCellComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, HeaderTableCellComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        i0.ɵɵtemplate(1, HeaderTableCellComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.theadLabel);
    } }, directives: [i1.NgForOf, i1.NgIf, i1.NgClass, i1.NgTemplateOutlet], styles: ["header-table-cell{display:table-row}  .filter-icon{cursor:pointer;height:20px;width:20px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeaderTableCellComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXRhYmxlLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2dyaWQtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9ncmlkL2hlYWRlci10YWJsZS1jZWxsL2hlYWRlci10YWJsZS1jZWxsLmNvbXBvbmVudC50cyIsImxpYi9ncmlkL2hlYWRlci10YWJsZS1jZWxsL2hlYWRlci10YWJsZS1jZWxsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7SUNDL0Msd0JBRXNGOzs7Ozs7SUFWMUYsMEJBQ0U7SUFBQSxpQ0FJRTtJQUpHLDhQQUE0QjtJQUkvQiw4QkFDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBTTtJQUNOLCtHQUVzRjtJQUN4RixpQkFBTTtJQUNSLGlCQUFLOzs7Ozs7O0lBUkUsZUFBc0U7SUFBdEUsOEdBQXNFO0lBRXZFLGVBQ0Y7SUFERSx5Q0FDRjtJQUNlLGVBQ0M7SUFERCxzQ0FDQywwSkFBQTs7O0lBS2xCLHdCQUFnQzs7O0lBaEJwQyw2QkFDRTtJQUNBLHVGQVlLO0lBQ0wseUlBRWM7SUFFaEIsMEJBQWU7Ozs7SUFqQlIsZUFBaUI7SUFBakIsc0NBQWlCLGlCQUFBOzs7SUF3QmxCLDZCQUNFO0lBQUEsd0JBQ3lGO0lBQzNGLDBCQUFlOzs7SUFEVixlQUFpRjtJQUFqRixxSEFBaUY7OztJQUtwRix3QkFBMkM7OztJQVZqRCw2QkFDRTtJQUFBLCtCQUNFO0lBQ0Esd0hBR2U7SUFHZix3SkFFYztJQUVoQixpQkFBTTtJQUNSLDBCQUFlOzs7OztJQVhJLGVBQWlFO0lBQWpFLG9HQUFpRSxrQkFBQTs7O0lBSHBGLHlHQWNlOzs7SUFkQSxtREFBNEI7O0FETjdD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QUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNqRDtnQkFFOEIsV0FBVztrQkFBdkMsWUFBWTttQkFBQyxhQUFhO1lBQ2xCLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNJLElBQUk7a0JBQWIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTb3J0T3JkZXJ9IGZyb20gJy4uLy4uL21vZGVsL3NvcnRvcmRlci50eXBlJztcbmltcG9ydCB7RGVmYXVsdFNvcnRDb25maWd9IGZyb20gJy4uLy4uL21vZGVsL2dyaWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWFkZXItdGFibGUtY2VsbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXItdGFibGUtY2VsbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci10YWJsZS1jZWxsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJUYWJsZUNlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkcmVuKCdzb3J0aW5nTGlzdCcpIHNvcnRpbmdMaXN0ITogUXVlcnlMaXN0PGFueT47XG4gIEBJbnB1dCgpIHRoZWFkTGFiZWw6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgQElucHV0KCkgdGhlYWRTb3J0Q29uZmlnOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIGRlZmF1bHRTb3J0ITogRGVmYXVsdFNvcnRDb25maWcgfCB1bmRlZmluZWQ7XG4gIEBPdXRwdXQoKSBzb3J0OiBFdmVudEVtaXR0ZXI8eyBzb3J0RGlyZWN0aW9uOiBzdHJpbmcsIGNvbHVtbjogc3RyaW5nIH0+ID0gbmV3IEV2ZW50RW1pdHRlcjx7IHNvcnREaXJlY3Rpb246IHN0cmluZywgY29sdW1uOiBzdHJpbmcgfT4oKTtcbiAgLy8gZGVmYXVsdCB2YWx1ZSBmb3Igc29ydGluZyBpcyBERUNcbiAgcHVibGljIHNvcnREaXIgPSBTb3J0T3JkZXIuREVTQztcbiAgcHVibGljIGlzU29ydGluZ1N0YXJ0ID0gW107XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVmYXVsdFNvcnQpIHtcbiAgICAgIHRoaXMuc29ydC5lbWl0KHtzb3J0RGlyZWN0aW9uOiB0aGlzLmRlZmF1bHRTb3J0LnNvcnREaXIsIGNvbHVtbjogdGhpcy5kZWZhdWx0U29ydC5zb3J0Q29sdW1ufSk7XG4gICAgfVxuICB9XG4gIG9uU29ydENsaWNrKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAvLyBUT0RPIDpkZWZhdWx0IHZhbHVlIG11c3QgYmUgaGF2ZSBzb3J0aW5nLXN0YXJ0IGNsYXNzXG4gICAgLy8gVG9kbyA6IGNsYXNzIG5hbWUgbXVzdCBiZSBzZXQgYnkgdXNlclxuICAgIC8vIHdlIG5lZWQgdG8gaGF2ZSBhcnJheSBvZiBzb3J0aW5nIGVsZW1lbnRcbiAgICBjb25zdCBzb3J0aW5nTGlzdCA9IHRoaXMuc29ydGluZ0xpc3QudG9BcnJheSgpO1xuICAgIC8vIHdlIGhhdmUgZGlzYWJsZUhlYWRlciwgaW4gc29ydGluZ0xpc3Qgd2UgZG9udCBjb3VudCBkaXNhYmxlIG9uZSBzbyBpIG5lZWQgdG8gY291bnRpbmcgaW5kZXhcbiAgICBjb25zdCBkaXNhYmxlQ291bnQgPSB0aGlzLnRoZWFkTGFiZWwubGVuZ3RoIC0gc29ydGluZ0xpc3QubGVuZ3RoO1xuICAgIGNvbnN0IGZpbHRlckljb24gPSBzb3J0aW5nTGlzdFtpbmRleCAtIGRpc2FibGVDb3VudF0ubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLWljb24nKTtcbiAgICAvLyB3ZSBoYXZlIHNpdHVhdGlvbiB0byBkaXNhYmxlIHNvcnRpbmcgc28gd2UgbmVlZCB0byBjaGVjayBmaWx0ZXJJY29uXG4gICAgaWYgKGZpbHRlckljb24pIHtcbiAgICAgIGNvbnN0IGZpbHRlckljb25DbGFzc0xpc3QgPSBmaWx0ZXJJY29uLmNsYXNzTGlzdDtcbiAgICAgIGlmIChmaWx0ZXJJY29uQ2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1zb3J0LWFsdCcpKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5pc1NvcnRpbmdTdGFydFtpbmRleF0gPSB0cnVlO1xuICAgICAgICB0aGlzLnNvcnREaXIgPSBTb3J0T3JkZXIuREVTQztcbiAgICAgICAgZmlsdGVySWNvbkNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXNvcnQtYWx0Jyk7XG4gICAgICAgIGZpbHRlckljb25DbGFzc0xpc3QuYWRkKCdmYS1sb25nLWFycm93LWRvd24nKTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVySWNvbkNsYXNzTGlzdC5jb250YWlucygnZmEtbG9uZy1hcnJvdy1kb3duJykpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmlzU29ydGluZ1N0YXJ0W2luZGV4XSA9IHRydWU7XG4gICAgICAgIHRoaXMuc29ydERpciA9IFNvcnRPcmRlci5BU0M7XG4gICAgICAgIGZpbHRlckljb25DbGFzc0xpc3QucmVtb3ZlKCdmYS1sb25nLWFycm93LWRvd24nKTtcbiAgICAgICAgZmlsdGVySWNvbkNsYXNzTGlzdC5hZGQoJ2ZhLWxvbmctYXJyb3ctdXAnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5pc1NvcnRpbmdTdGFydFtpbmRleF0gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zb3J0RGlyID0gU29ydE9yZGVyLndpdGhvdXRTb3J0O1xuICAgICAgICBmaWx0ZXJJY29uQ2xhc3NMaXN0LnJlbW92ZSgnZmEtbG9uZy1hcnJvdy11cCcpO1xuICAgICAgICBmaWx0ZXJJY29uQ2xhc3NMaXN0LmFkZCgnZmEtc29ydC1hbHQnKTtcbiAgICAgIH1cbiAgICAgIC8vIHdlIHNlbmQgcmVxIHdpdGggc29ydCBldmVudEVtaXR0ZXJcbiAgICAgIHRoaXMuc29ydC5lbWl0KHtzb3J0RGlyZWN0aW9uOiB0aGlzLnNvcnREaXIsIGNvbHVtbjogdGhpcy50aGVhZFNvcnRDb25maWdbaW5kZXhdLnZhbHVlfSk7XG4gICAgfVxuXG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHRIZWFkIG9mIHRoZWFkTGFiZWw7bGV0IGluZGV4PWluZGV4XCI+XG4gIDwhLS1zdGFydCA6dGhlYWQtLT5cbiAgPHRoICpuZ0lmPVwidEhlYWQhPT0nJztlbHNlIGRpc2FibGVIZWFkZXJcIj5cbiAgICA8ZGl2IChjbGljayk9XCJvblNvcnRDbGljayhpbmRleClcIlxuICAgICAgICAgI3NvcnRpbmdMaXN0XG4gICAgICAgICBjbGFzcz1cImQtZmxleFwiXG4gICAgICAgICBbbmdDbGFzc109XCJ7J3NvcnRpbmctc3RhcnQnOiBpc1NvcnRpbmdTdGFydCAmJiBpc1NvcnRpbmdTdGFydFtpbmRleF19XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibXItYXV0byAgdGl0bGUtaGVhZGVyXCI+XG4gICAgICAgIHt7dEhlYWR9fVxuICAgICAgPC9kaXY+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwic29ydGluZ0ljb247XG4gICAgICAgICAgICAgICAgICAgICAgY29udGV4dDp7aW5kZXg6aW5kZXgsc29ydGFibGVTdGF0dXM6dGhpcy50aGVhZFNvcnRDb25maWdbaW5kZXhdWydzb3J0YWJsZSddLFxuICAgICAgICAgICAgICAgICAgICAgIHNvcnRDb2x1bW5WYWx1ZTp0aGlzLnRoZWFkU29ydENvbmZpZ1tpbmRleF1bJ3ZhbHVlJ119XCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIDwvdGg+XG4gIDxuZy10ZW1wbGF0ZSAjZGlzYWJsZUhlYWRlcj5cbiAgICA8dGggY2xhc3M9XCJkaXNhYmxlLWhlYWRlclwiPjwvdGg+XG4gIDwvbmctdGVtcGxhdGU+XG4gIDwhLS1lbmQgOnRoZWFkLS0+XG48L25nLWNvbnRhaW5lcj5cblxuPCEtLXN0YXJ0OnNvcnQgaWNvbiB0ZW1wbGF0ZS0tPlxuPG5nLXRlbXBsYXRlICNzb3J0aW5nSWNvbiBsZXQtaW5kZXg9XCJpbmRleFwiIGxldC1zb3J0YWJsZVN0YXR1cz1cInNvcnRhYmxlU3RhdHVzXCIgbGV0LXNvcnRDb2x1bW5WYWx1ZT1cInNvcnRDb2x1bW5WYWx1ZVwiPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwic29ydGFibGVTdGF0dXMhPT1mYWxzZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItYm94XCI+XG4gICAgICA8IS0tc3RhcnQ6d2UgaGF2ZSBzaXR1YXRpb24gdG8gaGF2ZSBkZWZhdWx0IHNvcnQgYW5kIGljb24gbXVzdCBiZSBiYXNlZCBvbiBjb25maWctLT5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkZWZhdWx0U29ydCAmJiAoc29ydENvbHVtblZhbHVlPT09IGRlZmF1bHRTb3J0LnNvcnRDb2x1bW4pO2Vsc2UgaGF2ZU5vRGVmYXVsdFwiPlxuICAgICAgICA8aSBjbGFzcz1cImZpbHRlci1pY29uIGZhbFwiXG4gICAgICAgICAgIFtuZ0NsYXNzXT1cImRlZmF1bHRTb3J0LnNvcnREaXI9PT1zb3J0RGlyPydmYS1sb25nLWFycm93LWRvd24nOidmYS1sb25nLWFycm93LXVwJ1wiPjwvaT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPCEtLWVuZDp3ZSBoYXZlIHNpdHVhdGlvbiB0byBoYXZlIGRlZmF1bHQgc29ydCBhbmQgaWNvbiBtdXN0IGJlIGJhc2VkIG9uIGNvbmZpZy0tPlxuICAgICAgPCEtLXN0YXJ0OndlIGRvbnQgaGF2ZSBkZWZhdWx0IHNvcnQtLT5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjaGF2ZU5vRGVmYXVsdD5cbiAgICAgICAgPGkgY2xhc3M9XCJmaWx0ZXItaWNvbiBmYWwgZmEtc29ydC1hbHRcIj48L2k+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPCEtLWVuZDp3ZSBkb250IGhhdmUgZGVmYXVsdCBzb3J0LS0+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuPC9uZy10ZW1wbGF0ZT5cbjwhLS1lbmQ6c29ydCBpY29uIHRlbXBsYXRlLS0+XG5cbiJdfQ==