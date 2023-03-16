import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  
  heroes: string[] = [
    'Ironman',
    'Spiderman',
    'Thor',
    'Hulk'
  ]

  heroeBorrado: string = '';

  borrarHeroe() {
    //this.heroes.pop();
    // Para ver la documentación de los metodos es: CTRL + ESPACIO
    this.heroeBorrado = this.heroes.pop() || '';
    
  }
}
