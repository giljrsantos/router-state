import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RotaOrigemComponent } from './rota-origem/rota-origem.component';
import { RotaDestinoComponent } from './rota-destino/rota-destino.component';

@NgModule({
  declarations: [
    AppComponent,
    RotaOrigemComponent,
    RotaDestinoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
