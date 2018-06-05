import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-ingreso',
  templateUrl: './form-ingreso.component.html',
  styleUrls: ['./form-ingreso.component.css']
})

export class FormIngresoComponent implements OnInit {

  hijos = [
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

  constructor() { }

  ngOnInit() {
  }
  pacientes= [];

  clickLimpiar() {

  }
  clickCrear(nombre: string, apellidos: string, fechaNacimiento: string, hijo: number, seguro: boolean) {
      let paciente1 : Paciente = new Paciente(1,nombre,apellidos,fechaNacimiento,hijo,seguro);
      this.pacientes = [paciente1];
  }
}

class Paciente {
  constructor(
    public id: number,
    public nombres: string,
    public apellidos: string,
    public fechaNacimiento: string,
    public hijos: number,
    public seguro: boolean
  ) {  }

}
