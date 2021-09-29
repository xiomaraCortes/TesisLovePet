import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let ModalAgregarNovedadComponent = class ModalAgregarNovedadComponent {
    constructor(api, activateroute, msn, dialogRef, data) {
        this.api = api;
        this.activateroute = activateroute;
        this.msn = msn;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.Inicio();
        console.log(this.data);
    }
    Inicio() {
        this.api.Post("TipoNovedades", {
            "token": localStorage.getItem("token"),
        }).subscribe(data => {
            console.log(data);
            this.raidnovedades = data;
        });
    }
    // Funcion guardar datos
    Guardar() {
        var json = {
            "token": localStorage.getItem("token"),
            "IdMascota": this.data,
            "IdNovedad": this.novedad,
            "Descripcion": this.descripcion,
            "Observacion": this.observacion
        };
        this.api.Post("NuevaNovedad", json).subscribe(data => {
            var nov = data;
            if (nov != null && nov.length == 1) {
                this.msn.success("Novedad generada con exito.");
                this.dialogRef.close();
            }
        }, err => {
            this.msn.warning(err.error, "Atención!");
        });
    }
};
ModalAgregarNovedadComponent = __decorate([
    Component({
        selector: 'app-modal-agregar-novedad',
        templateUrl: './modal-agregar-novedad.component.html',
        styleUrls: ['./modal-agregar-novedad.component.css']
    }),
    __param(4, Inject(MAT_DIALOG_DATA))
], ModalAgregarNovedadComponent);
export { ModalAgregarNovedadComponent };
//# sourceMappingURL=modal-agregar-novedad.component.js.map