import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { filter, map } from "rxjs/operators";
import * as i0 from "@angular/core";
export class GridActionsNotifier {
    constructor() {
        this.broadcastEvent = new Subject();
    }
    broadcast(key, data) {
        this.broadcastEvent.next({ key, data });
    }
    ListenOn(key) {
        return this.broadcastEvent.asObservable()
            .pipe(filter(event => event.key === key), map(event => event.data));
    }
}
GridActionsNotifier.ɵfac = function GridActionsNotifier_Factory(t) { return new (t || GridActionsNotifier)(); };
GridActionsNotifier.ɵprov = i0.ɵɵdefineInjectable({ token: GridActionsNotifier, factory: GridActionsNotifier.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GridActionsNotifier, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1hY3Rpb25zLW5vdGlmaWVyLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2dyaWQtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2dyaWQtYWN0aW9ucy1ub3RpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFTM0MsTUFBTSxPQUFPLG1CQUFtQjtJQUZoQztRQUdVLG1CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQWtCLENBQUM7S0FheEQ7SUFYQyxTQUFTLENBQUMsR0FBUSxFQUFFLElBQVU7UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsUUFBUSxDQUFJLEdBQVE7UUFDbEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRTthQUN0QyxJQUFJLENBQ0gsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFDbEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUM1QixDQUFDO0lBQ04sQ0FBQzs7c0ZBYlUsbUJBQW1COzJEQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CLG1CQUZQLE1BQU07a0RBRWxCLG1CQUFtQjtjQUYvQixVQUFVO2VBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtmaWx0ZXIsIG1hcH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cbmludGVyZmFjZSBCcm9hZGNhc3RFdmVudCB7XG4gIGtleTogYW55O1xuICBkYXRhPzogYW55O1xufVxuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcblxuZXhwb3J0IGNsYXNzIEdyaWRBY3Rpb25zTm90aWZpZXIge1xuICBwcml2YXRlIGJyb2FkY2FzdEV2ZW50ID0gbmV3IFN1YmplY3Q8QnJvYWRjYXN0RXZlbnQ+KCk7XG5cbiAgYnJvYWRjYXN0KGtleTogYW55LCBkYXRhPzogYW55KSB7XG4gICAgdGhpcy5icm9hZGNhc3RFdmVudC5uZXh0KHtrZXksIGRhdGF9KTtcbiAgfVxuXG4gIExpc3Rlbk9uPFQ+KGtleTogYW55KTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuYnJvYWRjYXN0RXZlbnQuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQua2V5ID09PSBrZXkpLFxuICAgICAgICBtYXAoZXZlbnQgPT4gPFQ+ZXZlbnQuZGF0YSlcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==