import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <span>La base del contador es <strong> {{base}} </strong></span>
    <br>
    <br>
    <button (click)="acumular(base)">+ {{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-base)">- {{ base }}</button>
  `
})
export class ContadorComponent {
  titulo = 'Contador App';
  numero = 10;
  base = 5;

  acumular( contador:number ){
    this.numero += contador;
  }
}
