import {TypeInterface} from './TypeInterface';
import {FieldInterface} from './FieldInterface';
import type from "../type/advance-search.type";

export class TextType implements TypeInterface {
  readonly type = type.TEXT;
  /**
   * You can set default field config here
   */
  config: FieldInterface = {
    label: 'Search',
    id: 'search',
    formControlName: 'search',
  }

  constructor(config: FieldInterface) {
    this.config = {...this.config, ...config};
  }
}
