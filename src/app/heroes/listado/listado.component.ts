import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  public heroes: string[] = ['Spider-man', 'Iron-Man', 'Cápitan América', 'Hulk', 'Thor'];
  public newHeroes: string[] = [];

  public borrarHeroe() {
    let heroeBorrado = this.heroes.shift() || '';

    if(heroeBorrado != '') {
      this.newHeroes.push(heroeBorrado.toString())
    }
  }
}
