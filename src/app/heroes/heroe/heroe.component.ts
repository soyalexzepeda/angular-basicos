import { Component } from "@angular/core";

@Component({
     selector: 'app-heroe',
     templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
     public nombre: string = 'Spider-Man';
     public edad: number = 16;

     // Getters
     get capitalizarNombre(): string {
          return this.nombre.toUpperCase();
     }

     // Functions
     obtenerInfo(): string {
          return `${this.nombre} - ${this.edad}`;
     }

     cambiarNombre(): void {
          this.nombre = 'Capitan America';
     }
     cambiarEdad(): void {
          this.edad = 30;
     }
}