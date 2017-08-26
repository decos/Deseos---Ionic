import { Pipe, PipeTransform } from '@angular/core';
// Import Class Lista
import { Lista } from '../clases/listas';

@Pipe({
  name: 'pendientes',
  pure: false // es como un ajax para que cambie en caliente la info
})
export class PendientesPipe implements PipeTransform {
  //transform(value: type, args: any[]): type {
  transform(listas:Lista[], estado:boolean = false): Lista[] {

    let nuevaLista:Lista[] = [];

    for(let lista of listas){

      if(lista.terminada == estado){
        nuevaLista.push(lista);
      }

    }

    return nuevaLista;
  }
}
