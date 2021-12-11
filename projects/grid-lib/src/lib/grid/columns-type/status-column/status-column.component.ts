import {Component, Input, OnInit} from '@angular/core';

enum statusState {
  active = 1,
  inactive = 0,
  inProgress = 2
}

@Component({
  selector: 'status-column',
  templateUrl: './status-column.component.html',
  styleUrls: ['./status-column.component.css']
})
export class StatusColumnComponent implements OnInit {
  @Input('value') value: any;
  @Input('row') row: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * @method access to enum data
   */
  public get statusState(): typeof statusState {
    return statusState;
  }
}
