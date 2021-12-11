import {TypeInterface} from './TypeInterface';
import {SelectWithApiInterface} from './SelectWithApiInterface';
import type from "../type/advance-search.type";

export class SelectWithApiType implements TypeInterface {
  readonly type = type.SELECT_WITH_API;
  /**
   * You can set default field config here
   */
  config: SelectWithApiInterface = {
    label: 'Search and select',
    id: 'searchAndSelect',
    formControlName: 'searchAndSelect',
    multiple: false,
    clearable: false,
    searchable: true,
    bindValue: 'id',
    bindLabel: 'fullName',
    parameterName:'q',
  };

  constructor(config: SelectWithApiInterface) {
    this.config = {...this.config, ...config};
  }
}
