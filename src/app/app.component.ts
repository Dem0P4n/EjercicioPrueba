import { Component, Output, EventEmitter } from '@angular/core';
import { Seccion } from './modelos/historial';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  public elementosGuardadosSeccion: Array<Seccion> = []


  public agregarNuevo(nuevo: Seccion): void{
    const id: number = this.elementosGuardadosSeccion.length + 1;
    nuevo.id = id;
    this.elementosGuardadosSeccion.push(nuevo);
  }

}
