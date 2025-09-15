import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Apolice } from './apolice/apolice';
import { CalculadoraImc } from './calculadora-imc/calculadora-imc';
import { CalcularMedia } from './calcular-media/calcular-media';
import { ConversorTemperatura } from './conversor-temperatura/conversor-temperatura';
import { MenuSuperior } from './menu-superior/menu-superior';
import { Home } from './home/home';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Apolice,
    CalculadoraImc,
    CalcularMedia,
    ConversorTemperatura,
    MenuSuperior,
    Home,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
