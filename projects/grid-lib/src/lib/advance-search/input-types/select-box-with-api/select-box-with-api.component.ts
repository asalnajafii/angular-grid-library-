import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {concat, Observable, of, Subject, throwError} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {debounceTime, distinctUntilChanged, filter, map, switchMap, tap} from 'rxjs/operators';
import {SelectWithApiType} from '../../models/SelectWithApiType';

@Component({
  selector: 'app-select-box-with-api',
  templateUrl: './select-box-with-api.component.html',
})
export class selectBoxWithApiComponent implements OnInit {
  @Input() selectWithApiType!: SelectWithApiType;
  @Input() formGroupObj!: FormGroup;
  public typeahead$: Subject<string> = new Subject();
  public items$: Observable<any> = new Observable<any>();

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.items$ = this.getSearch();
  }


  public getSearch(): Observable<any> {
    let isLoading = false;
    return concat(
      of([]),
      this.typeahead$.pipe(
        filter(res => {
          return res !== null && res.length > 2;
        }),
        tap(() => isLoading = true),
        distinctUntilChanged(),
        debounceTime(1000),
        switchMap(data => {
          return this.getListOfData(data).pipe(
            tap(() => isLoading = false)
          );
        }),
      )
    );
  }

  /**
   *
   * it show list of data in ng-select when we search on it
   * @param data
   */

  public getListOfData(data: string = ''): Observable<any> {
    let params = this.selectWithApiType.config?.params || new HttpParams();
    params = params.set(this.selectWithApiType.config.parameterName!, data + '');
    return this.http.get<any>(`${this.selectWithApiType.config.relativeUrl}/?${params.toString()}`)
      .pipe(map(resp => {
        if (resp.Error) {
          throwError(resp.Error);
        } else {
          return resp.data;
        }
      }));
  }
}
