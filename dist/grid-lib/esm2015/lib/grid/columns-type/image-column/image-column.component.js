import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0) { return { "max-width.px": a0 }; };
export class ImageColumnComponent {
    constructor() {
        this.styles = {};
    }
    ngOnInit() {
    }
}
ImageColumnComponent.ɵfac = function ImageColumnComponent_Factory(t) { return new (t || ImageColumnComponent)(); };
ImageColumnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ImageColumnComponent, selectors: [["image-column"]], inputs: { value: "value", row: "row" }, decls: 1, vars: 9, consts: [[3, "src", "alt", "ngClass", "ngStyle"]], template: function ImageColumnComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "img", 0);
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("img-thumbnail ", "float-" + ctx.row.float, "");
        i0.ɵɵpropertyInterpolate("src", ctx.value, i0.ɵɵsanitizeUrl);
        i0.ɵɵpropertyInterpolate("alt", ctx.row.alt);
        i0.ɵɵproperty("ngClass", ctx.row.customClass ? ctx.row.customClass : "")("ngStyle", i0.ɵɵpureFunction1(7, _c0, ctx.row.maxWidth));
    } }, directives: [i1.NgClass, i1.NgStyle], styles: [".float-none[_ngcontent-%COMP%]{display:block!important;margin-left:auto!important;margin-right:auto!important}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ImageColumnComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9ncmlkLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvZ3JpZC9jb2x1bW5zLXR5cGUvaW1hZ2UtY29sdW1uL2ltYWdlLWNvbHVtbi5jb21wb25lbnQudHMiLCJsaWIvZ3JpZC9jb2x1bW5zLXR5cGUvaW1hZ2UtY29sdW1uL2ltYWdlLWNvbHVtbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQzs7OztBQU92RCxNQUFNLE9BQU8sb0JBQW9CO0lBSy9CO1FBRk8sV0FBTSxHQUFRLEVBQUUsQ0FBQztJQUd4QixDQUFDO0lBRUQsUUFBUTtJQUdSLENBQUM7O3dGQVhVLG9CQUFvQjt5REFBcEIsb0JBQW9CO1FDUGpDLHlCQU1BOztRQUpLLHlFQUE0QztRQUY1Qyw0REFBZTtRQUNmLDRDQUFpQjtRQUVqQix3RUFBOEMseURBQUE7O2tEREl0QyxvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1QztzQ0FFaUIsS0FBSztrQkFBcEIsS0FBSzttQkFBQyxPQUFPO1lBQ0EsR0FBRztrQkFBaEIsS0FBSzttQkFBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbWFnZS1jb2x1bW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtY29sdW1uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtY29sdW1uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUNvbHVtbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgndmFsdWUnKSB2YWx1ZTogYW55O1xuICBASW5wdXQoJ3JvdycpIHJvdzogYW55O1xuICBwdWJsaWMgc3R5bGVzOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG5cbiAgfVxuXG59XG4iLCI8aW1nIHNyYz1cInt7dmFsdWV9fVwiXG4gICAgIGFsdD1cInt7cm93LmFsdH19XCJcbiAgICAgY2xhc3M9XCJpbWctdGh1bWJuYWlsIHt7J2Zsb2F0LScrcm93LmZsb2F0fX1cIlxuICAgICBbbmdDbGFzc109XCJyb3cuY3VzdG9tQ2xhc3M/cm93LmN1c3RvbUNsYXNzOicnXCJcbiAgICAgW25nU3R5bGVdPVwieydtYXgtd2lkdGgucHgnOnJvdy5tYXhXaWR0aH1cIlxuPlxuIl19