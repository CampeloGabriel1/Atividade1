import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularMedia } from './calcular-media/calcular-media';
import { Apolice } from './apolice/apolice';
import { ConversorTemperatura } from './conversor-temperatura/conversor-temperatura';
import { CalculadoraImc } from './calculadora-imc/calculadora-imc';
import { Home } from './home/home';
import { MenuSuperior } from './menu-superior/menu-superior';

const routes: Routes = [
  { path: 'menu-superior', component: MenuSuperior },
  { path: 'calcular-media', component: CalcularMedia },
  { path: 'apolice', component: Apolice },
  { path: 'conversor-temperatura', component: ConversorTemperatura },
  { path: 'calculadora-imc', component: CalculadoraImc },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
