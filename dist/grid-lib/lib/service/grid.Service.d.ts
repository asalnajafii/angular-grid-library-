import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class GridService<Tin, Tout> {
    private http;
    constructor(http: HttpClient);
    /**
     *
     * @param apiAddress
     * @param params
     */
    getData(apiAddress: string, params: HttpParams): Observable<Tout>;
    /**
     *
     * @param apiAddress
     * @param body
     */
    postData(apiAddress: string, body: Tin): Observable<Tout>;
}
//# sourceMappingURL=grid.Service.d.ts.map