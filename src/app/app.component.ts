import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Es el selector con el que se llama en el index
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Lo que se tiene en pantalla es una *instancia* del App component, como un contructor, por eso se usa this
export class AppComponent { 
  
}
