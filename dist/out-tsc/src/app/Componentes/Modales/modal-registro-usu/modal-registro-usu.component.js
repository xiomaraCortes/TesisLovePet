import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ModalRegistroUsuComponent = class ModalRegistroUsuComponent {
    constructor(dialogRef, api, date, msn) {
        this.dialogRef = dialogRef;
        this.api = api;
        this.date = date;
        this.msn = msn;
        this.raidbarrios = [];
        this.raiddocumentos = [];
    }
    ngOnInit() {
        this.inicio();
    }
    inicio() {
        this.api.Get("barrios").subscribe(data => {
            console.log(data);
            this.raidbarrios = data;
        });
        this.api.Get("tipodoc").subscribe(data => {
            console.log(data);
            this.raiddocumentos = data;
        });
    }
    // Funcion para guardar información
    Guardar() {
        if (this.pass == this.pass2) {
            this.api.Post("CrearUsuario", {
                "email": this.email,
                "pass": this.pass,
                "documento": this.documento,
                "TipoDoc": this.TipoDoc,
                "Nombres": this.Nombres,
                "Apellidos": this.Apellidos,
                "telefono": this.Telefono,
                "Celular": this.Celular,
                "barrio": this.barrio,
                "direccion": this.direccion,
                "fechanacimiento": this.date.transform(this.fechanacimiento, 'yyyy-MM-dd'),
                "idgenero": this.idgenero
            }).subscribe(data => {
                console.log(data);
                var reg = data;
                if (data != null && reg.length == 1) {
                    console.log("emtra");
                    this.dialogRef.close();
                    this.msn.success("Usuario registrado con éxito.", "¡Atención!");
                }
            });
        }
        else {
            console.log("error");
            this.msn.warning("Las contraseñas no coinciden, por favor validar la información.", "¡Atención!");
        }
    }
};
ModalRegistroUsuComponent = __decorate([
    Component({
        selector: 'app-modal-registro-usu',
        templateUrl: './modal-registro-usu.component.html',
        styleUrls: ['./modal-registro-usu.component.css']
    })
], ModalRegistroUsuComponent);
export { ModalRegistroUsuComponent };
//# sourceMappingURL=modal-registro-usu.component.js.map