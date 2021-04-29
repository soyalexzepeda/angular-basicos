import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadoresModule } from './contadores/contadores.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { EmpresaModule } from './empresa/empresa.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  // Todos los modulos van en importaciones
  imports: [
    BrowserModule,
    ContadoresModule,
    HeroesModule,
    DbzModule,
    EmpresaModule
  ],
  // Todos los servicios van en providers
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
