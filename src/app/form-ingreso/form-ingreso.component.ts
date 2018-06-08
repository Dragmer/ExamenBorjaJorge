import { Component, OnInit, Input } from '@angular/core';
import {Paciente} from "../paciente";

@Component({
  selector: 'app-form-ingreso',
  templateUrl: './form-ingreso.component.html',
  styleUrls: ['./form-ingreso.component.css']
})

export class FormIngresoComponent implements OnInit {
  @Input() arregloPacientes;

  hijos = [
    {value: '0', viewValue: '0'},
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'}
  ];
  seguros = [
    {value: 'true', viewValue: 'Si'},
    {value: 'false', viewValue: 'No'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  //clickLimpiar() {}


  clickLimpiar(nombre: string, apellidos: string, fechaNacimiento: string, hijo: number, seguro: boolean) {
    this.numeroPacientes = this.arregloPacientes.length;
    this.idPaciente = this.numeroPacientes +1;
    let paciente1 : Paciente = new Paciente(this.idPaciente,'Jorge','Borja','24/04/2019',0,true);
    this.arregloPacientes.push(paciente1);
    let paciente2 : Paciente = new Paciente(2,'Ivan','Suarez','25/04/219',2,false);
    this.arregloPacientes.push(paciente2);
    let paciente3 : Paciente = new Paciente(3,'Pedro','Cajamarca','24/68/1589',4,true);
    this.arregloPacientes.push(paciente3);
  }

  numeroPacientes = 0;
  idPaciente = 0;


  clickCrear(nombre: string, apellidos: string, fechaNacimiento: string, hijo: number, seguro: boolean) {
    this.numeroPacientes = this.arregloPacientes.length;
    this.idPaciente = this.numeroPacientes +1;
    let paciente1 : Paciente = new Paciente(this.idPaciente,nombre,apellidos,fechaNacimiento,hijo,seguro);
    this.arregloPacientes.push(paciente1);
  }
}


