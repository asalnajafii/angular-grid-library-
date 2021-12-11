import {HttpClient, HttpEvent, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export class GridService<Tin, Tout> {

  /**
   * @param http
   */
  constructor(private http: HttpClient,
              ) {
  }

  /**
   *
   * @param apiAddress
   * @param params
   */
  getData(apiAddress: string, params: HttpParams): Observable<Tout> {
    return this.http.get<Tout>(apiAddress, {params});
  }

  /**
   *
   * @param apiAddress
   * @param params
   * @filter filter
   */
  postData(apiAddress: string, params: HttpParams, filter: Tin): Observable<Tout> {
    return this.http.post<Tout>(apiAddress, {filter}, {params});
  }


  exportData(apiAddress: string, params: HttpParams, filter: any){
    return this.http.post(apiAddress, filter, {
      params: params,
      responseType: 'arraybuffer',
      observe: 'response',
    }).pipe(
      map(this.fileDownloadMap)
    ).toPromise();

  }

  /**
   *
   * Get file response for download and send it to the client<br>
   * Usage Example:<br>
   * ```
   * return this.http.get<any>(`${environment.apiUrl}/client/payments/invoice/${paymentId}`, {
   *       responseType: 'arraybuffer',
   *       observe: 'response',
   *   }).pipe(
   *      map(this.helperService.fileDownloadMap)
   *   );
   * ```
   *
   * @param resp Response as arraybuffer with observe 'response'
   */
  fileDownloadMap(resp: HttpResponse<ArrayBuffer>) {
    let result = null;

    if (resp.headers.has('content-disposition')) {
      const contentDispositionHeader = resp.headers.get('content-disposition');
      // @ts-ignore
      const results = contentDispositionHeader.split(';');
      result = results[1].trim().split('=')[1];
      if (results.length > 2) {
        result = decodeURIComponent(results[2].trim().split('=')[1]).replace('utf-8\'\'', '');
      }
    }

    if (!resp.headers.has('content-type')) {
      throw new Error('Content type not set!');
    }
    const type = resp.headers.get('content-type');

    // @ts-ignore
    if(resp.body != null && type != null){
      const response = {
        url: window.URL.createObjectURL(new Blob([resp.body], {type})),
        filename: result ? result.replace(/"/g, '') : null
      };
      // create hidden dom element (so it works in all browsers)
      const a = document.createElement('a');
      a.setAttribute('style', 'display:none;');
      document.body.appendChild(a);
      // create file, attach to hidden element and open hidden element
      a.href = response.url;
      if (response.filename) {
        a.download = response.filename;
      }
      a.click();
      document.body.removeChild(a);

      return response;
    }
    return null;
  }

}
