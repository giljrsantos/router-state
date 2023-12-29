import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { RotaDestinoComponent } from './rota-destino/rota-destino.component';
import { RotaOrigemComponent } from './rota-origem/rota-origem.component';

const routes: Routes = [
  {path: 'rota-origem', component: RotaOrigemComponent},
  {path: 'rota-destino', component: RotaDestinoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
