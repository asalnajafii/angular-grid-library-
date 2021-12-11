import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {GridActionsNotifier} from '../service/grid-actions-notifier';
import {Subscription} from 'rxjs';
import {AdvanceFormModel} from './models/AdvanceForm.model';


@Component({
  selector: 'lib-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.scss']
})
export class AdvanceSearchComponent implements OnInit, OnDestroy {
  @Input() advancedSearch!: AdvanceFormModel;
  public form!: FormGroup;
  public isOpen = false;
  private subscription = new Subscription();

  constructor(private gridActionsNotifier: GridActionsNotifier) {
  }

  ngOnInit(): void {
    this.buildingForm();
    this.subscription.add(this.advancedSearch.callAdvanceSearch.subscribe(res => this.isOpen = res));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  buildingForm() {
    let FormControls = {};
    for (let control of this.advancedSearch.inputs) {
      // @ts-ignore
      FormControls[control.config.formControlName] = new FormControl(null);
    }
    this.form = new FormGroup(FormControls);
  }

  onSubmitted() {
    this.gridActionsNotifier.broadcast('advancedSearch', {...this.form.value, ...this.advancedSearch.filters});
  }

  resetForm() {
    this.form.reset();
    this.gridActionsNotifier.broadcast('advancedSearch', null);
  }

  closeAdvanceSearch() {
    this.isOpen = false;
  }
}
