import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPacienteSeleccionadoComponent } from './card-paciente-seleccionado.component';

describe('CardPacienteSeleccionadoComponent', () => {
  let component: CardPacienteSeleccionadoComponent;
  let fixture: ComponentFixture<CardPacienteSeleccionadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPacienteSeleccionadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPacienteSeleccionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
