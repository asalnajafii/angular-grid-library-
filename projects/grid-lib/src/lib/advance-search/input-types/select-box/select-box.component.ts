import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {pluck, tap} from 'rxjs/operators';
import {SelectType} from '../../models/SelectType';


@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
})
export class SelectBoxComponent implements OnInit {
  @Input() selectType!: SelectType;
  @Input() formGroupObj!: FormGroup;
  public items = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    if (!this.selectType.config.isStatic) {
      this.getAllItems();
    }
  }

  getAllItems() {
    let observable = this.selectType.config.pluckParam ? pluck(this.selectType.config.pluckParam) : tap();
    const url = this.selectType.config.params ?
      `${this.selectType.config.relativeUrl}/?${this.selectType.config?.params.toString()}`
      : this.selectType.config.relativeUrl;
    this.http.get<any[]>(url!).pipe(
      observable,
    ).subscribe(
      (items) => {
        // @ts-ignore
        this.items = items;
      }
    );
  }
}
