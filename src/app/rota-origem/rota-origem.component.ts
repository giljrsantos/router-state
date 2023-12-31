import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rota-origem',
  templateUrl: './rota-origem.component.html',
  styleUrls: ['./rota-origem.component.scss']
})
export class RotaOrigemComponent {
  public dadosRotaDestino: any;
  public dados = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618"
        }
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains"
      }
    },
  ]

  constructor(
    private router: Router
  ) {
    this.dados
  }



  /**
   * Navega para uma rota diferente 
   * em um aplicativo Angular e passa
   * dados para a rota de destino usando
   *  o estado do Router State.
   */
  irParaRotaDestino() {
    const data = {
      nome: 'GILBERTO',
      username: 'JUNIOR DOS SANTOS',
      email: 'giljrsantos@gmail.com',
      phone: '(27) 9 9808-5875'
    };

    this.router.navigate(["rota-destino"], {
      state: data
    });
  }
}
