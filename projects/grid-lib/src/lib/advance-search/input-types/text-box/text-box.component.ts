import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {TextType} from '../../models/TextType';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
})
export class TextBoxComponent {
  @Input() textType!: TextType;
  @Input() formGroupObj!: FormGroup;
}
