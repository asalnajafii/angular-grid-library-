import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class ActionClassPipe {
    transform(data) {
        if (data.hasOwnProperty('margin')) {
            return 'm' + data.margin;
        }
        else if (data.hasOwnProperty('marginRight')) {
            return 'mr-' + data.marginRight;
        }
        else if (data.hasOwnProperty('marginLeft')) {
            return 'ml-' + data.marginLeft;
        }
    }
}
ActionClassPipe.ɵfac = function ActionClassPipe_Factory(t) { return new (t || ActionClassPipe)(); };
ActionClassPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "actionBtnClass", type: ActionClassPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ActionClassPipe, [{
        type: Pipe,
        args: [{
                name: 'actionBtnClass',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWNsYXNzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvZ3JpZC1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2FjdGlvbi1jbGFzcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDOztBQUtsRCxNQUFNLE9BQU8sZUFBZTtJQUUxQixTQUFTLENBQUMsSUFBUztRQUNqQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDakMsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUMxQjthQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM3QyxPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ2pDO2FBQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFDO1lBQzNDLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDaEM7SUFFSCxDQUFDOzs4RUFYVSxlQUFlO3dFQUFmLGVBQWU7a0RBQWYsZUFBZTtjQUgzQixJQUFJO2VBQUM7Z0JBQ0osSUFBSSxFQUFFLGdCQUFnQjthQUN2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQFBpcGUoe1xuICBuYW1lOiAnYWN0aW9uQnRuQ2xhc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25DbGFzc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0oZGF0YTogYW55KTogYW55IHtcbiAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnbWFyZ2luJykpIHtcbiAgICAgIHJldHVybiAnbScgKyBkYXRhLm1hcmdpbjtcbiAgICB9IGVsc2UgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ21hcmdpblJpZ2h0JykpIHtcbiAgICAgIHJldHVybiAnbXItJyArIGRhdGEubWFyZ2luUmlnaHQ7XG4gICAgfSBlbHNlIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdtYXJnaW5MZWZ0Jykpe1xuICAgICAgcmV0dXJuICdtbC0nICsgZGF0YS5tYXJnaW5MZWZ0O1xuICAgIH1cblxuICB9XG5cbn1cbiJdfQ==