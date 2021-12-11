import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {GridComponent} from "./grid/grid.component";

import {SortGridPipe} from "./pipes/Sort-grid.pipe";
import {PaginationPipe} from "./pipes/pagination.pipe";
import {BooleanColumnComponent} from './grid/columns-type/boolean-column/boolean-column.component';
import {TextColumnComponent} from './grid/columns-type/text-column/text-column.component';
import {ImageColumnComponent} from './grid/columns-type/image-column/image-column.component';
import {CustomColumnComponent} from './grid/columns-type/custom-column/custom-column.component';
import {NestedJsonPipe} from "./pipes/nested-json.pipe";
import {IconColumnComponent} from './grid/columns-type/icon-column/icon-column.component';
import {ReadMoreColumnComponent} from './grid/columns-type/read-more-column/read-more-column.component';
import {SearchComponent} from './search/search.component';
import {DateColumnComponent} from './grid/columns-type/date-column/date-column.component';
import {DateFormatPipe} from "./pipes/date-format.pipe";
import {StatusColumnComponent} from './grid/columns-type/status-column/status-column.component';
import {ActionColumnComponent} from './grid/columns-type/action-column/action-column.component';
import {ActionClassPipe} from './pipes/action-class.pipe';
import {LinkColumnComponent} from './grid/columns-type/link-column/link-column.component';
import {RowClassCallbackPipe} from "./pipes/row-class-callback.pipe";
import {RowChangeNamePipe} from "./pipes/row-change-name.pipe";

//ngx bootstrap
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {NgbDatepickerModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgSelectModule} from "@ng-select/ng-select";
import {DebounceClickDirective} from "./directive/debounce-click.directive";
import { HeaderTableCellComponent } from './grid/header-table-cell/header-table-cell.component';
import {TextBoxComponent} from './advance-search/input-types/text-box/text-box.component';
import {AdvanceFormControlComponent} from './advance-search/advance-form-control/advance-form-control.component';
import {AdvanceSearchComponent} from './advance-search/advance-search.component';
import {SelectBoxComponent} from './advance-search/input-types/select-box/select-box.component';
import {selectBoxWithApiComponent} from './advance-search/input-types/select-box-with-api/select-box-with-api.component';
import {DateRangeComponent} from './advance-search/input-types/date-range/date-range.component';
import {ExportComponent} from './export/export.component';





@NgModule({
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
    HeaderTableCellComponent,
    TextBoxComponent,
    AdvanceFormControlComponent,
    AdvanceSearchComponent,
    SelectBoxComponent,
    selectBoxWithApiComponent,
    DateRangeComponent,
    ExportComponent
  ],
  exports: [
    GridComponent,
    SearchComponent,
    AdvanceSearchComponent,
    ExportComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    NgSelectModule,
    NgbDatepickerModule,
  ]
})
export class GridModule {
}
