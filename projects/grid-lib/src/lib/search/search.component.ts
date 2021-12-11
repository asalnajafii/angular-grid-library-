//angular basic
import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
// internal import
import {GridActionsNotifier} from "../service/grid-actions-notifier";
import {SimpleSearchConfig} from "../model/simpleSearch";
//rxjs import
import {debounce, distinctUntilChanged, filter, map} from "rxjs/operators";
import {fromEvent, Subscription, timer} from "rxjs";

@Component({
  selector: 'lib-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  @Input('search') search: SimpleSearchConfig = new SimpleSearchConfig();
  @ViewChild('simpleSearchInput', {static: true}) simpleSearchInput!: ElementRef;
  public searchModel: any;
  public subscription: Subscription = new Subscription();

  constructor(private gridActionsNotifier: GridActionsNotifier) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    if (!this.search.haveButton) {
      this.subscription = fromEvent(this.simpleSearchInput && this.simpleSearchInput.nativeElement, 'keyup').pipe(
        // Time in milliseconds between key events
        // @ts-ignore
        debounce((event: KeyboardEvent) => {
          if (event.key !== 'Enter') {
            return timer(1000);
          }
          return timer(0);
        }),
        // get value
        map((event: any) => {
          /**
           * here we check event.target.value if it is empty or length <2 we must return clone of last data
           */
          return event.target.value;
        })
        // if character length greater then 2
        , filter((res => res.length == 0 || res.length > 2))
        // If previous query is different from current
        , distinctUntilChanged()
        // subscription for response
      ).subscribe((text: string) => {
        // notify data change
        this.searchCompleteOnButtonPress(text);
      });

    }
  }

  /**
   * this
   * @param data- its search field value and
   */
  searchCompleteOnButtonPress(data: any) {
    this.gridActionsNotifier.broadcast('simpleSearch', data);
  }
}
