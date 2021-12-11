import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function CustomColumnComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0, a1, a2) { return { value: a0, row: a1, column: a2 }; };
export class CustomColumnComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomColumnComponent.ɵfac = function CustomColumnComponent_Factory(t) { return new (t || CustomColumnComponent)(); };
CustomColumnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CustomColumnComponent, selectors: [["custom-column"]], inputs: { value: "value", row: "row", column: "column" }, decls: 1, vars: 6, consts: [[4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function CustomColumnComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CustomColumnComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngTemplateOutlet", ctx.row.customTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c0, ctx.value, ctx.row, ctx.column));
    } }, directives: [i1.NgTemplateOutlet], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CustomColumnComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvZ3JpZC1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2dyaWQvY29sdW1ucy10eXBlL2N1c3RvbS1jb2x1bW4vY3VzdG9tLWNvbHVtbi5jb21wb25lbnQudHMiLCJsaWIvZ3JpZC9jb2x1bW5zLXR5cGUvY3VzdG9tLWNvbHVtbi9jdXN0b20tY29sdW1uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDOzs7O0lDQXZELHdCQUdlOzs7QURLZixNQUFNLE9BQU8scUJBQXFCO0lBSWhDLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFHUixDQUFDOzswRkFUVSxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ1JsQyx3RkFHZTs7UUFGWix5REFDRCx1RkFBQTs7a0RETVcscUJBQXFCO2NBTmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0M7c0NBR2lCLEtBQUs7a0JBQXBCLEtBQUs7bUJBQUMsT0FBTztZQUNBLEdBQUc7a0JBQWhCLEtBQUs7bUJBQUMsS0FBSztZQUNLLE1BQU07a0JBQXRCLEtBQUs7bUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3VzdG9tLWNvbHVtbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b20tY29sdW1uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tLWNvbHVtbi5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDdXN0b21Db2x1bW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ3ZhbHVlJykgdmFsdWU6IGFueTtcbiAgQElucHV0KCdyb3cnKSByb3c6IGFueTtcbiAgQElucHV0KCdjb2x1bW4nKSBjb2x1bW46IGFueTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuXG4gIH1cblxufVxuIiwiPG5nLWNvbnRhaW5lclxuICAqbmdUZW1wbGF0ZU91dGxldD1cInJvdy5jdXN0b21UZW1wbGF0ZTtcbiAgY29udGV4dDp7IHZhbHVlOiB2YWx1ZSxyb3c6IHJvdyxjb2x1bW46Y29sdW1uIH1cIj5cbjwvbmctY29udGFpbmVyPlxuIl19