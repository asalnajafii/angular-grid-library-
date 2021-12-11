import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class DebounceClickDirective {
    constructor() {
        this.debounceTime = 500;
        this.debounceClick = new EventEmitter();
        this.clicks = new Subject();
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.subscription = this.clicks.pipe(debounceTime(this.debounceTime)).subscribe(e => this.debounceClick.emit(e));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    clickEvent(event) {
        event.preventDefault();
        event.stopPropagation();
        this.clicks.next(event);
    }
}
DebounceClickDirective.ɵfac = function DebounceClickDirective_Factory(t) { return new (t || DebounceClickDirective)(); };
DebounceClickDirective.ɵdir = i0.ɵɵdefineDirective({ type: DebounceClickDirective, selectors: [["", "appDebounceClick", ""]], hostBindings: function DebounceClickDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function DebounceClickDirective_click_HostBindingHandler($event) { return ctx.clickEvent($event); });
    } }, inputs: { debounceTime: "debounceTime" }, outputs: { debounceClick: "debounceClick" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DebounceClickDirective, [{
        type: Directive,
        args: [{
                selector: '[appDebounceClick]'
            }]
    }], function () { return []; }, { debounceTime: [{
            type: Input
        }], debounceClick: [{
            type: Output
        }], clickEvent: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVib3VuY2UtY2xpY2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2dyaWQtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmUvZGVib3VuY2UtY2xpY2suZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFLNUMsTUFBTSxPQUFPLHNCQUFzQjtJQVVqQztRQVJBLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBR25CLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUzQixXQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN2QixpQkFBWSxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBR3hELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDbEMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDaEMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBR0QsVUFBVSxDQUFDLEtBQVU7UUFDbkIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs0RkE1QlUsc0JBQXNCOzJEQUF0QixzQkFBc0I7eUdBQXRCLHNCQUFrQjs7a0RBQWxCLHNCQUFzQjtjQUhsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjtzQ0FHQyxZQUFZO2tCQURYLEtBQUs7WUFJTixhQUFhO2tCQURaLE1BQU07WUFvQlAsVUFBVTtrQkFEVCxZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJqZWN0LCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWV9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcERlYm91bmNlQ2xpY2tdJ1xufSlcbmV4cG9ydCBjbGFzcyBEZWJvdW5jZUNsaWNrRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBkZWJvdW5jZVRpbWUgPSA1MDA7XG5cbiAgQE91dHB1dCgpXG4gIGRlYm91bmNlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBjbGlja3MgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmNsaWNrcy5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2VUaW1lKSxcbiAgICApLnN1YnNjcmliZShlID0+IHRoaXMuZGVib3VuY2VDbGljay5lbWl0KGUpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGNsaWNrRXZlbnQoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5jbGlja3MubmV4dChldmVudCk7XG4gIH1cbn1cbiJdfQ==