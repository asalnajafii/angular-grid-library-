import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class HelperService{

  /**
   * @param http
   */
  constructor(private http: HttpClient) {
  }

  /**
   *
   * @param key
   * @param value
   */
  setOnLocalStorage(key: string, value: any){
    localStorage.setItem(key, value);
  }

  /**
   * @param key
   */
  unsetOnLocalStorage(key: string){
    localStorage.removeItem(key);
  }

  /**
   * @param key
   */
  getFromLocalStorage(key: string){
    return localStorage.getItem(key);
  }



}
