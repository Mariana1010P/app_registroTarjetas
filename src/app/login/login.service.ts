import { Injectable } from '@angular/core';
import { Contants } from '../constants/constants';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url= Contants.VALIDATE_WITH_LOGIN
  
  constructor(private http: HttpClient) {
    
  }

  login(login:Login) {
    const options = {
      headers: {
        'content-type': 'application/json'
      }
    }
    let json = JSON.stringify(login)
    return this.http.post<any>(this.url,json,options)
  }

  
}
