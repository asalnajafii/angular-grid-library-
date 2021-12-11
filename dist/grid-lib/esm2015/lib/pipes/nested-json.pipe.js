import { Pipe } from "@angular/core";
import * as _ from "lodash";
import * as i0 from "@angular/core";
export class NestedJsonPipe {
    transform(data, value) {
        return _.get(data, value);
    }
}
NestedJsonPipe.ɵfac = function NestedJsonPipe_Factory(t) { return new (t || NestedJsonPipe)(); };
NestedJsonPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "nestedJson", type: NestedJsonPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NestedJsonPipe, [{
        type: Pipe,
        args: [{
                name: 'nestedJson',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLWpzb24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9ncmlkLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbmVzdGVkLWpzb24ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7QUFLNUIsTUFBTSxPQUFPLGNBQWM7SUFFekIsU0FBUyxDQUFDLElBQVMsRUFBQyxLQUFTO1FBQzdCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7NEVBSlUsY0FBYzttRUFBZCxjQUFjO2tEQUFkLGNBQWM7Y0FIMUIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxZQUFZO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ25lc3RlZEpzb24nLFxufSlcbmV4cG9ydCBjbGFzcyBOZXN0ZWRKc29uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShkYXRhOiBhbnksdmFsdWU6YW55KTogYW55IHtcbiAgcmV0dXJuIF8uZ2V0KGRhdGEsIHZhbHVlKTtcbiAgfVxuXG59XG4iXX0=