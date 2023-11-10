import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoComponent } from '../empleado/empleado.component';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule, EmpleadoComponent],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

}
