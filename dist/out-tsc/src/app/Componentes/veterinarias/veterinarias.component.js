import { __decorate } from "tslib";
import { Component } from '@angular/core';
let VeterinariasComponent = class VeterinariasComponent {
    constructor(api) {
        this.api = api;
        this.veterinarias = [];
    }
    ngOnInit() {
        this.Inicio();
    }
    Inicio() {
        this.api.Post("Veterinarias", {
            "token": localStorage.getItem("token")
        }).subscribe(data => {
            console.log(data);
            this.veterinarias = data;
        });
    }
    ubicacion(ubi) {
        console.log("ubicacion");
        window.open(ubi, "_blank");
    }
};
VeterinariasComponent = __decorate([
    Component({
        selector: 'app-veterinarias',
        templateUrl: './veterinarias.component.html',
        styleUrls: ['./veterinarias.component.css']
    })
], VeterinariasComponent);
export { VeterinariasComponent };
//# sourceMappingURL=veterinarias.component.js.map