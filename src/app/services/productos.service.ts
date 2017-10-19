import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService

{

  productos:any[]=[];
  cargando_prod:boolean=true;

  constructor(private http:Http)
  {
      this.carga_producto();
  }

  public carga_producto()
  {
    this.cargando_prod=true;

      this.http.get('https://tienda-b9dda.firebaseio.com/productos_idx.json')
      .subscribe(res =>
      {
        console.log(res.json());
        this.cargando_prod=false;
      })

  }
}
