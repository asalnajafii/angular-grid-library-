import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'link-column',
  templateUrl: './link-column.component.html',
  styleUrls: ['./link-column.component.css']
})
export class LinkColumnComponent implements OnInit {
  @Input('value') value: any;
  @Input('row') row: any;
  @Input('column') column: any;
  constructor() { }

  ngOnInit(): void {
  }

}
