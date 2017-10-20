import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html'
})
export class BuscaComponent  {
    termino:string = undefined;

  constructor(private route:ActivatedRoute,
              public _ps:ProductosService)
  {

      route.params.subscribe(parametros => {

        this.termino = parametros['termino'];
        console.log(this.termino);
        _ps.buscar_producto(this.termino);
      })
  }


}
