import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carrusel',
  styleUrls: ['./carrusel.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  template:`
    <div id="carrusel1" class="carousel slide" data-ride="carousel">
      <!--
      <ol class="carousel-indicators">
        <li data-target="#carrusel1" data-slide-to="0" class="active"></li>
        <li data-target="#carrusel1" data-slide-to="1"></li>
      </ol>
      -->
      <div class="carousel-inner" role="listbox">
        
        <div class="carousel-item active">
          <img class="d-block w-100" src="{{imagen1}}" alt="First Slide" style="width:600px;height:350px;">
          <div class="carousel-caption">
            <h5>Lista de Pacientes</h5>
            <p>Nombres</p>
          </div>
        </div>
        
        <div class="carousel-item active" *ngFor="let paciente of arregloPacientes" >
          <img class="d-block w-100" src="{{imagen2}}" alt="Second Slide" style="width:600px;height:350px;">
          <div  class="carousel-caption">
            <h5>{{paciente.nombres}} {{paciente.apellidos}}</h5>
            <p>{{paciente.fechaNacimiento}}</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carrusel1" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carrusel1" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
`
})

export class CarruselComponent implements OnInit {
  @Input() arregloPacientes;

  imagen1 = "http://nichegamer.s3-us-west-2.amazonaws.com/wp-content/uploads/2017/12/08112436/berserk-12-08-17-1.jpg";
  imagen2 = "http://i.imgur.com/Esiq2FT.jpg";

  constructor() { }

  ngOnInit() {
  }

}
