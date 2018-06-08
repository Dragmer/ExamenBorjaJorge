import {Component, SimpleChanges} from '@angular/core';
import {Paciente} from "./paciente";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  arregloPacientes = [];
  pacienteSeleccionado = [];
  arregloMedicamentos = [];
  arregloPacienteMedicamento = [];
}

