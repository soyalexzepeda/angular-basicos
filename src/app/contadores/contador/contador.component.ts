import { Component } from '@angular/core';

@Component({
     selector: 'app-contador',
     templateUrl: './contador.component.html'
})
export class ContadorComponent {
     public titulo: string = 'Contador App';
     public numero: number = 10;
     public base: number = 3;
   
     public acumular(valor: number): void {
       this.numero += valor;
     }
}