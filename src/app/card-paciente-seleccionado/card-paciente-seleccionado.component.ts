import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Paciente} from "../paciente";

@Component({
  selector: 'app-card-paciente-seleccionado',
  templateUrl: './card-paciente-seleccionado.component.html',
  styleUrls: ['./card-paciente-seleccionado.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CardPacienteSeleccionadoComponent implements OnInit {
  @Input() pacienteSeleccionado;

  constructor() {

  }

  poseeSeguro = "";

  ngOnInit() {
  }
  funcionDeterminarSeguro(){
    if (this.pacienteSeleccionado[0].seguro === true)
    {
      this.poseeSeguro = "SI"
      console.log("veamos si llega 1")
    }
    if (this.pacienteSeleccionado[0].seguro === false)
    {
      this.poseeSeguro = "NO"

      console.log("veamos si llega 2")
    }
  }
}
