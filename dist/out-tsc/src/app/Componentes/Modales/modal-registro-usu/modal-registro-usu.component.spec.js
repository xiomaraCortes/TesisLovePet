import { async, TestBed } from '@angular/core/testing';
import { ModalRegistroUsuComponent } from './modal-registro-usu.component';
describe('ModalRegistroUsuComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ModalRegistroUsuComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ModalRegistroUsuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=modal-registro-usu.component.spec.js.map