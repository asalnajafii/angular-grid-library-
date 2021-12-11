import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-bootstrap/tooltip";
const _c0 = function (a0) { return { "color": a0 }; };
function IconColumnComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 1);
    i0.ɵɵelementStart(2, "i", 2);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", icon_r1.customClass)("tooltip", icon_r1.tooltip.tooltipText)("delay", icon_r1.tooltip.delay)("isDisabled", icon_r1.tooltip.isDisabled)("tooltipAnimation", icon_r1.tooltip.tooltipAnimation)("placement", icon_r1.tooltip.hasOwnProperty("placement") ? icon_r1.tooltip.placement : "top");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", icon_r1.icon)("ngStyle", i0.ɵɵpureFunction1(9, _c0, icon_r1.color));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(icon_r1.name);
} }
export class IconColumnComponent {
    constructor() { }
    ngOnInit() {
    }
}
IconColumnComponent.ɵfac = function IconColumnComponent_Factory(t) { return new (t || IconColumnComponent)(); };
IconColumnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: IconColumnComponent, selectors: [["icon-column"]], inputs: { value: "value", row: "row" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "mr-2", 3, "ngClass", "tooltip", "delay", "isDisabled", "tooltipAnimation", "placement"], [3, "ngClass", "ngStyle"]], template: function IconColumnComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, IconColumnComponent_ng_container_0_Template, 4, 11, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.row.icons);
    } }, directives: [i1.NgForOf, i1.NgClass, i2.TooltipDirective, i1.NgStyle], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(IconColumnComponent, [{
        type: Component,
        args: [{
                selector: 'icon-column',
                templateUrl: './icon-column.component.html',
                styleUrls: ['./icon-column.component.css']
            }]
    }], function () { return []; }, { value: [{
            type: Input,
            args: ['value']
        }], row: [{
            type: Input,
            args: ['row']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2dyaWQtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9ncmlkL2NvbHVtbnMtdHlwZS9pY29uLWNvbHVtbi9pY29uLWNvbHVtbi5jb21wb25lbnQudHMiLCJsaWIvZ3JpZC9jb2x1bW5zLXR5cGUvaWNvbi1jb2x1bW4vaWNvbi1jb2x1bW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0F2RCw2QkFDRTtJQUFBLCtCQVFHO0lBQUEsNEJBQTJEO0lBQUEsWUFBYTtJQUFBLGlCQUFJO0lBQy9FLGlCQUFPO0lBQ1QsMEJBQWU7OztJQVRQLGVBQTRCO0lBQTVCLDZDQUE0Qix3Q0FBQSxnQ0FBQSwwQ0FBQSxzREFBQSw4RkFBQTtJQU8zQixlQUFxQjtJQUFyQixzQ0FBcUIsc0RBQUE7SUFBa0MsZUFBYTtJQUFiLGtDQUFhOztBREY3RSxNQUFNLE9BQU8sbUJBQW1CO0lBRzlCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOztzRkFOVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjtRQ1BoQyx1RkFXZTs7UUFYZ0IsdUNBQVk7O2tERE85QixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQztzQ0FFaUIsS0FBSztrQkFBcEIsS0FBSzttQkFBQyxPQUFPO1lBQ0EsR0FBRztrQkFBaEIsS0FBSzttQkFBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpY29uLWNvbHVtbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLWNvbHVtbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ljb24tY29sdW1uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJY29uQ29sdW1uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCd2YWx1ZScpIHZhbHVlOiBhbnk7XG4gIEBJbnB1dCgncm93Jykgcm93OiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaWNvbiBvZiByb3cuaWNvbnNcIj5cbiAgPHNwYW4gY2xhc3M9XCJtci0yXCJcbiAgICAgICAgW25nQ2xhc3NdPVwiaWNvbi5jdXN0b21DbGFzc1wiXG4gICAgICAgIFt0b29sdGlwXT1cImljb24udG9vbHRpcC50b29sdGlwVGV4dFwiXG4gICAgICAgIFtkZWxheV09XCJpY29uLnRvb2x0aXAuZGVsYXlcIlxuICAgICAgICBbaXNEaXNhYmxlZF09XCJpY29uLnRvb2x0aXAuaXNEaXNhYmxlZFwiXG4gICAgICAgIFt0b29sdGlwQW5pbWF0aW9uXT1cImljb24udG9vbHRpcC50b29sdGlwQW5pbWF0aW9uXCJcbiAgICAgICAgW3BsYWNlbWVudF09XCJpY29uLnRvb2x0aXAuaGFzT3duUHJvcGVydHkoJ3BsYWNlbWVudCcpP2ljb24udG9vbHRpcC5wbGFjZW1lbnQ6J3RvcCdcIlxuICA+XG4gICAgIDxpICBbbmdDbGFzc109XCJpY29uLmljb25cIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzppY29uLmNvbG9yfVwiPnt7aWNvbi5uYW1lfX08L2k+XG4gIDwvc3Bhbj5cbjwvbmctY29udGFpbmVyPlxuIl19