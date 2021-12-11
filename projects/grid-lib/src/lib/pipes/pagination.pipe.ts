import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pagination',
})

export class PaginationPipe implements PipeTransform {
  transform(data: any, currentPage: number, pageSize: number): any {
    return[...data.slice(pageSize * (currentPage), pageSize * (currentPage + 1))];
  }

}


