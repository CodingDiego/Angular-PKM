import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  nombre = "Juan";
  apellido = "Diaz";
  private edad = 20;
  //empresa = "SkilfulDev";
  habilitacionCuadro = true;
  private usuarioRegistrado = true;
  getEdad(){
    return this.edad
  }
  getRegistroUsuario(){
    return this.usuarioRegistrado
  }
  constructor() { }

}
