import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'rowChangeName',
})
export class RowChangeNamePipe implements PipeTransform {

  transform(rowData: any, value: any): any {
    if (typeof (value) !== "string")
      return value(rowData);
       return value
  }

}
