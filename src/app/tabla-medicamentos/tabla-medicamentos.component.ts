import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tabla-medicamentos',
  templateUrl: './tabla-medicamentos.component.html',
  styleUrls: ['./tabla-medicamentos.component.css']
})
export class TablaMedicamentosComponent implements OnInit {
  @Input() arregloMedicamentos;

  constructor() { }

  ngOnInit() {
  }

}
