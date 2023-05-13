import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
@Output()
  public emitirPruebaDeInformacion: EventEmitter<string> = new EventEmitter();

  public nombreAMostrar : string = "Hola mundo dandole clik al boton";

  public metodoQueSeMostrara() : void{
    this.emitirPruebaDeInformacion.emit(this.nombreAMostrar);
  }
} 
