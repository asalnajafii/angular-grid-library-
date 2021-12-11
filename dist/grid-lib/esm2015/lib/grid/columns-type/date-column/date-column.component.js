import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../pipes/date-format.pipe";
function DateColumnComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, ctx_r0.value, ctx_r0.row.dateFormat), " ");
} }
function DateColumnComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "dateFormat");
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(1, 1, ctx_r2.value, ctx_r2.row.dateFormat), " ");
} }
var pipeFormatEnum;
(function (pipeFormatEnum) {
    pipeFormatEnum["date"] = "date";
    pipeFormatEnum["Moment"] = "Moment";
})(pipeFormatEnum || (pipeFormatEnum = {}));
export class DateColumnComponent {
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
DateColumnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateColumnComponent, selectors: [["date-column"]], inputs: { value: "value", row: "row" }, decls: 4, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["moment", ""]], template: function DateColumnComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵtemplate(1, DateColumnComponent_ng_container_1_Template, 3, 4, "ng-container", 0);
        i0.ɵɵtemplate(2, DateColumnComponent_ng_template_2_Template, 2, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.row.pipeFormat == ctx.pipeFormat.date)("ngIfElse", _r1);
    } }, directives: [i1.NgIf], pipes: [i1.DatePipe, i2.DateFormatPipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateColumnComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2dyaWQtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9ncmlkL2NvbHVtbnMtdHlwZS9kYXRlLWNvbHVtbi9kYXRlLWNvbHVtbi5jb21wb25lbnQudHMiLCJsaWIvZ3JpZC9jb2x1bW5zLXR5cGUvZGF0ZS1jb2x1bW4vZGF0ZS1jb2x1bW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7Ozs7O0lDRXJELDZCQUNBO0lBQUEsWUFDQTs7SUFBQSwwQkFBZTs7O0lBRGYsZUFDQTtJQURBLDBGQUNBOzs7SUFHRyxZQUNIOzs7O0lBREcsMEZBQ0g7O0FETkYsSUFBSyxjQUdKO0FBSEQsV0FBSyxjQUFjO0lBQ2pCLCtCQUFhLENBQUE7SUFDYixtQ0FBaUIsQ0FBQTtBQUNuQixDQUFDLEVBSEksY0FBYyxLQUFkLGNBQWMsUUFHbEI7QUFPRCxNQUFNLE9BQU8sbUJBQW1CO0lBSTlCO0lBQ0EsQ0FBQztJQUVELFFBQVE7SUFFUixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQzs7c0ZBaEJVLG1CQUFtQjt3REFBbkIsbUJBQW1CO1FDWmhDLDRCQUNJO1FBQ0Ysc0ZBRWU7UUFFZixxSEFFYztRQUNoQixpQkFBTzs7O1FBUFUsZUFBc0M7UUFBdEMsZ0VBQXNDLGlCQUFBOztrRERVMUMsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7c0NBRWlCLEtBQUs7a0JBQXBCLEtBQUs7bUJBQUMsT0FBTztZQUNBLEdBQUc7a0JBQWhCLEtBQUs7bUJBQUMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZW51bSBwaXBlRm9ybWF0RW51bSB7XG4gIGRhdGUgPSBcImRhdGVcIixcbiAgTW9tZW50ID0gXCJNb21lbnRcIlxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlLWNvbHVtbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLWNvbHVtbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGUtY29sdW1uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlQ29sdW1uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCd2YWx1ZScpIHZhbHVlOiBhbnk7XG4gIEBJbnB1dCgncm93Jykgcm93OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgIGFjY2VzcyB0byBlbnVtIGRhdGFcbiAgICovXG4gIHB1YmxpYyBnZXQgcGlwZUZvcm1hdCgpOiB0eXBlb2YgcGlwZUZvcm1hdEVudW0ge1xuICAgIHJldHVybiBwaXBlRm9ybWF0RW51bTtcbiAgfVxufVxuIiwiPHNwYW4+XG4gICAgPCEtLWJ1aWx0IGluIHBpcGUtLT5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJvdy5waXBlRm9ybWF0PT1waXBlRm9ybWF0LmRhdGU7ZWxzZSBtb21lbnRcIj5cbiAge3t2YWx1ZXxkYXRlOnJvdy5kYXRlRm9ybWF0fX1cbiAgPC9uZy1jb250YWluZXI+XG4gIDwhLS1jdXN0b20gcGlwZS0tPlxuICA8bmctdGVtcGxhdGUgI21vbWVudD5cbiAgICAge3t2YWx1ZXxkYXRlRm9ybWF0OnJvdy5kYXRlRm9ybWF0fX1cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvc3Bhbj5cbiJdfQ==