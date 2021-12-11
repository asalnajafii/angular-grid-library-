import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'boolean-column',
  templateUrl: './boolean-column.component.html',
  styleUrls: ['./boolean-column.component.css']
})
export class BooleanColumnComponent implements OnInit {
  @Input('value') value: any;
  @Input('row') row: any;
  constructor() { }

  ngOnInit(): void {
  }

}
