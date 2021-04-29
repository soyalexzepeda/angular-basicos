import { Component } from '@angular/core';

import { Trabajador } from '../interfaces/trabajador.interfaces';

import { EmpresaService } from '../services/empresa.service';

@Component({
  selector: 'app-agregar-trabajadores',
  templateUrl: './agregar-trabajadores.component.html'
})
export class AgregarTrabajadoresComponent {

  public trabajador: Trabajador = {
    nombre: '',
    apellido: '',
    departamento: '',
    telefono: 0
  }

  constructor( private empresaService: EmpresaService ) {}

  public agregar() {
    this.empresaService.agregarTrabajador(this.trabajador);

    this.trabajador = {
      nombre: '',
      apellido: '',
      departamento: '',
      telefono: 0
    }
  }
}
