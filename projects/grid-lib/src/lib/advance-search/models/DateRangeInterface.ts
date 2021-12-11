import {FieldInterface} from './FieldInterface';

export interface DateRangeInterface extends FieldInterface {
  fromPlaceHolder?: string;
  toPlaceHolder?: string;
  dateFormat?: string;
}
