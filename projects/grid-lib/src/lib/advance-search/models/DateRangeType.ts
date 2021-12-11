import {TypeInterface} from './TypeInterface';
import type from "../type/advance-search.type";
import {DateRangeInterface} from './DateRangeInterface';

export class DateRangeType implements TypeInterface {
  readonly type = type.DATE_RANGE;
  /**
   * You can set default field config here
   */
  config: DateRangeInterface = {
    label: 'Date range',
    id: 'dateRange',
    formControlName: 'dateRange',
    fromPlaceHolder: 'From',
    toPlaceHolder: 'To',
    dateFormat: 'YYYY-MM-DD h:mm:ss',

  };

  constructor(config: DateRangeInterface) {
    this.config = {...this.config, ...config};
  }
}
