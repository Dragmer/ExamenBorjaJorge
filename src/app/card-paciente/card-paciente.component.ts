import { Component, OnInit, Input } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-card-paciente',
  templateUrl: './card-paciente.component.html',
  styleUrls: ['./card-paciente.component.css'],
  providers: [DataService]
})
export class CardPacienteComponent implements OnInit {

  @Input() pacientes : any[];

  message: string;
  constructor(private data : DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}



