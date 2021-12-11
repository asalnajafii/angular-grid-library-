import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import type from '../type/advance-search.type';

@Component({
  selector: 'app-advance-form-control',
  templateUrl: './advance-form-control.component.html',
})
export class AdvanceFormControlComponent {
  @Input() config!: any;
  @Input() formGroupObj!: FormGroup;

  public get typeOfEnum(): typeof type {
    return type;
  }

}
