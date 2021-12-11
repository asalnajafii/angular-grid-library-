import {Pipe, PipeTransform} from "@angular/core";
import * as moment from 'moment';
@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {

  transform(data: any,format: string): any {
    return moment(data).format(format);
  }

}
