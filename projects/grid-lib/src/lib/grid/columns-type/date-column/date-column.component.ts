import {Component, Input, OnInit} from '@angular/core';

enum pipeFormatEnum {
  date = "date",
  Moment = "Moment"
}

@Component({
  selector: 'date-column',
  templateUrl: './date-column.component.html',
  styleUrls: ['./date-column.component.css']
})
export class DateColumnComponent implements OnInit {
  @Input('value') value: any;
  @Input('row') row: any;

  constructor() {
  }

  ngOnInit(): void {

  }

  /**
   * @method  access to enum data
   */
  public get pipeFormat(): typeof pipeFormatEnum {
    return pipeFormatEnum;
  }
}
