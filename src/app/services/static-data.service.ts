import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appSetting } from '../constants/endpoint';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  constructor(private http:HttpClient){}

  public getCountryData() {
      return this.http.get(appSetting.GET_COUNTRY_DATA);
    }
}
