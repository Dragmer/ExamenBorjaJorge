import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  styleUrls: ['./carrusel.component.css'],
  template:`
    <div id="carrusel1" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carrusel1" data-slide-to="0" class="active"></li>
        <li data-target="#carrusel1" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <img class="d-block w-100" src="http://nichegamer.s3-us-west-2.amazonaws.com/wp-content/uploads/2017/12/08112436/berserk-12-08-17-1.jpg" alt="First Slide">
          <div class="carousel-caption">
            <h5>11111</h5>
            <p>1111</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="http://nichegamer.s3-us-west-2.amazonaws.com/wp-content/uploads/2017/12/08112436/berserk-12-08-17-1.jpg" alt="Second Slide">
          <div class="carousel-caption">
            <h5>2222</h5>
            <p>2222</p>
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
  urlImagen1 = "http://nichegamer.s3-us-west-2.amazonaws.com/wp-content/uploads/2017/12/08112436/berserk-12-08-17-1.jpg";
  urlImagen2 = "http://i.imgur.com/Esiq2FT.jpg";
  imagen1 = this.urlImagen1;
  imagen2 = this.urlImagen2;
  constructor() { }

  ngOnInit() {
  }

}
