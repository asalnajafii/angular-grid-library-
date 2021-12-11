import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BooleanColumnComponent {
    constructor() { }
    ngOnInit() {
    }
}
BooleanColumnComponent.ɵfac = function BooleanColumnComponent_Factory(t) { return new (t || BooleanColumnComponent)(); };
BooleanColumnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BooleanColumnComponent, selectors: [["boolean-column"]], inputs: { value: "value", row: "row" }, decls: 2, vars: 1, template: function BooleanColumnComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.value);
    } }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BooleanColumnComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2dyaWQtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9ncmlkL2NvbHVtbnMtdHlwZS9ib29sZWFuLWNvbHVtbi9ib29sZWFuLWNvbHVtbi5jb21wb25lbnQudHMiLCJsaWIvZ3JpZC9jb2x1bW5zLXR5cGUvYm9vbGVhbi1jb2x1bW4vYm9vbGVhbi1jb2x1bW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7O0FBT3ZELE1BQU0sT0FBTyxzQkFBc0I7SUFHakMsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OzRGQU5VLHNCQUFzQjsyREFBdEIsc0JBQXNCO1FDUG5DLDRCQUFNO1FBQUEsWUFBUztRQUFBLGlCQUFPOztRQUFoQixlQUFTO1FBQVQsK0JBQVM7O2tERE9GLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUM7c0NBRWlCLEtBQUs7a0JBQXBCLEtBQUs7bUJBQUMsT0FBTztZQUNBLEdBQUc7a0JBQWhCLEtBQUs7bUJBQUMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm9vbGVhbi1jb2x1bW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vYm9vbGVhbi1jb2x1bW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ib29sZWFuLWNvbHVtbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQm9vbGVhbkNvbHVtbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgndmFsdWUnKSB2YWx1ZTogYW55O1xuICBASW5wdXQoJ3JvdycpIHJvdzogYW55O1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiIsIjxzcGFuPnt7dmFsdWV9fTwvc3Bhbj5cblxuIl19