import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RegistrarMascotaComponent = class RegistrarMascotaComponent {
    constructor(dialogRef, date, api, msn) {
        this.dialogRef = dialogRef;
        this.date = date;
        this.api = api;
        this.msn = msn;
    }
    ngOnInit() {
        this.Inicio();
    }
    Inicio() {
        this.api.Get("razas").subscribe(data => {
            console.log(data);
            this.raidrazas = data;
        });
        this.api.Get("colores").subscribe(data => {
            console.log(data);
            this.raidcolores = data;
        });
    }
    // Funcion guardar datos modal
    Guardar() {
        var json = {
            "token": localStorage.getItem("token"),
            "nombre": this.nombre,
            "documento": this.documento,
            "fechanaciomiento": this.date.transform(this.fechanaciomiento, 'yyyy-MM-dd'),
            "raza": this.raza,
            "genero": this.genero,
            "color": this.color,
            "estatura": this.estatura,
            "peso": this.peso
        };
        this.api.Post("NuevaMascota", json).subscribe(data => {
            var mas = data;
            if (mas != null && mas.length == 1) {
                this.msn.success("Mascota registrada con éxito.", "¡Atención!");
                this.dialogRef.close();
            }
            else {
                this.msn.warning("Error al registrar la mascota, Contáctese con un administrador", "¡Atención!");
            }
        });
    }
};
RegistrarMascotaComponent = __decorate([
    Component({
        selector: 'app-registrar-mascota',
        templateUrl: './registrar-mascota.component.html',
        styleUrls: ['./registrar-mascota.component.css']
    })
], RegistrarMascotaComponent);
export { RegistrarMascotaComponent };
//# sourceMappingURL=registrar-mascota.component.js.map