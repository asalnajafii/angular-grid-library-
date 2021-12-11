import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'actionBtnClass',
})
export class ActionClassPipe implements PipeTransform {

  transform(data: any): any {
    if (data.hasOwnProperty('margin')) {
      return 'm' + data.margin;
    } else if (data.hasOwnProperty('marginRight')) {
      return 'mr-' + data.marginRight;
    } else if (data.hasOwnProperty('marginLeft')){
      return 'ml-' + data.marginLeft;
    }

  }

}
