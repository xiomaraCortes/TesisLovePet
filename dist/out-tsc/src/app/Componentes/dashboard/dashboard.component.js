import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { RegistrarMascotaComponent } from '../Modales/registrar-mascota/registrar-mascota.component';
import { Chart } from 'chart.js';
let DashboardComponent = class DashboardComponent {
    constructor(router, dialog, api, msn) {
        this.router = router;
        this.dialog = dialog;
        this.api = api;
        this.msn = msn;
        this.raidmascotas = [];
        this.chart = [];
        this.raidnombre = [];
        this.raidnovedades = [];
    }
    ngOnInit() {
        this.BuscarMascotas();
    }
    //Agregra mascota
    Agregar() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        const dialogRef = this.dialog.open(RegistrarMascotaComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            location.reload();
        });
    }
    //Funcion BuscarMascotas
    BuscarMascotas() {
        this.api.Post("BuscarMascotas", {
            "token": localStorage.getItem("token")
        }).subscribe(data => {
            var mas = data;
            this.raidmascotas = data;
            this.totalmas = mas.length;
            const nov = [];
            const nom = [];
            console.log(nom, nov);
            for (let row of this.raidmascotas) {
                nov.push(row.Novedades);
            }
            for (let row of this.raidmascotas) {
                nom.push(row.Nombre);
            }
            //Funcion para la grafica
            this.chart = new Chart('canvas', {
                type: 'polarArea',
                data: {
                    labels: nom,
                    datasets: [{
                            data: nov,
                            backgroundColor: [
                                '#4D80CC', '#33f8ff', '#33ccff', '#336dff', '#336dff',
                                '#6666FF', '#3366E6', '#999966', '#99FF99', '#B34D4D',
                                '#6666FF', '#809900', '#E6B3B3', '#6680B3', '#66991A',
                                '#e640e0', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
                                '#e640e0', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
                                '#e640e0', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
                                '#e640e0', '#33991A', '#CC9999', '#B3B31A', '#00E680',
                                '#e640e0', '#809980', '#E6FF80', '#1AFF33', '#999933',
                                '#e640e0', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
                                '#e640e0', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
                            ],
                            fill: true,
                            borderWidth: 1
                        }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    plugins: {
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                        }
                    },
                    responsive: true,
                }
            });
            console.log(this.chart);
        });
    }
    //Redirecionar tarjeta perfil mascota
    Mascota(masco) {
        this.router.navigate(['/Mascotas/' + masco]);
    }
    //Redirecionar tarjeta veterinarias
    Vete() {
        this.router.navigate(['/Vete']);
    }
    //Redirecionar tarjeta blog
    Blog() {
        this.router.navigate(['/Blog']);
    }
    //Borrar mascota
    borrar(id) {
        console.log(id);
        this.api.Post("EliminarMascota", {
            "token": localStorage.getItem("token"),
            "IdMascota": id
        }).subscribe(data => {
            this.BuscarMascotas();
            this.msn.success("Se eliminó con exito");
        }, err => {
            this.msn.warning("No se pudo eliminar");
        });
    }
};
DashboardComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map