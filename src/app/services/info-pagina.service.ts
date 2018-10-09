import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {infoPagina} from '../interfaces/info-pag.interface'
@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  cargada = false;

  constructor(private http: HttpClient) {


    console.log("Servicio info pagina listo");

    //leer archivo json
    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: infoPagina) => {
        this.cargada=true;
        this.info = resp;
        console.log(resp);
      });
 }
}
