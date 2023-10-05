import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  constructor(private http: HttpClient) { }

  getSeachMovie(titular:string) {
    const options = {
      headers: {
        'content-type': 'application/json'
      }
    }
    return this.http.get<any>(Contants.SEARCH + titular, options)
  }
}
