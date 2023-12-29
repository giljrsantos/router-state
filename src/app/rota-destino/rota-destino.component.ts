import { Component } from '@angular/core';

@Component({
  selector: 'app-rota-destino',
  templateUrl: './rota-destino.component.html',
  styleUrls: ['./rota-destino.component.scss']
})
export class RotaDestinoComponent {

  dados: any;



  ngOnInit() {
    this.dados = window.history.state;
  }



}
