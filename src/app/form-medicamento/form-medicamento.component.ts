import {Component, Input, OnInit} from '@angular/core';
import {Paciente} from "../paciente";
import {Medicamento} from "../medicamentos";

@Component({
  selector: 'app-form-medicamento',
  templateUrl: './form-medicamento.component.html',
  styleUrls: ['./form-medicamento.component.css']
})
export class FormMedicamentoComponent implements OnInit {
  @Input() arregloMedicamentos;
  @Input() arregloPacienteMedicamento;
  @Input() pacienteSeleccionado;


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
    let medicamento2 : Medicamento = new Medicamento(this.idMedicamento,'Viagra','De vainas raras','que note mueras',0.8,10,'1');
    this.arregloMedicamentos.push(medicamento2);
    let medicamento3 : Medicamento = new Medicamento(this.idMedicamento,'Finalin','De vainas raras','que note mueras',1.5,10,'1');
    this.arregloMedicamentos.push(medicamento3);
    //execute action
  }
  clickCrear(nombre: string,composicion: string,usadoPara: string,gramosIngerir: number,numeroPastillas: number,fechaCaducidad: string) {
    this.numeroMedicamento = this.arregloMedicamentos.length;
    this.idMedicamento = this.numeroMedicamento +1;
    let medicamento1 : Medicamento = new Medicamento(this.idMedicamento,nombre,composicion,usadoPara,gramosIngerir,numeroPastillas,fechaCaducidad);
    this.arregloMedicamentos.push(medicamento1);
  }

}
