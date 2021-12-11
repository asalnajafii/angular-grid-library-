import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'text-column',
  templateUrl: './text-column.component.html',
  styleUrls: ['./text-column.component.css']
})
export class TextColumnComponent implements OnInit {
  @Input('value') value: any;
  @Input('row') row: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
