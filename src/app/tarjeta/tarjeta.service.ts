import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contants } from '../constants/constants';
import { Tarjeta } from './tarjeta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  constructor(private http: HttpClient) {

  }

  getNowPlaying() {
    return this.http.get<any>(Contants.LISTAR)
  }

  enviarInformacionTarjeta(tarjeta: Tarjeta) {
    const options = {
      headers: {
        'content-type': 'application/json'
      }
    }
    let json = JSON.stringify(tarjeta)
    return this.http.post<any>(Contants.AGREGAR, json, options)
  }

  getTarjetaByNumero(numero: number): Observable<Tarjeta> {
    const url = `${Contants.EDITAR}/editar/${numero}`;
    return this.http.get<Tarjeta>(url);
  }
}
