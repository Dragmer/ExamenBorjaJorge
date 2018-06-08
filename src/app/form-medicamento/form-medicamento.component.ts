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
    this.numeroMedicamento = this.arregloMedicamentos.length;
    this.idMedicamento = this.numeroMedicamento +1;
    let medicamento1 : Medicamento = new Medicamento(this.idMedicamento,'Paracetamol','De vainas raras','que note mueras',0.5,10,'1');
    this.arregloMedicamentos.push(medicamento1);
    let medicamento2 : Medicamento = new Medicamento(this.idMedicamento+1,'Viagra','De vainas raras','que note mueras',0.8,10,'1');
    this.arregloMedicamentos.push(medicamento2);
    let medicamento3 : Medicamento = new Medicamento(this.idMedicamento+2,'Finalin','De vainas raras','que note mueras',1.5,10,'1');
    this.arregloMedicamentos.push(medicamento3);
    //execute action
  }
  idArregloMedicamento = 0;
  idPacienteMedicamentos = 0;

  clickCrear(nombre: string,composicion: string,usadoPara: string,gramosIngerir: number,numeroPastillas: number,fechaCaducidad: string) {
    this.arregloPacienteMedicamento = new Array<Array<Medicamento>>();
    this.numeroMedicamento = this.arregloMedicamentos.length;
    this.idMedicamento = this.numeroMedicamento +1;
    //let medicamento1 : Medicamento = new Medicamento(this.idMedicamento,nombre,composicion,usadoPara,gramosIngerir,numeroPastillas,fechaCaducidad);
    let medicamento1 : Medicamento = new Medicamento(this.idMedicamento,'Paracetamol','De vainas raras','que note mueras',0.5,10,'1');
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
  }

}
