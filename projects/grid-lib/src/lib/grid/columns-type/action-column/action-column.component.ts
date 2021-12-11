import {Component, Input, OnInit} from '@angular/core';

export enum buttonTypeEnum {
  DropDownButton = 'DropDownButton',
  simpleButton = 'simpleButton'
}

@Component({
  selector: 'action-column',
  templateUrl: './action-column.component.html',
  styleUrls: ['./action-column.component.css']
})
export class ActionColumnComponent implements OnInit {
  @Input('value') value: any;
  @Input('row') row: any;
  @Input('column') column: any;


  constructor() {
  }

  ngOnInit(): void {
  }
  /**
   *  @method  access to enum data
   */
  public get buttonType(): typeof buttonTypeEnum {
    return buttonTypeEnum;
  }


}
