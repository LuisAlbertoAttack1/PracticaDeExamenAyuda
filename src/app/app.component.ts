import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica1';

  public informacionDeMetodoApp(nombreAMostrar:string) {

    console.log(nombreAMostrar);
    

  }


}
