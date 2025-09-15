import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  standalone: false,
  templateUrl: './apolice.html',
  styleUrl: './apolice.css',
})
export class Apolice {
  nomeSegurado: string = '';
  sexo: string = '';
  idade: number = 0;
  valorAutomovel: number = 0;
  valor = 0;

  calcularApolice() {
    if (this.sexo === 'masculino') {
      if (this.idade <= 25) {
        this.valor = this.valorAutomovel * 0.15;
      } else {
        this.valor = this.valorAutomovel * 0.1;
      }
    } else if (this.sexo === 'feminino') {
      this.valor = this.valorAutomovel * 0.08;
    }
    return this.valor;
  }

  ngOnInit(): void {}
}
