import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ContadorComponent } from "./contador/contador.component";



@NgModule({
    // En declaraciones se declara todo lo que contenga este modulo; componentes, pipes, etc.
    declarations:[
        ContadorComponent
    ],
    // Que quiero hacer visible fuera de este modulo
    exports: [
        ContadorComponent
    ],
    // Cuando ves la palabra imports, es que AQUI van modulos
    imports:[
        // Sirve para que funcionen las directivas de *ngIf y *ngFor
        CommonModule
    ]
})
export class ContadorModule {}