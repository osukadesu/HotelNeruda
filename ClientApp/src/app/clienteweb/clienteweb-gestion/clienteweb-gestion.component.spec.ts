import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientewebGestionComponent } from './clienteweb-gestion.component';

describe('ClientewebGestionComponent', () => {
  let component: ClientewebGestionComponent;
  let fixture: ComponentFixture<ClientewebGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientewebGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientewebGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
