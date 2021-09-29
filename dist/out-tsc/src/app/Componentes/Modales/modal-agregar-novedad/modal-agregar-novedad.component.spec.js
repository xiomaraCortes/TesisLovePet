import { async, TestBed } from '@angular/core/testing';
import { ModalAgregarNovedadComponent } from './modal-agregar-novedad.component';
describe('ModalAgregarNovedadComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ModalAgregarNovedadComponent]
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
//# sourceMappingURL=modal-agregar-novedad.component.spec.js.map