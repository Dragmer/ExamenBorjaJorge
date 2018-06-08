import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { FormIngresoComponent } from './form-ingreso/form-ingreso.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CardPacienteComponent } from './card-paciente/card-paciente.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';    //api
import {InputTextModule} from 'primeng/inputtext';
import {FormMedicamentoComponent } from './form-medicamento/form-medicamento.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CardPacienteSeleccionadoComponent } from './card-paciente-seleccionado/card-paciente-seleccionado.component';
import { TablaMedicamentosComponent } from './tabla-medicamentos/tabla-medicamentos.component';


@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    FormIngresoComponent,
    CardPacienteComponent,
    FormMedicamentoComponent,
    CardPacienteSeleccionadoComponent,
    TablaMedicamentosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatButtonToggleModule,
    InputTextModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
