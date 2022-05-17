import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UsuariosComponent = class UsuariosComponent {
    constructor(router, dialog, api, date, msn) {
        this.router = router;
        this.dialog = dialog;
        this.api = api;
        this.date = date;
        this.msn = msn;
        // Variables informacion ususario
        this.raidbarrios = [];
        this.raiddocumentos = [];
        this.Estado = true;
        this.pass = "ninguna";
        this.pass2 = "ninguna";
        this.data = [];
    }
    ngOnInit() {
        this.Eguardar = true;
        this.Inicio();
    }
    // Traer informacion segun el token
    Inicio() {
        this.api.Get("barrios").subscribe(data => {
            this.raidbarrios = data;
        });
        this.api.Get("tipodoc").subscribe(data => {
            this.raiddocumentos = data;
        });
        this.data = JSON.parse(localStorage.getItem("user"));
        console.log(this.data);
        this.Nombres = this.data["Nombre"];
        this.Apellidos = this.data["Apellidos"];
        this.TipoDoc = this.data["Id_Tipo_Documento"];
        this.documento = this.data["N_Identidicacion"];
        this.fechanacimiento = this.data["FechaNacimiento"];
        this.email = this.data["Email"];
        this.Telefono = this.data["Telefono"];
        this.Celular = this.data["Celular"];
        this.barrio = this.data["IdBarrio"];
        this.direccion = this.data["Direccion"];
        this.barrio2 = this.data["Barrio"];
    }
    // Funcion boton editar
    Editar() {
        this.Eguardar = null;
        this.Eeditar = true;
        this.Estado = false;
    }
    // Funcion boton guardar
    Guardar() {
        var json = {
            "token": localStorage.getItem("token"),
            "Email": this.email,
            "Pass": this.pass,
            "N_Identificacion": this.documento,
            "Id_Tipo_Documento": this.TipoDoc,
            "Nombre": this.Nombres,
            "Apellidos": this.Apellidos,
            "Telefono": this.Telefono,
            "Celular": this.Celular,
            "IdBarrio": this.barrio,
            "Direccion": this.direccion,
            "FechaNacimiento": this.date.transform(this.fechanacimiento, 'yyyy-MM-dd'),
            "IdGenero": this.genero
        };
        if (this.pass == "ninguna" && this.pass2 == "ninguna") {
            this.api.Post("ActualizarUsuario", json).subscribe(data => {
                console.log(data);
                localStorage.setItem("user", JSON.stringify(data[0]));
                this.Eguardar = true;
                this.Eeditar = null;
                this.Estado = true;
                this.msn.success("Datos cambiados con exito.");
            }, err => {
                this.msn.error(err.error, "Atención!");
            });
        }
        else if (this.pass == this.pass2 && this.pass != "ninguna") {
            this.api.Post("ActualizarUsuarioPass", json).subscribe(data => {
                console.log(data);
                localStorage.setItem("user", JSON.stringify(data[0]));
                this.Eguardar = true;
                this.Eeditar = null;
                this.Estado = true;
                this.msn.success("Datos cambiados con exito.");
            }, err => {
                this.msn.error(err.error, "Atención!");
            });
        }
        location.reload();
    }
};
UsuariosComponent = __decorate([
    Component({
        selector: 'app-usuarios',
        templateUrl: './usuarios.component.html',
        styleUrls: ['./usuarios.component.css']
    })
], UsuariosComponent);
export { UsuariosComponent };
//# sourceMappingURL=usuarios.component.js.map