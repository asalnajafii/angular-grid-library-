import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'custom-column',
  templateUrl: './custom-column.component.html',
  styleUrls: ['./custom-column.component.css']
})

export class CustomColumnComponent implements OnInit {
  @Input('value') value: any;
  @Input('row') row: any;
  @Input('column') column: any;
  constructor() { }

  ngOnInit(): void {


  }

}
