import {Component, EventEmitter, Input, Output, TemplateRef, ViewChild} from '@angular/core';
import {GridFactoryService} from "../../../service/grid-factory.service";
import {take} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'read-more-column',
  templateUrl: './read-more-column.component.html',
  styleUrls: ['./read-more-column.component.css']
})
export class ReadMoreColumnComponent {
  @Input('value') value: any;
  @Input('row') row: any;
  @Input('column') column: any;

  @Output() readMoreData = new EventEmitter<any>();
  @Output() collapsedNotifier = new EventEmitter<any>();
  addClass: boolean = false;
  isCollapsed = [];
  cloneDataObservable!: Observable<any> | undefined;


  @ViewChild('readMoreTemplate', {static: true}) readMoreTemplate!: TemplateRef<any>;

  constructor(private gridFactoryService: GridFactoryService) {

  }

  /**
   * call read more service
   */
  generateReadMoreService() {
    /**
     * we have to send request just in first time in other situation we must just toggle
     */
    this.cloneDataObservable = undefined;
    let url = `${this.row.url}`;
    url = url.replace('{{value}}', this.value);
    let service = this.gridFactoryService.CreateGridService(this.row.modelType);
    /**
     * http service generator
     */
    service.getData(url).pipe(take(1)).subscribe((res: any) => {
      this.cloneDataObservable = res;
      this.readMoreData.emit({data: res, id: this.value, tableConfig: this.row.tableConfig});
    });
  }

  /**
   * it trigger collapsed and emit it to grid component to show and hide data
   * @param id {number}- which item click
   */
  triggerCollapsed(id: number) {
    this.addClass = !this.addClass;
    // if first time we must send request else we just collapsed
    if (this.cloneDataObservable === undefined && this.isCollapsed[id] == undefined) {
      this.generateReadMoreService();
    }
    this.collapsedNotifier.emit({id: id, state: !this.isCollapsed[id]});
    // @ts-ignore
    this.isCollapsed[id] = !this.isCollapsed[id];
  }
}
