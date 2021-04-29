import { Injectable } from '@angular/core';

import { Trabajador } from '../interfaces/trabajador.interfaces';

@Injectable()
export class EmpresaService {

  private _trabajadores: Trabajador[] = [
    {
      nombre: 'Alejandro',
      apellido: 'Zepeda',
      departamento: 'IT',
      telefono: 7226619787
    },
    {
      nombre: 'Melissa',
      apellido: 'Benítez',
      departamento: 'Telecom',
      telefono: 7223490129
    }
  ]

  get trabajadores(): Trabajador[] {
    return [...this._trabajadores];
  }

  agregarTrabajador(trabajador: Trabajador) {
    this._trabajadores.push(trabajador);
  }

  constructor() { }
}
