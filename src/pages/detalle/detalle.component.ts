import { Component, OnInit } from '@angular/core';
//Import NavController , NavParams
import { NavController, NavParams } from 'ionic-angular';
//Import Lista, ListaItem
import { Lista, ListaItem } from '../../app/clases/index';
//Import ListaDeseosService
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  idx:number;
  lista:Lista;

  constructor( public navCtrl:NavController,
    public navParams:NavParams,
    public _listaDeseos:ListaDeseosService) {

    //console.log(this.navParams);
    this.idx =  this.navParams.get("idx");
    this.lista =  this.navParams.get("lista");

  }

  ngOnInit() {}

  actualizar( item:ListaItem ){
    item.completado = !item.completado;
    this._listaDeseos.actualizarData();
  }

  borrarItem(){
    console.log("Borrar Item");
  }

}
