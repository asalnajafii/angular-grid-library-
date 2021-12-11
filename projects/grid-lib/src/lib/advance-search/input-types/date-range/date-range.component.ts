import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
// @ts-ignore
import moment from 'moment';
import {Subscription} from 'rxjs';
import {DatePickerFormat} from '../../models/DatePickerFormat';
import {DateRangeType} from '../../models/DateRangeType';
import {GridActionsNotifier} from '../../../service/grid-actions-notifier';


@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss']
})
export class DateRangeComponent implements OnInit, OnDestroy {
  @Input() dateRange!: DateRangeType;
  @Input() formGroupObj!: FormGroup;
  public dateForm!: FormGroup;
  private subscription = new Subscription();

  constructor(private fb: FormBuilder,
              private gridActionsNotifier: GridActionsNotifier) {
  }

  ngOnInit() {
    this.initForm();
    this.subscription.add(this.dateForm.valueChanges.subscribe(response => {
        if (response.from && response.to) {
          this.setFormControl(response.from, response.to);
        } else {
          const date = {};
          // @ts-ignore
          date[this.dateRange.config.formControlName] = null;
          this.formGroupObj.patchValue(date);
        }
      })
    );
    this.subscription.add(this.gridActionsNotifier.ListenOn('advancedSearch').subscribe(
      res => {
        if (!res) {
          this.dateForm.reset();
        }
      }
    ));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   *
   * @param date
   */
  public getDateFormatFromNgDatePicker(date: { year: number, month: number, day: number }) {
    let day = null;
    if (date) {
      day = {...date, month: date.month - 1};
    }
    return day ?
      this.changeDateFormat(day) : '';
  }

  /**
   *
   * @param date
   * @constructor
   */

  public changeDateFormat(date: DatePickerFormat) {
    return moment(date).format(this.dateRange.config.dateFormat);
  }

  setFormControl(from: DatePickerFormat, to: DatePickerFormat) {
    const date = {};
    // @ts-ignore
    date[this.dateRange.config.formControlName] =
      `${this.getDateFormatFromNgDatePicker(from)} | ${this.getDateFormatFromNgDatePicker(to)}`;
    this.formGroupObj.patchValue(date);
  }

  initForm() {
    this.dateForm = this.fb.group({
      from: [],
      to: [],
    });
  }

  clearFromInput() {
    this.dateForm.patchValue({from: ''})
  }

  clearToInput() {
    this.dateForm.patchValue({to: ''})
  }

}
