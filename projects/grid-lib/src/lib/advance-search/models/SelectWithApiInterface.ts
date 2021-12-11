import {FieldInterface} from './FieldInterface';
import {HttpParams} from '@angular/common/http';

export interface SelectWithApiInterface extends FieldInterface {
  multiple?: boolean;
  clearable?: boolean;
  searchable?: boolean;
  relativeUrl?: string;
  bindValue?: string;
  bindLabel?: string;
  params?: HttpParams;
  parameterName?: string;
}
