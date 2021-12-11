import { Injectable } from '@angular/core';
import { GridService } from './grid.Service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class GridFactoryService {
    constructor(http) {
        this.http = http;
    }
    /**
     *
     * @param resourceName
     * @constructor
     */
    CreateGridService(resourceName) {
        return new GridService(this.http);
    }
}
GridFactoryService.ɵfac = function GridFactoryService_Factory(t) { return new (t || GridFactoryService)(i0.ɵɵinject(i1.HttpClient)); };
GridFactoryService.ɵprov = i0.ɵɵdefineInjectable({ token: GridFactoryService, factory: GridFactoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GridFactoryService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvZ3JpZC1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvZ3JpZC1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7OztBQUkzQyxNQUFNLE9BQU8sa0JBQWtCO0lBRTdCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFDcEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxpQkFBaUIsQ0FBQyxZQUFvQjtRQUNsQyxPQUFPLElBQUksV0FBVyxDQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDOztvRkFaVSxrQkFBa0I7MERBQWxCLGtCQUFrQixXQUFsQixrQkFBa0IsbUJBRE4sTUFBTTtrREFDbEIsa0JBQWtCO2NBRDlCLFVBQVU7ZUFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtHcmlkU2VydmljZX0gZnJvbSAnLi9ncmlkLlNlcnZpY2UnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEdyaWRGYWN0b3J5U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHJlc291cmNlTmFtZVxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIENyZWF0ZUdyaWRTZXJ2aWNlKHJlc291cmNlTmFtZTogc3RyaW5nKTogYW55IHtcbiAgICAgIHJldHVybiBuZXcgR3JpZFNlcnZpY2U8YW55LCBhbnk+KHRoaXMuaHR0cCk7XG4gIH1cbn1cbiJdfQ==