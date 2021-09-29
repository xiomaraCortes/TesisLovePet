import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarNovedadComponent } from './modal-agregar-novedad.component';

describe('ModalAgregarNovedadComponent', () => {
  let component: ModalAgregarNovedadComponent;
  let fixture: ComponentFixture<ModalAgregarNovedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAgregarNovedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAgregarNovedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
