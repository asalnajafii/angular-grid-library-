import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class RowClassCallbackPipe {
    transform(rowData, value) {
        if (value) {
            const cssClass = value(rowData);
            return cssClass;
        }
    }
}
RowClassCallbackPipe.ɵfac = function RowClassCallbackPipe_Factory(t) { return new (t || RowClassCallbackPipe)(); };
RowClassCallbackPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "RowClassCallback", type: RowClassCallbackPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RowClassCallbackPipe, [{
        type: Pipe,
        args: [{
                name: 'RowClassCallback',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWNsYXNzLWNhbGxiYWNrLnBpcGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvZ3JpZC1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3Jvdy1jbGFzcy1jYWxsYmFjay5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDOztBQUtsRCxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CLFNBQVMsQ0FBQyxPQUFZLEVBQUUsS0FBVTtRQUNoQyxJQUFJLEtBQUssRUFBRTtZQUNULE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoQyxPQUFPLFFBQVEsQ0FBQztTQUNqQjtJQUNILENBQUM7O3dGQVBVLG9CQUFvQjsrRUFBcEIsb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FIaEMsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxrQkFBa0I7YUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ1Jvd0NsYXNzQ2FsbGJhY2snLFxufSlcbmV4cG9ydCBjbGFzcyBSb3dDbGFzc0NhbGxiYWNrUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShyb3dEYXRhOiBhbnksIHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgY3NzQ2xhc3MgPSB2YWx1ZShyb3dEYXRhKTtcbiAgICAgIHJldHVybiBjc3NDbGFzcztcbiAgICB9XG4gIH1cblxufVxuIl19