import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ApiRestService = class ApiRestService {
    constructor(http) {
        this.http = http;
        this.urlapi = "http://localhost:3000/";
    }
    Post(action, json) {
        var url = this.urlapi + action;
        return this.http.post(url, json);
    }
    Get(action) {
        var url = this.urlapi + action;
        return this.http.get(url);
    }
};
ApiRestService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiRestService);
export { ApiRestService };
//# sourceMappingURL=api-rest.service.js.map