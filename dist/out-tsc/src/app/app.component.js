import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'LovePet';
        this.Estado = true;
    }
    ngOnInit() {
        if (!localStorage.getItem("token")) {
            this.Estado = false;
            console.log(this.Estado);
            this.router.navigate(['/login']);
        }
    }
    BtnPerfil() {
        this.router.navigate(['/Usuarios']);
    }
    BtnControl() {
        this.router.navigate(['/Dash/:id']);
    }
    BtnCerrar() {
        localStorage.clear();
        this.router.navigate(['/login']);
        location.reload();
    }
    BtnMascotas() {
        this.router.navigate(['/Mascotas']);
    }
    BtnBlog() {
        this.router.navigate(['/Blog']);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map