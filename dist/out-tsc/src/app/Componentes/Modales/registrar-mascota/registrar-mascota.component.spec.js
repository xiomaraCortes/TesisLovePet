import { async, TestBed } from '@angular/core/testing';
import { RegistrarMascotaComponent } from './registrar-mascota.component';
describe('RegistrarMascotaComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegistrarMascotaComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(RegistrarMascotaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=registrar-mascota.component.spec.js.map