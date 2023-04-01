import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {
    nombre = 'Batman';
    edad  = 48;

    get nombreCapitalizado() : string{
      return this.nombre.toUpperCase();
    }

    obtenerNombre() : string{
      return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(){
      this.nombre = 'Spiderman';
    }

    cambiarEdad(){
      this.edad = 30;
    }
}
