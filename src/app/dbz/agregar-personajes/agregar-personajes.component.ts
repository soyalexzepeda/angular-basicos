import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personajes',
  templateUrl: './agregar-personajes.component.html'
})
export class AgregarPersonajesComponent {
  public nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // Emitter new event to main page
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor( private dbzService: DbzService ) {}

  public agregar() {
    // The form add emit personaje with Output
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
