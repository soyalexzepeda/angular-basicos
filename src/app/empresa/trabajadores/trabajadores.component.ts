import { Component } from '@angular/core';

import { EmpresaService } from '../services/empresa.service';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html'
})
export class TrabajadoresComponent {

  get trabajadores() {
    return this.empresaService.trabajadores;
  }

  constructor( private empresaService: EmpresaService ) {}
}
