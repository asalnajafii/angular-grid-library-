import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-bootstrap/dropdown";
import * as i3 from "ngx-bootstrap/tooltip";
import * as i4 from "../../../pipes/action-class.pipe";
import * as i5 from "../../../pipes/row-change-name.pipe";
function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i");
} if (rf & 2) {
    const action_r2 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵclassMap(action_r2.dropDownIcon);
} }
function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_ng_container_1_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i");
    i0.ɵɵpipe(1, "rowChangeName");
} if (rf & 2) {
    const dropDownOption_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r14 = i0.ɵɵnextContext(6);
    i0.ɵɵclassMap(i0.ɵɵpipeBind2(1, 3, ctx_r14.column, dropDownOption_r12.icon));
} }
function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} }
function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 11);
    i0.ɵɵelementStart(2, "a", 12);
    i0.ɵɵlistener("click", function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_ng_container_1_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r18); const dropDownOption_r12 = ctx.$implicit; const ctx_r17 = i0.ɵɵnextContext(6); return dropDownOption_r12.onclick(ctx_r17.column); });
    i0.ɵɵtemplate(3, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_ng_container_1_i_3_Template, 2, 6, "i", 7);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "rowChangeName");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_ng_container_1_div_6_Template, 1, 0, "div", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const dropDownOption_r12 = ctx.$implicit;
    const ctx_r11 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", dropDownOption_r12.customClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", dropDownOption_r12.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(5, 4, ctx_r11.column, dropDownOption_r12.name), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", dropDownOption_r12.dropdownDivider);
} }
function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 10);
    i0.ɵɵtemplate(1, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_ng_container_1_Template, 7, 7, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r2 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", action_r2.dropDownItems);
} }
const _c0 = function (a0) { return { "padding": a0 }; };
function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 5);
    i0.ɵɵelementStart(2, "button", 6);
    i0.ɵɵpipe(3, "actionBtnClass");
    i0.ɵɵtemplate(4, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_i_4_Template, 1, 3, "i", 7);
    i0.ɵɵtext(5);
    i0.ɵɵelement(6, "span", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_ul_7_Template, 2, 1, "ul", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const action_r2 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("btn dropdown-toggle ", action_r2.customClass, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(9, _c0, ctx_r5.row.buttonPadding))("ngClass", i0.ɵɵpipeBind1(3, 7, action_r2));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", action_r2.dropDownIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", action_r2.name, " ");
} }
function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span");
} if (rf & 2) {
    const action_r2 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(action_r2.classCallback(ctx_r21.column));
} }
function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 17);
} if (rf & 2) {
    const action_r2 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngClass", action_r2.icon);
} }
function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r2 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", action_r2.name, "");
} }
function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r28); const action_r2 = i0.ɵɵnextContext(2).$implicit; const ctx_r27 = i0.ɵɵnextContext(2); return action_r2.onclick(ctx_r27.column); });
    i0.ɵɵpipe(1, "actionBtnClass");
    i0.ɵɵtemplate(2, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_span_2_Template, 1, 2, "span", 7);
    i0.ɵɵtemplate(3, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_i_3_Template, 1, 1, "i", 16);
    i0.ɵɵtemplate(4, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_span_4_Template, 2, 1, "span", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r2 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(i0.ɵɵpipeBind1(1, 12, action_r2));
    i0.ɵɵproperty("tooltip", action_r2.tooltip ? action_r2.tooltip.tooltipText : "")("placement", action_r2.tooltip ? action_r2.tooltip.placement : "")("delay", action_r2.tooltip ? action_r2.tooltip.delay : "")("ngStyle", i0.ɵɵpureFunction1(14, _c0, ctx_r7.row.buttonPadding))("isDisabled", action_r2.tooltip ? action_r2.tooltip.isDisabled : "")("tooltipAnimation", action_r2.tooltip ? action_r2.tooltip.tooltipAnimation : "")("ngClass", action_r2.customClass);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", action_r2.classCallback(ctx_r7.column));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", action_r2.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", action_r2.name);
} }
function ActionColumnComponent_ng_container_1_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_container_1_Template, 8, 11, "ng-container", 3);
    i0.ɵɵtemplate(2, ActionColumnComponent_ng_container_1_span_1_ng_container_1_ng_template_2_Template, 5, 16, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r6 = i0.ɵɵreference(3);
    const action_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", action_r2.buttonType == ctx_r3.buttonType.DropDownButton)("ngIfElse", _r6);
} }
const _c1 = function (a0) { return { row: a0 }; };
function ActionColumnComponent_ng_container_1_span_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 18);
} if (rf & 2) {
    const action_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", action_r2.customTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx_r4.column));
} }
function ActionColumnComponent_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, ActionColumnComponent_ng_container_1_span_1_ng_container_1_Template, 4, 2, "ng-container", 0);
    i0.ɵɵtemplate(2, ActionColumnComponent_ng_container_1_span_1_ng_container_2_Template, 1, 4, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !action_r2.customTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", action_r2.customTemplate);
} }
function ActionColumnComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ActionColumnComponent_ng_container_1_span_1_Template, 3, 2, "span", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.row.buttonItems);
} }
export var buttonTypeEnum;
(function (buttonTypeEnum) {
    buttonTypeEnum["DropDownButton"] = "DropDownButton";
    buttonTypeEnum["simpleButton"] = "simpleButton";
})(buttonTypeEnum || (buttonTypeEnum = {}));
export class ActionColumnComponent {
    constructor() {
    }
    ngOnInit() {
    }
    /**
     *  @method  access to enum data
     */
    get buttonType() {
        return buttonTypeEnum;
    }
}
ActionColumnComponent.ɵfac = function ActionColumnComponent_Factory(t) { return new (t || ActionColumnComponent)(); };
ActionColumnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ActionColumnComponent, selectors: [["action-column"]], inputs: { value: "value", row: "row", column: "column" }, decls: 2, vars: 4, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["simpleButton", ""], ["dropdown", "", 1, "btn-group"], ["id", "button-basic", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-custom-html", 3, "ngStyle", "ngClass"], [3, "class", 4, "ngIf"], [1, "caret"], ["id", "dropdown-basic", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-basic", 4, "dropdownMenu"], ["id", "dropdown-basic", "role", "menu", "aria-labelledby", "button-basic", 1, "dropdown-menu"], ["role", "menuitem"], [1, "dropdown-item", 3, "ngClass", "click"], ["class", "dropdown-divider", 4, "ngIf"], [1, "dropdown-divider"], [1, "btn", 3, "tooltip", "placement", "delay", "ngStyle", "isDisabled", "tooltipAnimation", "ngClass", "click"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function ActionColumnComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtemplate(1, ActionColumnComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap("text-" + ctx.row.position);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.row.buttonItems);
    } }, directives: [i1.NgIf, i1.NgForOf, i2.BsDropdownDirective, i2.BsDropdownToggleDirective, i1.NgStyle, i1.NgClass, i2.BsDropdownMenuDirective, i3.TooltipDirective, i1.NgTemplateOutlet], pipes: [i4.ActionClassPipe, i5.RowChangeNamePipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ActionColumnComponent, [{
        type: Component,
        args: [{
                selector: 'action-column',
                templateUrl: './action-column.component.html',
                styleUrls: ['./action-column.component.css']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvZ3JpZC1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2dyaWQvY29sdW1ucy10eXBlL2FjdGlvbi1jb2x1bW4vYWN0aW9uLWNvbHVtbi5jb21wb25lbnQudHMiLCJsaWIvZ3JpZC9jb2x1bW5zLXR5cGUvYWN0aW9uLWNvbHVtbi9hY3Rpb24tY29sdW1uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQ2lCcEMsb0JBQW1FOzs7SUFBcEMscUNBQStCOzs7SUFXbEQsb0JBQXdGOzs7OztJQUF6RCw0RUFBb0Q7OztJQUl6RiwwQkFBMkU7Ozs7SUFUOUUsNkJBQ0c7SUFBQSw4QkFDRTtJQUFBLDZCQUdJO0lBREQsNFFBQVMsMENBQThCLElBQUM7SUFDdkMsMElBQXdGO0lBQzFGLFlBQ0Y7O0lBQUEsaUJBQUk7SUFDTixpQkFBSztJQUNMLCtJQUEyRTtJQUM5RSwwQkFBZTs7OztJQVBQLGVBQXNDO0lBQXRDLHdEQUFzQztJQUVqQyxlQUF5QjtJQUF6Qiw4Q0FBeUI7SUFDL0IsZUFDRjtJQURFLDhGQUNGO0lBRUksZUFBb0M7SUFBcEMseURBQW9DOzs7SUFYakQsOEJBRUk7SUFBQSxpSkFVZTtJQUNuQixpQkFBSzs7O0lBWHdDLGVBQXdCO0lBQXhCLGlEQUF3Qjs7OztJQWYzRSw2QkFDRTtJQUFBLCtCQUNFO0lBQUEsaUNBT0c7O0lBQUEsc0hBQW1FO0lBQ3BFLFlBQ0E7SUFBQSwwQkFBMkI7SUFDN0IsaUJBQVM7SUFDUCx3SEFhSztJQUNMLGlCQUFPO0lBQ2IsMEJBQWU7Ozs7SUFyQkgsZUFBa0Q7SUFBbEQsNEVBQWtEO0lBRmxELDhFQUEwQyw0Q0FBQTtJQUkzQyxlQUF5QjtJQUF6Qiw2Q0FBeUI7SUFDOUIsZUFDQTtJQURBLCtDQUNBOzs7SUE4QkQsdUJBQXlGOzs7O0lBQTlDLHNEQUFzQzs7O0lBQ3BGLHdCQUFtRDs7O0lBQTVCLHdDQUF1Qjs7O0lBQzlDLDRCQUEyQjtJQUFBLFlBQWU7SUFBQSxpQkFBTzs7O0lBQXRCLGVBQWU7SUFBZiw4Q0FBZTs7OztJQVozQyxrQ0FVSTtJQURJLG1RQUFTLGlDQUFzQixJQUFDOztJQUNwQywySEFBeUY7SUFDNUYsc0hBQW1EO0lBQ25ELDJIQUFpRDtJQUNqRCxpQkFBUzs7OztJQU5GLCtDQUErQjtJQU4vQixnRkFBd0QsbUVBQUEsMkRBQUEsa0VBQUEscUVBQUEsaUZBQUEsa0NBQUE7SUFTckQsZUFBa0M7SUFBbEMsNkRBQWtDO0lBQ3hDLGVBQWlCO0lBQWpCLHFDQUFpQjtJQUNkLGVBQWlCO0lBQWpCLHFDQUFpQjs7O0lBN0M1Qiw2QkFDSTtJQUNGLDhIQTRCZTtJQUVkLDZKQWVjO0lBQ2pCLDBCQUFlOzs7OztJQTlDRSxlQUFtRDtJQUFuRCwrRUFBbUQsaUJBQUE7Ozs7SUFnRHBFLDRCQUVVOzs7O0lBRmtDLDJEQUEwQyxzRUFBQTs7O0lBcER2Riw0QkFDSTtJQUNILDhHQWdEZTtJQUVmLDhHQUVVO0lBQ1osaUJBQU87OztJQXJEVSxlQUE0QjtJQUE1QixnREFBNEI7SUFrRDVCLGVBQTJCO0lBQTNCLCtDQUEyQjs7O0lBckRsRCw2QkFDTztJQUFBLHVGQXVETTtJQUNiLDBCQUFlOzs7SUF4RGlCLGVBQWtCO0lBQWxCLGdEQUFrQjs7QURGcEQsTUFBTSxDQUFOLElBQVksY0FHWDtBQUhELFdBQVksY0FBYztJQUN4QixtREFBaUMsQ0FBQTtJQUNqQywrQ0FBNkIsQ0FBQTtBQUMvQixDQUFDLEVBSFcsY0FBYyxLQUFkLGNBQWMsUUFHekI7QUFPRCxNQUFNLE9BQU8scUJBQXFCO0lBTWhDO0lBQ0EsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBQ0Q7O09BRUc7SUFDSCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQzs7MEZBaEJVLHFCQUFxQjswREFBckIscUJBQXFCO1FDWGxDLDJCQUNFO1FBQ0Esd0ZBeURlO1FBQ2pCLGlCQUFNOztRQTVERCx5Q0FBZ0M7UUFFcEIsZUFBcUI7UUFBckIsMENBQXFCOztrRERTekIscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0M7c0NBRWlCLEtBQUs7a0JBQXBCLEtBQUs7bUJBQUMsT0FBTztZQUNBLEdBQUc7a0JBQWhCLEtBQUs7bUJBQUMsS0FBSztZQUNLLE1BQU07a0JBQXRCLEtBQUs7bUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGVudW0gYnV0dG9uVHlwZUVudW0ge1xuICBEcm9wRG93bkJ1dHRvbiA9ICdEcm9wRG93bkJ1dHRvbicsXG4gIHNpbXBsZUJ1dHRvbiA9ICdzaW1wbGVCdXR0b24nXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FjdGlvbi1jb2x1bW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWN0aW9uLWNvbHVtbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FjdGlvbi1jb2x1bW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFjdGlvbkNvbHVtbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgndmFsdWUnKSB2YWx1ZTogYW55O1xuICBASW5wdXQoJ3JvdycpIHJvdzogYW55O1xuICBASW5wdXQoJ2NvbHVtbicpIGNvbHVtbjogYW55O1xuXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuICAvKipcbiAgICogIEBtZXRob2QgIGFjY2VzcyB0byBlbnVtIGRhdGFcbiAgICovXG4gIHB1YmxpYyBnZXQgYnV0dG9uVHlwZSgpOiB0eXBlb2YgYnV0dG9uVHlwZUVudW0ge1xuICAgIHJldHVybiBidXR0b25UeXBlRW51bTtcbiAgfVxuXG5cbn1cbiIsIjwhLS13cmFwLS0+XG48ZGl2IGNsYXNzPVwie3sndGV4dC0nK3Jvdy5wb3NpdGlvbn19XCI+XG4gIDwhLS1idXR0b24tLT5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJvdy5idXR0b25JdGVtc1wiPlxuICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IGFjdGlvbiBvZiByb3cuYnV0dG9uSXRlbXNcIj5cbiAgICAgICAgICAgICA8IS0tbm9ybWFsLS0+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFhY3Rpb24uY3VzdG9tVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgPCEtLWRyb3BEb3duLS0+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYWN0aW9uLmJ1dHRvblR5cGU9PWJ1dHRvblR5cGUuRHJvcERvd25CdXR0b247ZWxzZSBzaW1wbGVCdXR0b25cIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4tZ3JvdXBcIiBkcm9wZG93bj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYnV0dG9uLWJhc2ljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duVG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsncGFkZGluZyc6IHJvdy5idXR0b25QYWRkaW5nfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJhY3Rpb258YWN0aW9uQnRuQ2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gZHJvcGRvd24tdG9nZ2xlIHt7YWN0aW9uLmN1c3RvbUNsYXNzfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImRyb3Bkb3duLWN1c3RvbS1odG1sXCI+XG4gICAgICAgICAgICAgICAgICAgPGkgKm5nSWY9XCJhY3Rpb24uZHJvcERvd25JY29uXCIgY2xhc3M9XCJ7e2FjdGlvbi5kcm9wRG93bkljb259fVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIHt7YWN0aW9uLm5hbWV9fVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDx1bCBpZD1cImRyb3Bkb3duLWJhc2ljXCIgKmRyb3Bkb3duTWVudSBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwiYnV0dG9uLWJhc2ljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZHJvcERvd25PcHRpb24gb2YgYWN0aW9uLmRyb3BEb3duSXRlbXM7bGV0IGluZGV4PWluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJtZW51aXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImRyb3BEb3duT3B0aW9uLmN1c3RvbUNsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkcm9wRG93bk9wdGlvbi5vbmNsaWNrKGNvbHVtbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSAqbmdJZj1cImRyb3BEb3duT3B0aW9uLmljb25cIiBjbGFzcz1cInt7Y29sdW1ufHJvd0NoYW5nZU5hbWU6ZHJvcERvd25PcHRpb24uaWNvbn19XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2NvbHVtbnxyb3dDaGFuZ2VOYW1lOmRyb3BEb3duT3B0aW9uLm5hbWV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImRyb3BEb3duT3B0aW9uLmRyb3Bkb3duRGl2aWRlclwiIGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPCEtLXNpbXBsZUJ1dHRvbi0tPlxuICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjc2ltcGxlQnV0dG9uPlxuICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIlxuICAgICAgICAgICAgICAgICAgICAgW3Rvb2x0aXBdPVwiYWN0aW9uLnRvb2x0aXA/YWN0aW9uLnRvb2x0aXAudG9vbHRpcFRleHQ6JydcIlxuICAgICAgICAgICAgICAgICAgICAgW3BsYWNlbWVudF09XCJhY3Rpb24udG9vbHRpcD9hY3Rpb24udG9vbHRpcC5wbGFjZW1lbnQ6JydcIlxuICAgICAgICAgICAgICAgICAgICAgW2RlbGF5XT1cImFjdGlvbi50b29sdGlwP2FjdGlvbi50b29sdGlwLmRlbGF5OicnXCJcbiAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsncGFkZGluZyc6IHJvdy5idXR0b25QYWRkaW5nfVwiXG4gICAgICAgICAgICAgICAgICAgICBbaXNEaXNhYmxlZF09XCJhY3Rpb24udG9vbHRpcD9hY3Rpb24udG9vbHRpcC5pc0Rpc2FibGVkOicnXCJcbiAgICAgICAgICAgICAgICAgICAgIFt0b29sdGlwQW5pbWF0aW9uXT1cImFjdGlvbi50b29sdGlwP2FjdGlvbi50b29sdGlwLnRvb2x0aXBBbmltYXRpb246JydcIlxuICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImFjdGlvbnxhY3Rpb25CdG5DbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJhY3Rpb24uY3VzdG9tQ2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFjdGlvbi5vbmNsaWNrKGNvbHVtbilcIj5cbiAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJhY3Rpb24uY2xhc3NDYWxsYmFjayhjb2x1bW4pXCIgW2NsYXNzXT1cImFjdGlvbi5jbGFzc0NhbGxiYWNrKGNvbHVtbilcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxpICpuZ0lmPVwiYWN0aW9uLmljb25cIiBbbmdDbGFzc109XCJhY3Rpb24uaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJhY3Rpb24ubmFtZVwiPiB7e2FjdGlvbi5uYW1lfX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgIDwhLS1jdXN0b20gdGVtcGxhdGUtLT5cbiAgICAgICAgIFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImFjdGlvbi5jdXN0b21UZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFjdGlvbi5jdXN0b21UZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie3Jvdzpjb2x1bW59XCI+XG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvc3Bhbj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==