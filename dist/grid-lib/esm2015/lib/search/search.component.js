//angular basic
import { Component, Input, ViewChild } from '@angular/core';
import { SimpleSearchConfig } from "../model/simpleSearch";
//rxjs import
import { debounce, distinctUntilChanged, filter, map } from "rxjs/operators";
import { fromEvent, Subscription, timer } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "../service/grid-actions-notifier";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
import * as i4 from "../directive/debounce-click.directive";
const _c0 = ["simpleSearchInput"];
function SearchComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.search.inputLabel);
} }
function SearchComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵelement(2, "i", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.search.iconCustomClass);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r1.search.icon);
} }
function SearchComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("debounceClick", function SearchComponent_button_6_Template_button_debounceClick_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.searchCompleteOnButtonPress(ctx_r4.searchModel); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r3.search.buttonCustomClass)("debounceTime", 700);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.search.buttonName, " ");
} }
export class SearchComponent {
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
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(i0.ɵɵdirectiveInject(i1.GridActionsNotifier)); };
SearchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SearchComponent, selectors: [["lib-search"]], viewQuery: function SearchComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.simpleSearchInput = _t.first);
    } }, inputs: { search: "search" }, decls: 7, vars: 5, consts: [[4, "ngIf"], [1, "input-group"], ["class", "input-group-prepend", 3, "ngClass", 4, "ngIf"], ["id", "search", "autocomplete", "off", "name", "searchModel", "aria-describedby", "inputGroupPrepend", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["simpleSearchInput", ""], ["type", "submit", "class", "btn", "appDebounceClick", "", 3, "ngClass", "debounceTime", "debounceClick", 4, "ngIf"], [1, "input-group-prepend", 3, "ngClass"], ["id", "inputGroupPrepend", 1, "input-group-text"], [3, "ngClass"], ["type", "submit", "appDebounceClick", "", 1, "btn", 3, "ngClass", "debounceTime", "debounceClick"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.search.inputLabel);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.search.icon);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.searchModel)("placeholder", ctx.search.placeHolder);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.search.haveButton);
    } }, directives: [i2.ɵangular_packages_forms_forms_y, i2.NgControlStatusGroup, i2.NgForm, i3.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i3.NgClass, i4.DebounceClickDirective], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SearchComponent, [{
        type: Component,
        args: [{
                selector: 'lib-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.css']
            }]
    }], function () { return [{ type: i1.GridActionsNotifier }]; }, { search: [{
            type: Input,
            args: ['search']
        }], simpleSearchInput: [{
            type: ViewChild,
            args: ['simpleSearchInput', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9ncmlkLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiLCJsaWIvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0FBQ2YsT0FBTyxFQUFDLFNBQVMsRUFBYyxLQUFLLEVBQXFCLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6RixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxhQUFhO0FBQ2IsT0FBTyxFQUFDLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0UsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7OztJQ05sRCw2QkFBaUM7SUFBQSxZQUFxQjtJQUFBLGlCQUFROzs7SUFBN0IsZUFBcUI7SUFBckIsOENBQXFCOzs7SUFFcEQsOEJBR0E7SUFBQSwrQkFDRTtJQUFBLHVCQUErQjtJQUNqQyxpQkFBTztJQUNQLGlCQUFNOzs7SUFKRCx1REFBa0M7SUFFbEMsZUFBdUI7SUFBdkIsNENBQXVCOzs7O0lBVzVCLGlDQVFFO0lBSE0seU9BQTBEO0lBR2hFLFlBQ0Y7SUFBQSxpQkFBUzs7O0lBTkQseURBQW9DLHFCQUFBO0lBSzFDLGVBQ0Y7SUFERSx5REFDRjs7QURiSixNQUFNLE9BQU8sZUFBZTtJQU0xQixZQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUwzQyxXQUFNLEdBQXVCLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUdoRSxpQkFBWSxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBR3ZELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJO1lBQ3pHLDBDQUEwQztZQUMxQyxhQUFhO1lBQ2IsUUFBUSxDQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFO2dCQUNoQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO29CQUN6QixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDcEI7Z0JBQ0QsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDO1lBQ0YsWUFBWTtZQUNaLEdBQUcsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO2dCQUNqQjs7bUJBRUc7Z0JBQ0gsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUM1QixDQUFDLENBQUM7WUFDRixxQ0FBcUM7Y0FDbkMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BELDhDQUE4QztjQUM1QyxvQkFBb0IsRUFBRTtZQUN4Qiw0QkFBNEI7YUFDN0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRTtnQkFDM0IscUJBQXFCO2dCQUNyQixJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQUM7U0FFSjtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCwyQkFBMkIsQ0FBQyxJQUFTO1FBQ25DLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7OzhFQWxEVSxlQUFlO29EQUFmLGVBQWU7Ozs7OztRQ2Q1Qiw0QkFDRTtRQUFBLG9FQUE4RDtRQUM5RCw4QkFDRTtRQUFBLGdFQU1NO1FBQ04sbUNBUUE7UUFKTyw2SUFBeUI7UUFKaEMsaUJBUUE7UUFBQSxzRUFTUztRQUNYLGlCQUFNO1FBQ1IsaUJBQU87O1FBNUJHLGVBQXVCO1FBQXZCLDRDQUF1QjtRQUV2QixlQUFpQjtRQUFqQixzQ0FBaUI7UUFXaEIsZUFBeUI7UUFBekIseUNBQXlCLHVDQUFBO1FBSXZCLGVBQXVCO1FBQXZCLDRDQUF1Qjs7a0RESnZCLGVBQWU7Y0FMM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUN0QztzRUFFa0IsTUFBTTtrQkFBdEIsS0FBSzttQkFBQyxRQUFRO1lBQ2lDLGlCQUFpQjtrQkFBaEUsU0FBUzttQkFBQyxtQkFBbUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FuZ3VsYXIgYmFzaWNcbmltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbnRlcm5hbCBpbXBvcnRcbmltcG9ydCB7R3JpZEFjdGlvbnNOb3RpZmllcn0gZnJvbSBcIi4uL3NlcnZpY2UvZ3JpZC1hY3Rpb25zLW5vdGlmaWVyXCI7XG5pbXBvcnQge1NpbXBsZVNlYXJjaENvbmZpZ30gZnJvbSBcIi4uL21vZGVsL3NpbXBsZVNlYXJjaFwiO1xuLy9yeGpzIGltcG9ydFxuaW1wb3J0IHtkZWJvdW5jZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7ZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24sIHRpbWVyfSBmcm9tIFwicnhqc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2VhcmNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoJ3NlYXJjaCcpIHNlYXJjaDogU2ltcGxlU2VhcmNoQ29uZmlnID0gbmV3IFNpbXBsZVNlYXJjaENvbmZpZygpO1xuICBAVmlld0NoaWxkKCdzaW1wbGVTZWFyY2hJbnB1dCcsIHtzdGF0aWM6IHRydWV9KSBzaW1wbGVTZWFyY2hJbnB1dCE6IEVsZW1lbnRSZWY7XG4gIHB1YmxpYyBzZWFyY2hNb2RlbDogYW55O1xuICBwdWJsaWMgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBncmlkQWN0aW9uc05vdGlmaWVyOiBHcmlkQWN0aW9uc05vdGlmaWVyKSB7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNlYXJjaC5oYXZlQnV0dG9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh0aGlzLnNpbXBsZVNlYXJjaElucHV0ICYmIHRoaXMuc2ltcGxlU2VhcmNoSW5wdXQubmF0aXZlRWxlbWVudCwgJ2tleXVwJykucGlwZShcbiAgICAgICAgLy8gVGltZSBpbiBtaWxsaXNlY29uZHMgYmV0d2VlbiBrZXkgZXZlbnRzXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZGVib3VuY2UoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleSAhPT0gJ0VudGVyJykge1xuICAgICAgICAgICAgcmV0dXJuIHRpbWVyKDEwMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGltZXIoMCk7XG4gICAgICAgIH0pLFxuICAgICAgICAvLyBnZXQgdmFsdWVcbiAgICAgICAgbWFwKChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogaGVyZSB3ZSBjaGVjayBldmVudC50YXJnZXQudmFsdWUgaWYgaXQgaXMgZW1wdHkgb3IgbGVuZ3RoIDwyIHdlIG11c3QgcmV0dXJuIGNsb25lIG9mIGxhc3QgZGF0YVxuICAgICAgICAgICAqL1xuICAgICAgICAgIHJldHVybiBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIH0pXG4gICAgICAgIC8vIGlmIGNoYXJhY3RlciBsZW5ndGggZ3JlYXRlciB0aGVuIDJcbiAgICAgICAgLCBmaWx0ZXIoKHJlcyA9PiByZXMubGVuZ3RoID09IDAgfHwgcmVzLmxlbmd0aCA+IDIpKVxuICAgICAgICAvLyBJZiBwcmV2aW91cyBxdWVyeSBpcyBkaWZmZXJlbnQgZnJvbSBjdXJyZW50XG4gICAgICAgICwgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgICAvLyBzdWJzY3JpcHRpb24gZm9yIHJlc3BvbnNlXG4gICAgICApLnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgIC8vIG5vdGlmeSBkYXRhIGNoYW5nZVxuICAgICAgICB0aGlzLnNlYXJjaENvbXBsZXRlT25CdXR0b25QcmVzcyh0ZXh0KTtcbiAgICAgIH0pO1xuXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRoaXNcbiAgICogQHBhcmFtIGRhdGEtIGl0cyBzZWFyY2ggZmllbGQgdmFsdWUgYW5kXG4gICAqL1xuICBzZWFyY2hDb21wbGV0ZU9uQnV0dG9uUHJlc3MoZGF0YTogYW55KSB7XG4gICAgdGhpcy5ncmlkQWN0aW9uc05vdGlmaWVyLmJyb2FkY2FzdCgnc2ltcGxlU2VhcmNoJywgZGF0YSk7XG4gIH1cbn1cbiIsIjxmb3JtPlxuICA8bGFiZWwgKm5nSWY9XCJzZWFyY2guaW5wdXRMYWJlbFwiPnt7c2VhcmNoLmlucHV0TGFiZWx9fTwvbGFiZWw+XG4gIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgIDxkaXYgKm5nSWY9XCJzZWFyY2guaWNvblwiXG4gICAgICAgICBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIlxuICAgICAgICAgW25nQ2xhc3NdPVwic2VhcmNoLmljb25DdXN0b21DbGFzc1wiPlxuICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIGlkPVwiaW5wdXRHcm91cFByZXBlbmRcIj5cbiAgICAgIDxpIFtuZ0NsYXNzXT1cInNlYXJjaC5pY29uXCI+PC9pPlxuICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8aW5wdXQgaWQ9XCJzZWFyY2hcIlxuICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgIG5hbWU9XCJzZWFyY2hNb2RlbFwiXG4gICAgICAgICAgIFsobmdNb2RlbCldPVwic2VhcmNoTW9kZWxcIlxuICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwic2VhcmNoLnBsYWNlSG9sZGVyXCJcbiAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImlucHV0R3JvdXBQcmVwZW5kXCJcbiAgICAgICAgICAgI3NpbXBsZVNlYXJjaElucHV0PlxuICAgIDxidXR0b24gKm5nSWY9XCJzZWFyY2guaGF2ZUJ1dHRvblwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInNlYXJjaC5idXR0b25DdXN0b21DbGFzc1wiXG4gICAgICAgICAgICBhcHBEZWJvdW5jZUNsaWNrXG4gICAgICAgICAgICAoZGVib3VuY2VDbGljayk9XCJzZWFyY2hDb21wbGV0ZU9uQnV0dG9uUHJlc3Moc2VhcmNoTW9kZWwpXCJcbiAgICAgICAgICAgIFtkZWJvdW5jZVRpbWVdPVwiNzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgIHt7c2VhcmNoLmJ1dHRvbk5hbWV9fVxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZm9ybT5cblxuIl19