import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'SortGridPipe',

})
export class SortGridPipe implements PipeTransform {
  transform(data: any, direction: string, name: string): any {
    return true;
   // return _.orderBy(data, [name], [direction == 'asc' ? 'asc' : 'desc']);
  }

}
