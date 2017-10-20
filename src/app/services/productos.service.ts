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
  public c_producto(id:string)
  {
    return this.http.get(`https://tienda-b9dda.firebaseio.com/productos/${id}.json`);
  }

  public carga_producto()
  {
    this.cargando_prod=true;

      this.http.get('https://tienda-b9dda.firebaseio.com/productos_idx.json')
      .subscribe(res =>
      {
        //console.log(res.json());
        this.cargando_prod=false;
        this.productos=res.json();
      })

  }
}
