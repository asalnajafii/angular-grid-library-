import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class LinkColumnComponent {
    constructor() { }
    ngOnInit() {
    }
}
LinkColumnComponent.ɵfac = function LinkColumnComponent_Factory(t) { return new (t || LinkColumnComponent)(); };
LinkColumnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LinkColumnComponent, selectors: [["link-column"]], inputs: { value: "value", row: "row", column: "column" }, decls: 2, vars: 1, consts: [[3, "click"]], template: function LinkColumnComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵlistener("click", function LinkColumnComponent_Template_span_click_0_listener() { return ctx.row.onclick(ctx.column); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.value, "\n");
    } }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LinkColumnComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2dyaWQtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9ncmlkL2NvbHVtbnMtdHlwZS9saW5rLWNvbHVtbi9saW5rLWNvbHVtbi5jb21wb25lbnQudHMiLCJsaWIvZ3JpZC9jb2x1bW5zLXR5cGUvbGluay1jb2x1bW4vbGluay1jb2x1bW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7O0FBT3ZELE1BQU0sT0FBTyxtQkFBbUI7SUFJOUIsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7O3NGQVBVLG1CQUFtQjt3REFBbkIsbUJBQW1CO1FDUGhDLCtCQUNFO1FBREksOEZBQVMsMkJBQW1CLElBQUM7UUFDakMsWUFDRjtRQUFBLGlCQUFPOztRQURMLGVBQ0Y7UUFERSwyQ0FDRjs7a0RES2EsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7c0NBRWlCLEtBQUs7a0JBQXBCLEtBQUs7bUJBQUMsT0FBTztZQUNBLEdBQUc7a0JBQWhCLEtBQUs7bUJBQUMsS0FBSztZQUNLLE1BQU07a0JBQXRCLEtBQUs7bUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGluay1jb2x1bW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbGluay1jb2x1bW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saW5rLWNvbHVtbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlua0NvbHVtbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgndmFsdWUnKSB2YWx1ZTogYW55O1xuICBASW5wdXQoJ3JvdycpIHJvdzogYW55O1xuICBASW5wdXQoJ2NvbHVtbicpIGNvbHVtbjogYW55O1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiIsIjxzcGFuIChjbGljayk9XCJyb3cub25jbGljayhjb2x1bW4pXCI+XG4gIHt7dmFsdWV9fVxuPC9zcGFuPlxuIl19