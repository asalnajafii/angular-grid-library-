import {FieldInterface} from './FieldInterface';
import {HttpParams} from '@angular/common/http';

export interface SelectInterface extends FieldInterface {
  multiple?: boolean;
  items?: any[];
  clearable?: boolean;
  searchable?: boolean;
  relativeUrl?: string;
  bindValue?: string;
  bindLabel?: string;
  isStatic?: boolean;
  pluckParam?: string;
  params?: HttpParams;
}
