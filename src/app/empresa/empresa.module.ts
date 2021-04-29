import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { AgregarTrabajadoresComponent } from './agregar-trabajadores/agregar-trabajadores.component';

import { EmpresaService } from './services/empresa.service';

@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    TrabajadoresComponent,
    AgregarTrabajadoresComponent,
  ],
  exports: [
    PaginaPrincipalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    EmpresaService
  ]
})
export class EmpresaModule { }
