import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'RowClassCallback',
})
export class RowClassCallbackPipe implements PipeTransform {

  transform(rowData: any, value: any): any {
    if (value) {
      const cssClass = value(rowData);
      return cssClass;
    }
  }

}
