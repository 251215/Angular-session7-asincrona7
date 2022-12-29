import { Component } from '@angular/core';
import { min } from 'rxjs';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {

numero=0;
inicio=1;
fin=9;
gira(){ 
  this.numero=this.inicio+Math.floor(Math.random()*this.fin);
}

}
