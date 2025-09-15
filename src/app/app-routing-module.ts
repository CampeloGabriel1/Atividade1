import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularMedia } from './calcular-media/calcular-media';
import { Apolice } from './apolice/apolice';
import { ConversorTemperatura } from './conversor-temperatura/conversor-temperatura';
import { CalculadoraImc } from './calculadora-imc/calculadora-imc';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
