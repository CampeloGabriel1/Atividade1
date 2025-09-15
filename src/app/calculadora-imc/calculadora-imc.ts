import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-imc',
  standalone: false,
  templateUrl: './calculadora-imc.html',
  styleUrl: './calculadora-imc.css',
})
export class CalculadoraImc {
  peso: number = 0;
  altura: number = 0;
  imc: { resultado: number; classificacao: string } = { resultado: 0, classificacao: '' };

  calcularImc() {
    const resultado = this.peso / (this.altura * this.altura);
    let classificacao = '';
    if (resultado < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (resultado >= 18.5 && resultado < 24.9) {
      classificacao = 'Peso normal';
    } else if (resultado >= 25 && resultado < 29.9) {
      classificacao = 'Sobrepeso';
    } else if (resultado >= 30 && resultado < 34.9) {
      classificacao = 'Obesidade grau 1';
    } else if (resultado >= 35 && resultado < 39.9) {
      classificacao = 'Obesidade grau 2';
    } else {
      classificacao = 'Obesidade grau 3';
    }
    this.imc = { resultado, classificacao };
  }
}
