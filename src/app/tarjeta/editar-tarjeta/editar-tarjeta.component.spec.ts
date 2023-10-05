import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTarjetaComponent } from './editar-tarjeta.component';

describe('EditarTarjetaComponent', () => {
  let component: EditarTarjetaComponent;
  let fixture: ComponentFixture<EditarTarjetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarTarjetaComponent]
    });
    fixture = TestBed.createComponent(EditarTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
