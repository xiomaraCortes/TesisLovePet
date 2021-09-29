import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { ModalRegistroUsuComponent } from '../Modales/modal-registro-usu/modal-registro-usu.component';
let LoginComponent = class LoginComponent {
    constructor(router, dialog, api, msn) {
        this.router = router;
        this.dialog = dialog;
        this.api = api;
        this.msn = msn;
    }
    ngOnInit() {
        if (localStorage.getItem("token")) {
            var user = JSON.parse(localStorage.getItem("user"));
            this.router.navigate(['/Dash/' + user["IdUsuario"]]);
        }
    }
    // Funcion para el login
    Login() {
        this.api.Post("auth", {
            "email": this.email,
            "pass": this.pass
        }).subscribe(data => {
            console.log(data);
            localStorage.setItem("token", data[0]["token"]);
            localStorage.setItem("user", JSON.stringify(data[1][0]));
            var user = JSON.parse(localStorage.getItem("user"));
            this.router.navigate(['/Dash/' + user["IdUsuario"]]);
            location.reload();
        }, err => {
            console.log(err);
            this.msn.warning(err.error, "Atención!");
        });
    }
    //Funcion crear un usuario
    Crear() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        const dialogRef = this.dialog.open(ModalRegistroUsuComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map