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

  getEdad(){
    return this.edad
  }

  constructor() { }

}
