import {Injectable} from '@angular/core';
import {GridService} from './grid.service';
import {HttpClient} from '@angular/common/http';
import {ReadMoreService} from './readMore.service';

@Injectable({providedIn: 'root'})
export class GridFactoryService {

  constructor(private http: HttpClient) {
  }

  /**
   *
   * @param resourceName
   * @constructor
   */
  CreateGridService(resourceName: string): any {
      return new GridService<any, any>(this.http);
  }
}
