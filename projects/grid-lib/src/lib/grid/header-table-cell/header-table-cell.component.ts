import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren
} from '@angular/core';
import {SortOrder} from '../../model/sortorder.type';
import {DefaultSortConfig} from '../../model/grid';

@Component({
  selector: 'header-table-cell',
  templateUrl: './header-table-cell.component.html',
  styleUrls: ['./header-table-cell.component.css']
})
export class HeaderTableCellComponent implements OnInit {
  @ViewChildren('sortingList') sortingList!: QueryList<any>;
  @Input() theadLabel: Array<string> = [];
  @Input() theadSortConfig: Array<any> = [];
  @Input() tHeadCustomWith: Array<any> = [];
  @Input() defaultSort!: DefaultSortConfig | undefined;
  @Output() sort: EventEmitter<{ sortDirection: string, column: string }> = new EventEmitter<{ sortDirection: string, column: string }>();
  // default value for sorting is DEC
  public sortDir = SortOrder.DESC;
  public isSortingStart = [];

  ngOnInit(): void {
    this.tHeadCustomWith.forEach((columnWith) => {
      columnWith.style = '';
      if (columnWith?.customWidth > 0){
        columnWith.style = 'width:' + columnWith.customWidth + 'px !important';
      }
    });
    if (this.defaultSort) {
      this.sort.emit({sortDirection: this.defaultSort.sortDir, column: this.defaultSort.sortColumn});
    }
  }
  onSortClick(index: number): void {
    // TODO :default value must be have sorting-start class
    // Todo : class name must be set by user
    // we need to have array of sorting element
    const sortingList = this.sortingList.toArray();
    // we have disableHeader, in sortingList we dont count disable one so i need to counting index
    const disableCount = this.theadLabel.length - sortingList.length;
    const filterIcon = sortingList[index - disableCount].nativeElement.querySelector('.filter-icon');
    // we have situation to disable sorting so we need to check filterIcon
    if (filterIcon) {
      const filterIconClassList = filterIcon.classList;
      if (filterIconClassList.contains('fa-sort-alt')) {
        // @ts-ignore
        this.isSortingStart[index] = true;
        this.sortDir = SortOrder.DESC;
        filterIconClassList.remove('fa-sort-alt');
        filterIconClassList.add('fa-long-arrow-down');
      } else if (filterIconClassList.contains('fa-long-arrow-down')) {
        // @ts-ignore
        this.isSortingStart[index] = true;
        this.sortDir = SortOrder.ASC;
        filterIconClassList.remove('fa-long-arrow-down');
        filterIconClassList.add('fa-long-arrow-up');
      } else {
        // @ts-ignore
        this.isSortingStart[index] = false;
        this.sortDir = SortOrder.withoutSort;
        filterIconClassList.remove('fa-long-arrow-up');
        filterIconClassList.add('fa-sort-alt');
      }
      // we send req with sort eventEmitter
      this.sort.emit({sortDirection: this.sortDir, column: this.theadSortConfig[index].value});
    }

  }
}
