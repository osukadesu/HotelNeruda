import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientewebRegistroComponent } from './clienteweb-registro.component';

describe('ClientewebRegistroComponent', () => {
  let component: ClientewebRegistroComponent;
  let fixture: ComponentFixture<ClientewebRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientewebRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientewebRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
