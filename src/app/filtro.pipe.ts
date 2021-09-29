import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(values:any[], Busqueda:any): any {
    if(!values || !Busqueda){
      return values;
    }
    return values.filter(item => {
      return Object.keys(item).some(key => {
        return String(item[key]).toLowerCase().includes(Busqueda.toLowerCase());
      });
    });
  }

}
