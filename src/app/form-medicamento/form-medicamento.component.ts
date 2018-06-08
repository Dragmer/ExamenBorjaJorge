import {Component, Input, OnInit} from '@angular/core';
import {Paciente} from "../paciente";
import {Medicamento} from "../medicamentos";

@Component({
  selector: 'app-form-medicamento',
  templateUrl: './form-medicamento.component.html',
  styleUrls: ['./form-medicamento.component.css']
})
export class FormMedicamentoComponent implements OnInit {
  @Input() arregloMedicamentos : Medicamento[];
  @Input() arregloPacienteMedicamento : any[];
  @Input() pacienteSeleccionado: Paciente[];

  constructor() { }

  ngOnInit() {
  }

  numeroMedicamento = 0;
  idMedicamento = 0;

  clickLimpiar() {
  }
  idArregloMedicamento = 0;
  idPacienteMedicamentos = 0;

  clickCrear(nombre: string,composicion: string,usadoPara: string,gramosIngerir: number,numeroPastillas: number,fechaCaducidad: string) {
    console.log(this.pacienteSeleccionado)
    console.log(this.arregloPacienteMedicamento)
    this.arregloPacienteMedicamento = new Array<Array<Medicamento>>();
    this.numeroMedicamento = this.arregloMedicamentos.length;
    this.idMedicamento = this.numeroMedicamento +1;
    let medicamento1 : Medicamento = new Medicamento(this.idMedicamento,nombre,composicion,usadoPara,gramosIngerir,numeroPastillas,fechaCaducidad);
    this.arregloMedicamentos.push(medicamento1);
    let idPacienteMedicamentos = this.arregloPacienteMedicamento.length;
    this.arregloPacienteMedicamento[idPacienteMedicamentos+1] = this.pacienteSeleccionado;
    for (let pacienteArreglo in this.arregloPacienteMedicamento)
    {
      if (this.pacienteSeleccionado[0].id === this.arregloPacienteMedicamento[pacienteArreglo][0].id)
      {
        this.arregloPacienteMedicamento[pacienteArreglo][1] = this.arregloMedicamentos;
      }
    }
    if (this.pacienteSeleccionado.length >0)
    {
      this.pacienteSeleccionado.pop()
    }
  }

}
