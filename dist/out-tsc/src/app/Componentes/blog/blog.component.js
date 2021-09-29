import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BlogComponent = class BlogComponent {
    constructor(api) {
        this.api = api;
        this.arrayblog = [];
    }
    ngOnInit() {
        this.Inicio();
    }
    Inicio() {
        this.api.Post("Blog", {
            "token": localStorage.getItem("token")
        }).subscribe(data => {
            console.log(data);
            this.arrayblog = data;
        }, err => {
            console.log(err);
        });
    }
    link(a) {
        window.open(a, "_blank");
    }
};
BlogComponent = __decorate([
    Component({
        selector: 'app-blog',
        templateUrl: './blog.component.html',
        styleUrls: ['./blog.component.css']
    })
], BlogComponent);
export { BlogComponent };
//# sourceMappingURL=blog.component.js.map