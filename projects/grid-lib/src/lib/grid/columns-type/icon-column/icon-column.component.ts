import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'icon-column',
  templateUrl: './icon-column.component.html',
  styleUrls: ['./icon-column.component.css']
})
export class IconColumnComponent implements OnInit {
  @Input('value') value: any;
  @Input('row') row: any;
  constructor() { }

  ngOnInit(): void {
  }

}
