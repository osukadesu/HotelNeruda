import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientewebConsultaComponent } from './clienteweb-consulta.component';

describe('ClientewebConsultaComponent', () => {
  let component: ClientewebConsultaComponent;
  let fixture: ComponentFixture<ClientewebConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientewebConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientewebConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
