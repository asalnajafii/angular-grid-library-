import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class RowChangeNamePipe {
    transform(rowData, value) {
        if (typeof (value) !== "string")
            return value(rowData);
        return value;
    }
}
RowChangeNamePipe.ɵfac = function RowChangeNamePipe_Factory(t) { return new (t || RowChangeNamePipe)(); };
RowChangeNamePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "rowChangeName", type: RowChangeNamePipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RowChangeNamePipe, [{
        type: Pipe,
        args: [{
                name: 'rowChangeName',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWNoYW5nZS1uYW1lLnBpcGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvZ3JpZC1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3Jvdy1jaGFuZ2UtbmFtZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDOztBQUtsRCxNQUFNLE9BQU8saUJBQWlCO0lBRTVCLFNBQVMsQ0FBQyxPQUFZLEVBQUUsS0FBVTtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRO1lBQzdCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sS0FBSyxDQUFBO0lBQ2pCLENBQUM7O2tGQU5VLGlCQUFpQjt5RUFBakIsaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FIN0IsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxlQUFlO2FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdyb3dDaGFuZ2VOYW1lJyxcbn0pXG5leHBvcnQgY2xhc3MgUm93Q2hhbmdlTmFtZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0ocm93RGF0YTogYW55LCB2YWx1ZTogYW55KTogYW55IHtcbiAgICBpZiAodHlwZW9mICh2YWx1ZSkgIT09IFwic3RyaW5nXCIpXG4gICAgICByZXR1cm4gdmFsdWUocm93RGF0YSk7XG4gICAgICAgcmV0dXJuIHZhbHVlXG4gIH1cblxufVxuIl19