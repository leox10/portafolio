import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pitem',
  templateUrl: './pitem.component.html'
})
export class PitemComponent {

  constructor(private route:ActivatedRoute)
  {
    route.params.subscribe(parametros => {
      console.log(parametros);
      console.log(parametros['id']);
    })
  }

}
