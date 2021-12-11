import {TypeInterface} from './TypeInterface';
import {SelectInterface} from './SelectInterface';
import type from "../type/advance-search.type";

export class SelectType implements TypeInterface {
  readonly type = type.SELECT;
  /**
   * You can set default field config here
   */
  config: SelectInterface = {
    label: 'Select',
    id: 'select',
    formControlName: 'select',
    multiple: false,
    items: [],
    clearable: false,
    searchable: false,
    bindValue: 'id',
    bindLabel: 'fullName',
    isStatic: false,
  };

  constructor(config: SelectInterface) {
    this.config = {...this.config, ...config};
  }
}
