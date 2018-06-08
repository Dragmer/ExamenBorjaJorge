import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import {Paciente} from "../paciente";

@Component({
  selector: 'app-card-paciente',
  templateUrl: './card-paciente.component.html',
  styleUrls: ['./card-paciente.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CardPacienteComponent implements OnInit {
  @Input() arregloPacientes;
  @Input() pacienteSeleccionado;

  constructor() {
  }

  ngOnInit() {

  }
  seleccionarPaciente(id :number){
    if (this.pacienteSeleccionado.length > 0)
    {
      this.pacienteSeleccionado.pop();
    }
    else {
      this.pacienteSeleccionado.push(this.arregloPacientes[id - 1]);
    }
  }
}



