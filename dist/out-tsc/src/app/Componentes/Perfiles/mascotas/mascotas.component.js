import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { ModalAgregarNovedadComponent } from '../../Modales/modal-agregar-novedad/modal-agregar-novedad.component';
let MascotasComponent = class MascotasComponent {
    constructor(date, api, msn, activateroute, router, dialog) {
        this.date = date;
        this.api = api;
        this.msn = msn;
        this.activateroute = activateroute;
        this.router = router;
        this.dialog = dialog;
        // Variables de informacion mascotas
        this.raidnovedades = [];
        this.id = this.activateroute.snapshot.paramMap.get("id");
        this.estado = true;
        this.fecha = this.date.transform(new Date(), 'yyyy');
    }
    ngOnInit() {
        this.Inicio();
    }
    // Verificacion que exista un token y traerme informacionde est
    Inicio() {
        this.api.Get("razas").subscribe(data => {
            console.log(data);
            this.raidrazas = data;
        });
        this.api.Get("colores").subscribe(data => {
            console.log(data);
            this.raidcolores = data;
        });
        this.api.Post("BuscarMascota", {
            "token": localStorage.getItem("token"),
            "IdMascota": this.id
        }).subscribe(data => {
            console.log(data);
            if (data != null) {
                this.nombre = data[0]["Nombre"];
                this.documento = data[0]["Documento"];
                this.fechanacimiento = data[0]["Fechanacimiento"];
                this.raza = data[0]["Raza"];
                this.genero = data[0]["Genero"];
                this.color = data[0]["Color"];
                this.estatura = data[0]["Altura"];
                this.peso = data[0]["Peso"];
                var fe1 = this.date.transform(this.fechanacimiento, 'yyyy');
                this.edad = this.fecha - fe1;
                this.barrio = data[0]["Barrio"];
                this.direccion = data[0]["Direccion"];
            }
            else {
            }
        });
    }
    // Funcion editar
    Editar() {
        this.estado = false;
        this.Eeditar = true;
        this.Eguardar = true;
    }
    tabClick(event) {
        if (event == 1) {
            this.api.Post("ListarNovedad", {
                "token": localStorage.getItem("token"),
                "IdMascota": this.id
            }).subscribe(data => {
                console.log(data);
                this.raidnovedades = data;
            });
        }
    }
    // Funcion Guardar
    Guardar() {
        var json = {
            "token": localStorage.getItem("token"),
            "IdMascota": this.id,
            "nombre": this.nombre,
            "fechanaciomiento": this.date.transform(this.fechanacimiento, 'yyyy-MM-dd'),
            "raza": this.raza,
            "genero": this.genero,
            "color": this.color,
            "estatura": this.estatura,
            "peso": this.peso
        };
        this.api.Post("ActualizarMascota", json).subscribe(data => {
            console.log(data);
            var inf = data;
            if (inf != null && inf.length == 1) {
                this.msn.success("Datos guardados correctamente.");
                this.estado = true;
                this.Eeditar = null;
                this.Eguardar = null;
            }
        });
        this.Inicio();
    }
    // Funcion para agregar novedad mascota
    AgregarNov() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = this.id;
        const dialogRef = this.dialog.open(ModalAgregarNovedadComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
};
MascotasComponent = __decorate([
    Component({
        selector: 'app-mascotas',
        templateUrl: './mascotas.component.html',
        styleUrls: ['./mascotas.component.css']
    })
], MascotasComponent);
export { MascotasComponent };
//# sourceMappingURL=mascotas.component.js.map