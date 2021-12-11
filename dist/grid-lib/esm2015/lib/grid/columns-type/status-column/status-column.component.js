import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function StatusColumnComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Active");
    i0.ɵɵelementEnd();
} }
function StatusColumnComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Inactive");
    i0.ɵɵelementEnd();
} }
function StatusColumnComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "In progress");
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return { "color": a0 }; };
var statusState;
(function (statusState) {
    statusState[statusState["active"] = 1] = "active";
    statusState[statusState["inactive"] = 0] = "inactive";
    statusState[statusState["inProgress"] = 2] = "inProgress";
})(statusState || (statusState = {}));
export class StatusColumnComponent {
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
StatusColumnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: StatusColumnComponent, selectors: [["status-column"]], inputs: { value: "value", row: "row" }, decls: 6, vars: 8, consts: [[3, "ngStyle"], [3, "ngClass"], [3, "ngSwitch"], [4, "ngSwitchCase"]], template: function StatusColumnComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵelement(1, "i", 1);
        i0.ɵɵelementContainerStart(2, 2);
        i0.ɵɵtemplate(3, StatusColumnComponent_span_3_Template, 2, 0, "span", 3);
        i0.ɵɵtemplate(4, StatusColumnComponent_span_4_Template, 2, 0, "span", 3);
        i0.ɵɵtemplate(5, StatusColumnComponent_span_5_Template, 2, 0, "span", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(6, _c0, ctx.row.color));
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
    } }, directives: [i1.NgStyle, i1.NgClass, i1.NgSwitch, i1.NgSwitchCase], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StatusColumnComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvZ3JpZC1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2dyaWQvY29sdW1ucy10eXBlL3N0YXR1cy1jb2x1bW4vc3RhdHVzLWNvbHVtbi5jb21wb25lbnQudHMiLCJsaWIvZ3JpZC9jb2x1bW5zLXR5cGUvc3RhdHVzLWNvbHVtbi9zdGF0dXMtY29sdW1uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDOzs7O0lDR2pELDRCQUF1QztJQUFBLHNCQUFNO0lBQUEsaUJBQU87OztJQUNwRCw0QkFBeUM7SUFBQSx3QkFBUTtJQUFBLGlCQUFPOzs7SUFDeEQsNEJBQTJDO0lBQUEsMkJBQVc7SUFBQSxpQkFBTzs7O0FESG5FLElBQUssV0FJSjtBQUpELFdBQUssV0FBVztJQUNkLGlEQUFVLENBQUE7SUFDVixxREFBWSxDQUFBO0lBQ1oseURBQWMsQ0FBQTtBQUNoQixDQUFDLEVBSkksV0FBVyxLQUFYLFdBQVcsUUFJZjtBQU9ELE1BQU0sT0FBTyxxQkFBcUI7SUFJaEM7SUFDQSxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsV0FBVztRQUNwQixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzswRkFmVSxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ2JsQywrQkFDRTtRQUFBLHVCQUE0QjtRQUMxQixnQ0FDRTtRQUFBLHdFQUFvRDtRQUNwRCx3RUFBd0Q7UUFDeEQsd0VBQTZEO1FBQy9ELDBCQUFlO1FBQ25CLGlCQUFPOztRQVBELG1FQUErQjtRQUNoQyxlQUFvQjtRQUFwQixzQ0FBb0I7UUFDUCxlQUFrQjtRQUFsQixvQ0FBa0I7UUFDdkIsZUFBK0I7UUFBL0IscURBQStCO1FBQy9CLGVBQWlDO1FBQWpDLHVEQUFpQztRQUNqQyxlQUFtQztRQUFuQyx5REFBbUM7O2tERFFuQyxxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3QztzQ0FFaUIsS0FBSztrQkFBcEIsS0FBSzttQkFBQyxPQUFPO1lBQ0EsR0FBRztrQkFBaEIsS0FBSzttQkFBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5lbnVtIHN0YXR1c1N0YXRlIHtcbiAgYWN0aXZlID0gMSxcbiAgaW5hY3RpdmUgPSAwLFxuICBpblByb2dyZXNzID0gMlxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdGF0dXMtY29sdW1uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YXR1cy1jb2x1bW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGF0dXMtY29sdW1uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGF0dXNDb2x1bW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ3ZhbHVlJykgdmFsdWU6IGFueTtcbiAgQElucHV0KCdyb3cnKSByb3c6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYWNjZXNzIHRvIGVudW0gZGF0YVxuICAgKi9cbiAgcHVibGljIGdldCBzdGF0dXNTdGF0ZSgpOiB0eXBlb2Ygc3RhdHVzU3RhdGUge1xuICAgIHJldHVybiBzdGF0dXNTdGF0ZTtcbiAgfVxufVxuIiwiPHNwYW4gW25nU3R5bGVdPVwieydjb2xvcic6cm93LmNvbG9yfVwiPlxuICA8aSBbbmdDbGFzc109XCJyb3cuaWNvblwiPjwvaT5cbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ2YWx1ZVwiPlxuICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1zdGF0dXNTdGF0ZS5hY3RpdmU+QWN0aXZlPC9zcGFuPlxuICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1zdGF0dXNTdGF0ZS5pbmFjdGl2ZT5JbmFjdGl2ZTwvc3Bhbj5cbiAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9c3RhdHVzU3RhdGUuaW5Qcm9ncmVzcz5JbiBwcm9ncmVzczwvc3Bhbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvc3Bhbj5cbiJdfQ==