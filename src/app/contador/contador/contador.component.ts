import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
        <!--  En tamplate se puede coloar una plantilla literal de HTML, sin la necesidad de un archivo html externo -->
        <!-- En las {{ }} se puede colocar cualquier expresión de TS, como funciones, variables, 1+2, etc -->
        <h1>{{ titulo }}</h1>
        <h3>La base es <strong> {{ base }} </strong></h3>
        <!-- Los eventos son creados con paréntesis -->

        <button (click)="acumular( -base )"> - {{base }} </button>

        <span> {{ numero }} </span>

        <button (click)="acumular( base )"> + {{ base }}</button>
        
    `
})
export class ContadorComponent {
    
    public titulo: string = 'Contador App';

    public numero: number = 10;

    public base: number = 5;
    /* 
    sumar() {
        return this.numero++;
    }
    restar() {
        return this.numero--;
    }*/
    // Mejor hacerlo en un sola funcion
    acumular( valor :number) {
        this.numero += valor 
    }
}