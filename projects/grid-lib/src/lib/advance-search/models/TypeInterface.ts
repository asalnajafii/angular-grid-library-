import {FieldInterface} from './FieldInterface';
import type from "../type/advance-search.type";

export interface TypeInterface {
  config: FieldInterface;
  readonly type: type.TEXT | type.SELECT | type.SELECT_WITH_API | type.DATE_RANGE
}
