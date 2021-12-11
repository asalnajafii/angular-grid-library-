import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GridComponent } from "./grid/grid.component";
import { SortGridPipe } from "./pipes/Sort-grid.pipe";
import { PaginationPipe } from "./pipes/pagination.pipe";
import { BooleanColumnComponent } from './grid/columns-type/boolean-column/boolean-column.component';
import { TextColumnComponent } from './grid/columns-type/text-column/text-column.component';
import { ImageColumnComponent } from './grid/columns-type/image-column/image-column.component';
import { CustomColumnComponent } from './grid/columns-type/custom-column/custom-column.component';
import { NestedJsonPipe } from "./pipes/nested-json.pipe";
import { IconColumnComponent } from './grid/columns-type/icon-column/icon-column.component';
import { ReadMoreColumnComponent } from './grid/columns-type/read-more-column/read-more-column.component';
import { SearchComponent } from './search/search.component';
import { DateColumnComponent } from './grid/columns-type/date-column/date-column.component';
import { DateFormatPipe } from "./pipes/date-format.pipe";
import { StatusColumnComponent } from './grid/columns-type/status-column/status-column.component';
import { ActionColumnComponent } from './grid/columns-type/action-column/action-column.component';
import { ActionClassPipe } from './pipes/action-class.pipe';
import { LinkColumnComponent } from './grid/columns-type/link-column/link-column.component';
import { RowClassCallbackPipe } from "./pipes/row-class-callback.pipe";
import { RowChangeNamePipe } from "./pipes/row-change-name.pipe";
//ngx bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { DebounceClickDirective } from "./directive/debounce-click.directive";
import { HeaderTableCellComponent } from './grid/header-table-cell/header-table-cell.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/dropdown";
import * as i2 from "ngx-bootstrap/tooltip";
export class GridModule {
}
GridModule.ɵmod = i0.ɵɵdefineNgModule({ type: GridModule });
GridModule.ɵinj = i0.ɵɵdefineInjector({ factory: function GridModule_Factory(t) { return new (t || GridModule)(); }, imports: [[
            NgbModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            BsDropdownModule.forRoot(),
            TooltipModule.forRoot(),
            NgSelectModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GridModule, { declarations: [GridComponent,
        NestedJsonPipe,
        SortGridPipe,
        PaginationPipe,
        DateFormatPipe,
        ActionClassPipe,
        BooleanColumnComponent,
        TextColumnComponent,
        ImageColumnComponent,
        CustomColumnComponent,
        IconColumnComponent,
        ReadMoreColumnComponent,
        SearchComponent,
        DateColumnComponent,
        StatusColumnComponent,
        ActionColumnComponent,
        LinkColumnComponent,
        RowClassCallbackPipe,
        RowChangeNamePipe,
        DebounceClickDirective,
        HeaderTableCellComponent], imports: [NgbModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule, i1.BsDropdownModule, i2.TooltipModule, NgSelectModule], exports: [GridComponent,
        SearchComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GridModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    GridComponent,
                    NestedJsonPipe,
                    SortGridPipe,
                    PaginationPipe,
                    DateFormatPipe,
                    ActionClassPipe,
                    BooleanColumnComponent,
                    TextColumnComponent,
                    ImageColumnComponent,
                    CustomColumnComponent,
                    IconColumnComponent,
                    ReadMoreColumnComponent,
                    SearchComponent,
                    DateColumnComponent,
                    StatusColumnComponent,
                    ActionColumnComponent,
                    LinkColumnComponent,
                    RowClassCallbackPipe,
                    RowChangeNamePipe,
                    DebounceClickDirective,
                    HeaderTableCellComponent
                ],
                exports: [
                    GridComponent,
                    SearchComponent,
                ],
                imports: [
                    NgbModule,
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    BsDropdownModule.forRoot(),
                    TooltipModule.forRoot(),
                    NgSelectModule
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvZ3JpZC1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2dyaWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFcEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3BELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQztBQUNuRyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUMxRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUM3RixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyREFBMkQsQ0FBQztBQUNoRyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDMUYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saUVBQWlFLENBQUM7QUFDeEcsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQzFGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyREFBMkQsQ0FBQztBQUNoRyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyREFBMkQsQ0FBQztBQUNoRyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDMUYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFFL0QsZUFBZTtBQUNmLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDOzs7O0FBNkNoRyxNQUFNLE9BQU8sVUFBVTs7OENBQVYsVUFBVTttR0FBVixVQUFVLGtCQVhaO1lBQ1AsU0FBUztZQUNULFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGdCQUFnQjtZQUNoQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsYUFBYSxDQUFDLE9BQU8sRUFBRTtZQUN2QixjQUFjO1NBQ2Y7d0ZBRVUsVUFBVSxtQkFyQ25CLGFBQWE7UUFDYixjQUFjO1FBQ2QsWUFBWTtRQUNaLGNBQWM7UUFDZCxjQUFjO1FBQ2QsZUFBZTtRQUNmLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIsd0JBQXdCLGFBT3hCLFNBQVM7UUFDVCxZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixnQkFBZ0IseUNBR2hCLGNBQWMsYUFYZCxhQUFhO1FBQ2IsZUFBZTtrREFhTixVQUFVO2NBdkN0QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxZQUFZO29CQUNaLGNBQWM7b0JBQ2QsY0FBYztvQkFDZCxlQUFlO29CQUNmLHNCQUFzQjtvQkFDdEIsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLHFCQUFxQjtvQkFDckIsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixxQkFBcUI7b0JBQ3JCLHFCQUFxQjtvQkFDckIsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLGlCQUFpQjtvQkFDakIsc0JBQXNCO29CQUN0Qix3QkFBd0I7aUJBQ3pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLGVBQWU7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxTQUFTO29CQUNULFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMxQixhQUFhLENBQUMsT0FBTyxFQUFFO29CQUN2QixjQUFjO2lCQUNmO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0dyaWRDb21wb25lbnR9IGZyb20gXCIuL2dyaWQvZ3JpZC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHtTb3J0R3JpZFBpcGV9IGZyb20gXCIuL3BpcGVzL1NvcnQtZ3JpZC5waXBlXCI7XG5pbXBvcnQge1BhZ2luYXRpb25QaXBlfSBmcm9tIFwiLi9waXBlcy9wYWdpbmF0aW9uLnBpcGVcIjtcbmltcG9ydCB7Qm9vbGVhbkNvbHVtbkNvbXBvbmVudH0gZnJvbSAnLi9ncmlkL2NvbHVtbnMtdHlwZS9ib29sZWFuLWNvbHVtbi9ib29sZWFuLWNvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHtUZXh0Q29sdW1uQ29tcG9uZW50fSBmcm9tICcuL2dyaWQvY29sdW1ucy10eXBlL3RleHQtY29sdW1uL3RleHQtY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQge0ltYWdlQ29sdW1uQ29tcG9uZW50fSBmcm9tICcuL2dyaWQvY29sdW1ucy10eXBlL2ltYWdlLWNvbHVtbi9pbWFnZS1jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7Q3VzdG9tQ29sdW1uQ29tcG9uZW50fSBmcm9tICcuL2dyaWQvY29sdW1ucy10eXBlL2N1c3RvbS1jb2x1bW4vY3VzdG9tLWNvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHtOZXN0ZWRKc29uUGlwZX0gZnJvbSBcIi4vcGlwZXMvbmVzdGVkLWpzb24ucGlwZVwiO1xuaW1wb3J0IHtJY29uQ29sdW1uQ29tcG9uZW50fSBmcm9tICcuL2dyaWQvY29sdW1ucy10eXBlL2ljb24tY29sdW1uL2ljb24tY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQge1JlYWRNb3JlQ29sdW1uQ29tcG9uZW50fSBmcm9tICcuL2dyaWQvY29sdW1ucy10eXBlL3JlYWQtbW9yZS1jb2x1bW4vcmVhZC1tb3JlLWNvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWFyY2hDb21wb25lbnR9IGZyb20gJy4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHtEYXRlQ29sdW1uQ29tcG9uZW50fSBmcm9tICcuL2dyaWQvY29sdW1ucy10eXBlL2RhdGUtY29sdW1uL2RhdGUtY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQge0RhdGVGb3JtYXRQaXBlfSBmcm9tIFwiLi9waXBlcy9kYXRlLWZvcm1hdC5waXBlXCI7XG5pbXBvcnQge1N0YXR1c0NvbHVtbkNvbXBvbmVudH0gZnJvbSAnLi9ncmlkL2NvbHVtbnMtdHlwZS9zdGF0dXMtY29sdW1uL3N0YXR1cy1jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7QWN0aW9uQ29sdW1uQ29tcG9uZW50fSBmcm9tICcuL2dyaWQvY29sdW1ucy10eXBlL2FjdGlvbi1jb2x1bW4vYWN0aW9uLWNvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHtBY3Rpb25DbGFzc1BpcGV9IGZyb20gJy4vcGlwZXMvYWN0aW9uLWNsYXNzLnBpcGUnO1xuaW1wb3J0IHtMaW5rQ29sdW1uQ29tcG9uZW50fSBmcm9tICcuL2dyaWQvY29sdW1ucy10eXBlL2xpbmstY29sdW1uL2xpbmstY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQge1Jvd0NsYXNzQ2FsbGJhY2tQaXBlfSBmcm9tIFwiLi9waXBlcy9yb3ctY2xhc3MtY2FsbGJhY2sucGlwZVwiO1xuaW1wb3J0IHtSb3dDaGFuZ2VOYW1lUGlwZX0gZnJvbSBcIi4vcGlwZXMvcm93LWNoYW5nZS1uYW1lLnBpcGVcIjtcblxuLy9uZ3ggYm9vdHN0cmFwXG5pbXBvcnQge0JzRHJvcGRvd25Nb2R1bGV9IGZyb20gJ25neC1ib290c3RyYXAvZHJvcGRvd24nO1xuaW1wb3J0IHtUb29sdGlwTW9kdWxlfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Rvb2x0aXAnO1xuaW1wb3J0IHtOZ2JNb2R1bGV9IGZyb20gXCJAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcFwiO1xuaW1wb3J0IHtOZ1NlbGVjdE1vZHVsZX0gZnJvbSBcIkBuZy1zZWxlY3Qvbmctc2VsZWN0XCI7XG5pbXBvcnQge0RlYm91bmNlQ2xpY2tEaXJlY3RpdmV9IGZyb20gXCIuL2RpcmVjdGl2ZS9kZWJvdW5jZS1jbGljay5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IEhlYWRlclRhYmxlQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC9oZWFkZXItdGFibGUtY2VsbC9oZWFkZXItdGFibGUtY2VsbC5jb21wb25lbnQnO1xuXG5cblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEdyaWRDb21wb25lbnQsXG4gICAgTmVzdGVkSnNvblBpcGUsXG4gICAgU29ydEdyaWRQaXBlLFxuICAgIFBhZ2luYXRpb25QaXBlLFxuICAgIERhdGVGb3JtYXRQaXBlLFxuICAgIEFjdGlvbkNsYXNzUGlwZSxcbiAgICBCb29sZWFuQ29sdW1uQ29tcG9uZW50LFxuICAgIFRleHRDb2x1bW5Db21wb25lbnQsXG4gICAgSW1hZ2VDb2x1bW5Db21wb25lbnQsXG4gICAgQ3VzdG9tQ29sdW1uQ29tcG9uZW50LFxuICAgIEljb25Db2x1bW5Db21wb25lbnQsXG4gICAgUmVhZE1vcmVDb2x1bW5Db21wb25lbnQsXG4gICAgU2VhcmNoQ29tcG9uZW50LFxuICAgIERhdGVDb2x1bW5Db21wb25lbnQsXG4gICAgU3RhdHVzQ29sdW1uQ29tcG9uZW50LFxuICAgIEFjdGlvbkNvbHVtbkNvbXBvbmVudCxcbiAgICBMaW5rQ29sdW1uQ29tcG9uZW50LFxuICAgIFJvd0NsYXNzQ2FsbGJhY2tQaXBlLFxuICAgIFJvd0NoYW5nZU5hbWVQaXBlLFxuICAgIERlYm91bmNlQ2xpY2tEaXJlY3RpdmUsXG4gICAgSGVhZGVyVGFibGVDZWxsQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBHcmlkQ29tcG9uZW50LFxuICAgIFNlYXJjaENvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE5nYk1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEJzRHJvcGRvd25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRvb2x0aXBNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5nU2VsZWN0TW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgR3JpZE1vZHVsZSB7XG59XG4iXX0=