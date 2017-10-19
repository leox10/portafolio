import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  info:any = {};
  cargada:boolean = false;
  cargada_nosotros:boolean = false;
  equipo:any[]=[];

  constructor(public http:Http)
  {
    this.carga_info();
    this.carga_nosotros();
  }

  public carga_info()
  {
    this.http.get("assets/data/info.pagina.json").subscribe(data => {
      //console.log(data.json());
      this.cargada = true;
      this.info = data.json();
    })
  }
  public carga_nosotros()
  {
    this.http.get("https://tienda-b9dda.firebaseio.com/equipo.json").subscribe(data => {
      console.log(data.json());
      this.cargada_nosotros = true;
      this.equipo = data.json();
    })
  }
}
