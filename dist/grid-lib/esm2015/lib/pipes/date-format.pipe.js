import { Pipe } from "@angular/core";
import * as moment from 'moment';
import * as i0 from "@angular/core";
export class DateFormatPipe {
    transform(data, format) {
        return moment(data).format(format);
    }
}
DateFormatPipe.ɵfac = function DateFormatPipe_Factory(t) { return new (t || DateFormatPipe)(); };
DateFormatPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "dateFormat", type: DateFormatPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateFormatPipe, [{
        type: Pipe,
        args: [{
                name: 'dateFormat',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mb3JtYXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9ncmlkLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvZGF0ZS1mb3JtYXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7QUFJakMsTUFBTSxPQUFPLGNBQWM7SUFFekIsU0FBUyxDQUFDLElBQVMsRUFBQyxNQUFjO1FBQ2hDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs0RUFKVSxjQUFjO21FQUFkLGNBQWM7a0RBQWQsY0FBYztjQUgxQixJQUFJO2VBQUM7Z0JBQ0osSUFBSSxFQUFFLFlBQVk7YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbkBQaXBlKHtcbiAgbmFtZTogJ2RhdGVGb3JtYXQnLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlRm9ybWF0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShkYXRhOiBhbnksZm9ybWF0OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiBtb21lbnQoZGF0YSkuZm9ybWF0KGZvcm1hdCk7XG4gIH1cblxufVxuIl19