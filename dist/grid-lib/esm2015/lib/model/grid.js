/**
 * Column:array of columns
 * modelType:we need model for get data from grid service
 * baseUrl: is api base url
 * simpleSearch: grid can have simple search so we need som config for it
 * rowClassCallback it access to all row data to check it of we need and add custom class for each tr
 *
 */
export class Grid {
    constructor() {
        this.columns = [];
        this.modelType = '';
        this.baseUrl = '';
        this.relativeGetMethodUrl = '';
        this.page = 1;
        this.noDataMessage = 'There is no data.';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9ncmlkLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvbW9kZWwvZ3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxPQUFPLElBQUk7SUFBakI7UUFDUyxZQUFPLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IseUJBQW9CLEdBQUcsRUFBRSxDQUFDO1FBQzFCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFLVCxrQkFBYSxHQUFHLG1CQUFtQixDQUFDO0lBQzdDLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29sdW1ufSBmcm9tICcuL2NvbHVtbic7XG5pbXBvcnQge1NpbXBsZVNlYXJjaH0gZnJvbSAnLi9zaW1wbGVTZWFyY2gnO1xuaW1wb3J0IHtQYWdpbmF0aW9ufSBmcm9tICcuL3BhZ2luYXRpb24nO1xuLyoqXG4gKiBDb2x1bW46YXJyYXkgb2YgY29sdW1uc1xuICogbW9kZWxUeXBlOndlIG5lZWQgbW9kZWwgZm9yIGdldCBkYXRhIGZyb20gZ3JpZCBzZXJ2aWNlXG4gKiBiYXNlVXJsOiBpcyBhcGkgYmFzZSB1cmxcbiAqIHNpbXBsZVNlYXJjaDogZ3JpZCBjYW4gaGF2ZSBzaW1wbGUgc2VhcmNoIHNvIHdlIG5lZWQgc29tIGNvbmZpZyBmb3IgaXRcbiAqIHJvd0NsYXNzQ2FsbGJhY2sgaXQgYWNjZXNzIHRvIGFsbCByb3cgZGF0YSB0byBjaGVjayBpdCBvZiB3ZSBuZWVkIGFuZCBhZGQgY3VzdG9tIGNsYXNzIGZvciBlYWNoIHRyXG4gKlxuICovXG5leHBvcnQgY2xhc3MgR3JpZCB7XG4gIHB1YmxpYyBjb2x1bW5zOiBDb2x1bW5bXSA9IFtdO1xuICBwdWJsaWMgbW9kZWxUeXBlID0gJyc7XG4gIHB1YmxpYyBiYXNlVXJsID0gJyc7XG4gIHB1YmxpYyByZWxhdGl2ZUdldE1ldGhvZFVybCA9ICcnO1xuICBwdWJsaWMgcGFnZSA9IDE7XG4gIHB1YmxpYyBwYWdpbmF0aW9uITogUGFnaW5hdGlvbjtcbiAgcHVibGljIHNpbXBsZVNlYXJjaCE6IFNpbXBsZVNlYXJjaDtcbiAgcHVibGljIHJvd0NsYXNzQ2FsbGJhY2s/OiAocm93OiBhbnkpID0+IHN0cmluZyB8IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4gfCB7IFtrbGFzczogc3RyaW5nXTogYW55OyB9O1xuICBwdWJsaWMgZGVmYXVsdFNvcnQ/OiBEZWZhdWx0U29ydENvbmZpZztcbiAgcHVibGljIG5vRGF0YU1lc3NhZ2UgPSAnVGhlcmUgaXMgbm8gZGF0YS4nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHRTb3J0Q29uZmlnIHtcbiAgc29ydERpcjogc3RyaW5nO1xuICBzb3J0Q29sdW1uOiBzdHJpbmc7XG59XG4iXX0=