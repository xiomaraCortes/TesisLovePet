import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let FiltroPipe = class FiltroPipe {
    transform(values, Busqueda) {
        if (!values || !Busqueda) {
            return values;
        }
        return values.filter(item => {
            return Object.keys(item).some(key => {
                return String(item[key]).toLowerCase().includes(Busqueda.toLowerCase());
            });
        });
    }
};
FiltroPipe = __decorate([
    Pipe({
        name: 'filtro'
    })
], FiltroPipe);
export { FiltroPipe };
//# sourceMappingURL=filtro.pipe.js.map