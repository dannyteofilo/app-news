import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../service.index';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  public url:string;
  public key:string;

  constructor(public _http:HttpClient) { 
    this.url=GLOBAL.urlApi
    this.key=GLOBAL.key
  }

  getByCountry(id:string){
    return this._http.get(`${this.url}?country=${id}&apikey=${this.key}`)
  }
}
