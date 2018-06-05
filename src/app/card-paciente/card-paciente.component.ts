import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-paciente',
  templateUrl: './card-paciente.component.html',
  styleUrls: ['./card-paciente.component.css']
})
export class CardPacienteComponent implements OnInit {

  @Input() pacientes;

  constructor() { }

  ngOnInit() {
  }

}

