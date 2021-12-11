//angular basic
import {Component, Input, OnDestroy, OnInit} from '@angular/core';
// internal import
import {GridActionsNotifier} from "../service/grid-actions-notifier";
//rxjs import
import {Subscription} from "rxjs";
import {ExportConfig} from '../model/export';

@Component({
  selector: 'lib-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit, OnDestroy {
  @Input('export') export!: ExportConfig;
  public subscription: Subscription = new Subscription();

  constructor(private gridActionsNotifier: GridActionsNotifier) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
   this.subscription.add(this.gridActionsNotifier.ListenOn('exportResponse').subscribe(res => {
      this.export.exportResponse.next(res);
    })
  )
  }
  exportOnButtonPress() {
    this.gridActionsNotifier.broadcast('export', true);
  }
}
