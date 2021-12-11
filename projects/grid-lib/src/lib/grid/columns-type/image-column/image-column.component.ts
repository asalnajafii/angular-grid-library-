import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'image-column',
  templateUrl: './image-column.component.html',
  styleUrls: ['./image-column.component.css']
})
export class ImageColumnComponent implements OnInit {
  @Input('value') value: any;
  @Input('row') row: any;
  public styles: any = {};

  constructor() {
  }

  ngOnInit(): void {


  }

}
