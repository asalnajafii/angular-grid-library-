import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { take } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "../../../service/grid-factory.service";
import * as i2 from "@angular/common";
const _c0 = ["readMoreTemplate"];
const _c1 = function (a0, a1) { return [a0, a1]; };
function ReadMoreColumnComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c1, ctx_r0.row.iconName ? ctx_r0.row.iconName : "", ctx_r0.addClass ? "rotate" : ""));
} }
function ReadMoreColumnComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.row.btnName);
} }
export class ReadMoreColumnComponent {
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
ReadMoreColumnComponent.ɵfac = function ReadMoreColumnComponent_Factory(t) { return new (t || ReadMoreColumnComponent)(i0.ɵɵdirectiveInject(i1.GridFactoryService)); };
ReadMoreColumnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ReadMoreColumnComponent, selectors: [["read-more-column"]], viewQuery: function ReadMoreColumnComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.readMoreTemplate = _t.first);
    } }, inputs: { value: "value", row: "row", column: "column" }, outputs: { readMoreData: "readMoreData", collapsedNotifier: "collapsedNotifier" }, decls: 3, vars: 3, consts: [["role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 3, "ngClass", "click"], ["class", "read-more-icon", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "read-more-icon", 3, "ngClass"]], template: function ReadMoreColumnComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 0);
        i0.ɵɵlistener("click", function ReadMoreColumnComponent_Template_a_click_0_listener() { return ctx.triggerCollapsed(ctx.column.id); });
        i0.ɵɵtemplate(1, ReadMoreColumnComponent_i_1_Template, 1, 4, "i", 1);
        i0.ɵɵtemplate(2, ReadMoreColumnComponent_span_2_Template, 2, 1, "span", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.row.btnClass ? ctx.row.btnClass : "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.row.iconName);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.row.btnName);
    } }, directives: [i2.NgClass, i2.NgIf], styles: [".rotate[_ngcontent-%COMP%]{transform:rotate(90deg)}.read-more-icon[_ngcontent-%COMP%], .rotate[_ngcontent-%COMP%]{transition:.9s}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ReadMoreColumnComponent, [{
        type: Component,
        args: [{
                selector: 'read-more-column',
                templateUrl: './read-more-column.component.html',
                styleUrls: ['./read-more-column.component.css']
            }]
    }], function () { return [{ type: i1.GridFactoryService }]; }, { value: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1tb3JlLWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvZ3JpZC1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2dyaWQvY29sdW1ucy10eXBlL3JlYWQtbW9yZS1jb2x1bW4vcmVhZC1tb3JlLWNvbHVtbi5jb21wb25lbnQudHMiLCJsaWIvZ3JpZC9jb2x1bW5zLXR5cGUvcmVhZC1tb3JlLWNvbHVtbi9yZWFkLW1vcmUtY29sdW1uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztJQ0dsQyx1QkFFdUU7OztJQUFwRSxxSUFBK0Q7OztJQUNsRSw0QkFBMEI7SUFBQSxZQUFlO0lBQUEsaUJBQU87OztJQUF0QixlQUFlO0lBQWYsd0NBQWU7O0FERTNDLE1BQU0sT0FBTyx1QkFBdUI7SUFjbEMsWUFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFUaEQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3ZDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEQsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztJQVFqQixDQUFDO0lBRUQ7O09BRUc7SUFDSCx1QkFBdUI7UUFDckI7O1dBRUc7UUFDSCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDO1FBQ3JDLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM1QixHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVFOztXQUVHO1FBQ0gsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDeEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEdBQUcsQ0FBQztZQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztRQUN6RixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCxnQkFBZ0IsQ0FBQyxFQUFVO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLDREQUE0RDtRQUM1RCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxTQUFTLEVBQUU7WUFDL0UsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNwRSxhQUFhO1FBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OEZBbkRVLHVCQUF1Qjs0REFBdkIsdUJBQXVCOzs7Ozs7UUNWcEMsNEJBS0U7UUFMQywrRkFBUyxtQ0FBMkIsSUFBQztRQUt0QyxvRUFFdUU7UUFDdkUsMEVBQWdEO1FBQ2xELGlCQUFJOztRQU5ELGtFQUF3QztRQUVyQyxlQUFrQjtRQUFsQix1Q0FBa0I7UUFHZixlQUFpQjtRQUFqQixzQ0FBaUI7O2tEREViLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQ7cUVBRWlCLEtBQUs7a0JBQXBCLEtBQUs7bUJBQUMsT0FBTztZQUNBLEdBQUc7a0JBQWhCLEtBQUs7bUJBQUMsS0FBSztZQUNLLE1BQU07a0JBQXRCLEtBQUs7bUJBQUMsUUFBUTtZQUVMLFlBQVk7a0JBQXJCLE1BQU07WUFDRyxpQkFBaUI7a0JBQTFCLE1BQU07WUFNd0MsZ0JBQWdCO2tCQUE5RCxTQUFTO21CQUFDLGtCQUFrQixFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtHcmlkRmFjdG9yeVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlL2dyaWQtZmFjdG9yeS5zZXJ2aWNlXCI7XG5pbXBvcnQge3Rha2V9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZWFkLW1vcmUtY29sdW1uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlYWQtbW9yZS1jb2x1bW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWFkLW1vcmUtY29sdW1uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWFkTW9yZUNvbHVtbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgndmFsdWUnKSB2YWx1ZTogYW55O1xuICBASW5wdXQoJ3JvdycpIHJvdzogYW55O1xuICBASW5wdXQoJ2NvbHVtbicpIGNvbHVtbjogYW55O1xuXG4gIEBPdXRwdXQoKSByZWFkTW9yZURhdGEgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNvbGxhcHNlZE5vdGlmaWVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIGFkZENsYXNzOiBib29sZWFuID0gZmFsc2U7XG4gIGlzQ29sbGFwc2VkID0gW107XG4gIGNsb25lRGF0YU9ic2VydmFibGUhOiBPYnNlcnZhYmxlPGFueT4gfCB1bmRlZmluZWQ7XG5cblxuICBAVmlld0NoaWxkKCdyZWFkTW9yZVRlbXBsYXRlJywge3N0YXRpYzogdHJ1ZX0pIHJlYWRNb3JlVGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JpZEZhY3RvcnlTZXJ2aWNlOiBHcmlkRmFjdG9yeVNlcnZpY2UpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIGNhbGwgcmVhZCBtb3JlIHNlcnZpY2VcbiAgICovXG4gIGdlbmVyYXRlUmVhZE1vcmVTZXJ2aWNlKCkge1xuICAgIC8qKlxuICAgICAqIHdlIGhhdmUgdG8gc2VuZCByZXF1ZXN0IGp1c3QgaW4gZmlyc3QgdGltZSBpbiBvdGhlciBzaXR1YXRpb24gd2UgbXVzdCBqdXN0IHRvZ2dsZVxuICAgICAqL1xuICAgIHRoaXMuY2xvbmVEYXRhT2JzZXJ2YWJsZSA9IHVuZGVmaW5lZDtcbiAgICBsZXQgdXJsID0gYCR7dGhpcy5yb3cudXJsfWA7XG4gICAgdXJsID0gdXJsLnJlcGxhY2UoJ3t7dmFsdWV9fScsIHRoaXMudmFsdWUpO1xuICAgIGxldCBzZXJ2aWNlID0gdGhpcy5ncmlkRmFjdG9yeVNlcnZpY2UuQ3JlYXRlR3JpZFNlcnZpY2UodGhpcy5yb3cubW9kZWxUeXBlKTtcbiAgICAvKipcbiAgICAgKiBodHRwIHNlcnZpY2UgZ2VuZXJhdG9yXG4gICAgICovXG4gICAgc2VydmljZS5nZXREYXRhKHVybCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICB0aGlzLmNsb25lRGF0YU9ic2VydmFibGUgPSByZXM7XG4gICAgICB0aGlzLnJlYWRNb3JlRGF0YS5lbWl0KHtkYXRhOiByZXMsIGlkOiB0aGlzLnZhbHVlLCB0YWJsZUNvbmZpZzogdGhpcy5yb3cudGFibGVDb25maWd9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBpdCB0cmlnZ2VyIGNvbGxhcHNlZCBhbmQgZW1pdCBpdCB0byBncmlkIGNvbXBvbmVudCB0byBzaG93IGFuZCBoaWRlIGRhdGFcbiAgICogQHBhcmFtIGlkIHtudW1iZXJ9LSB3aGljaCBpdGVtIGNsaWNrXG4gICAqL1xuICB0cmlnZ2VyQ29sbGFwc2VkKGlkOiBudW1iZXIpIHtcbiAgICB0aGlzLmFkZENsYXNzID0gIXRoaXMuYWRkQ2xhc3M7XG4gICAgLy8gaWYgZmlyc3QgdGltZSB3ZSBtdXN0IHNlbmQgcmVxdWVzdCBlbHNlIHdlIGp1c3QgY29sbGFwc2VkXG4gICAgaWYgKHRoaXMuY2xvbmVEYXRhT2JzZXJ2YWJsZSA9PT0gdW5kZWZpbmVkICYmIHRoaXMuaXNDb2xsYXBzZWRbaWRdID09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5nZW5lcmF0ZVJlYWRNb3JlU2VydmljZSgpO1xuICAgIH1cbiAgICB0aGlzLmNvbGxhcHNlZE5vdGlmaWVyLmVtaXQoe2lkOiBpZCwgc3RhdGU6ICF0aGlzLmlzQ29sbGFwc2VkW2lkXX0pO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aGlzLmlzQ29sbGFwc2VkW2lkXSA9ICF0aGlzLmlzQ29sbGFwc2VkW2lkXTtcbiAgfVxufVxuIiwiPGEgKGNsaWNrKT1cInRyaWdnZXJDb2xsYXBzZWQoY29sdW1uLmlkKVwiXG4gICByb2xlPVwiYnV0dG9uXCJcbiAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICBbbmdDbGFzc109XCJyb3cuYnRuQ2xhc3M/cm93LmJ0bkNsYXNzOicnXCJcbiAgIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZUV4YW1wbGVcIj5cbiAgPGkgKm5nSWY9XCJyb3cuaWNvbk5hbWVcIlxuICAgICBjbGFzcz1cInJlYWQtbW9yZS1pY29uXCJcbiAgICAgW25nQ2xhc3NdPVwiW3Jvdy5pY29uTmFtZT9yb3cuaWNvbk5hbWU6JycsYWRkQ2xhc3M/J3JvdGF0ZSc6JyddXCI+PC9pPlxuICA8c3BhbiAqbmdJZj1cInJvdy5idG5OYW1lXCI+e3tyb3cuYnRuTmFtZX19PC9zcGFuPlxuPC9hPlxuXG5cblxuIl19