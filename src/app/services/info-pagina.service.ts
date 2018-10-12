import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {infoPagina} from '../interfaces/info-pag.interface'
@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {

    console.log("Servicio info pagina listo");
    this.cargarInfo();
    this.cargarEquipo();


 }

 //leer archivo json
 private cargarInfo(){

   this.http.get('assets/data/data-page.json')
   .subscribe( (resp: infoPagina) => {
     this.cargada=true;
     this.info = resp;
     console.log(resp);
   });
 }

 private cargarEquipo(){
    this.http.get('https://agular-html.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) => {
        this.equipo=resp;
        console.log(resp);
      });
 }

}
