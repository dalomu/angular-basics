import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";


@NgModule({
    // En declaraciones se declara todo lo que contenga este modulo; componentes, pipes, etc.
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    // Que quiero hacer visible fuera de este modulo
    exports: [
        ListadoComponent
    ],
    // Cuando ves la palabra imports, es que AQUI van modulos
    imports:[
        // Sirve para que funcionen las directivas de *ngIf y *ngFor
        CommonModule
    ]
})
export class HeroesModule {}