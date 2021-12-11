import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class PaginationPipe {
    transform(data, currentPage, pageSize) {
        return [...data.slice(pageSize * (currentPage), pageSize * (currentPage + 1))];
    }
}
PaginationPipe.ɵfac = function PaginationPipe_Factory(t) { return new (t || PaginationPipe)(); };
PaginationPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "pagination", type: PaginationPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PaginationPipe, [{
        type: Pipe,
        args: [{
                name: 'pagination',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5waXBlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2dyaWQtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9wYWdpbmF0aW9uLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7O0FBTWxELE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFNBQVMsQ0FBQyxJQUFTLEVBQUUsV0FBbUIsRUFBRSxRQUFnQjtRQUN4RCxPQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7NEVBSFUsY0FBYzttRUFBZCxjQUFjO2tEQUFkLGNBQWM7Y0FKMUIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxZQUFZO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAncGFnaW5hdGlvbicsXG59KVxuXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGE6IGFueSwgY3VycmVudFBhZ2U6IG51bWJlciwgcGFnZVNpemU6IG51bWJlcik6IGFueSB7XG4gICAgcmV0dXJuWy4uLmRhdGEuc2xpY2UocGFnZVNpemUgKiAoY3VycmVudFBhZ2UpLCBwYWdlU2l6ZSAqIChjdXJyZW50UGFnZSArIDEpKV07XG4gIH1cblxufVxuXG5cbiJdfQ==