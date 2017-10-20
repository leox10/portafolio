import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService

{

  productos:any[]=[];
  cargando_prod:boolean=true;
  producto_filtrado:any[]=[];

  constructor(private http:Http)
  {
      this.carga_producto();
  }

  public buscar_producto(termino:string)
  {
    //console.log("Buscando...");
    //console.log(this.productos.length);
    if ( this.productos.length === 0)
    {
        this.carga_producto().then(()=>{
           //termino la carga
           this.filtrar_productos(termino);
        })

    }
    else
    {
        this.filtrar_productos(termino);
    }

  }

  private filtrar_productos(termino:string)
  {
    this.producto_filtrado = [];
    termino = termino.toLowerCase();
    this.productos.forEach(prod => {
      if (prod.categoria.indexOf(termino)>=0 || prod.titulo.toLowerCase().indexOf(termino)>=0)
      {
          this.producto_filtrado.push(prod);
        //  console.log(prod);

      }


       //console.log(prod);
    })
  }


  public c_producto(id:string)
  {
    return this.http.get(`https://tienda-b9dda.firebaseio.com/productos/${id}.json`);
  }

  public carga_producto()
  {
    this.cargando_prod=true;

   let promesa = new Promise((resolve, reject)=>{
      this.http.get('https://tienda-b9dda.firebaseio.com/productos_idx.json')
      .subscribe(res =>
      {
        //console.log(res.json());
        this.cargando_prod=false;
        this.productos=res.json();
        resolve();
      });
    });
    return promesa;

  }
}
