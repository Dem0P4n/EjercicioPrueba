import { Component, Output, EventEmitter } from '@angular/core';
import { Seccion } from 'src/app/modelos/historial';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent {

  //Enviar datos desde formulario hacia app-component
  @Output() public enviarDato = new EventEmitter<Seccion>();

  public nuevoHistorialSeccion: Seccion = {
    nombreSeccion: ''
  }

  public cambiarNombre(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorialSeccion.nombreSeccion = elemento.value;
  }

  public guardarHistorial(): void{
    const copia: Seccion = {
      ...this.nuevoHistorialSeccion
    }
    this.enviarDato.emit(copia);

    this.nuevoHistorialSeccion.nombreSeccion = '';
  }

}
