import { Component, OnInit } from '@angular/core';
//Import NavController , NavParams
import { NavController, NavParams, AlertController } from 'ionic-angular';
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
    public _listaDeseos:ListaDeseosService,
    public alertCtrl: AlertController) {

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

    let confirm = this.alertCtrl.create({
      title: this.lista.nombre,
      message: '¿Está seguro que desea eliminar la lista?',
      buttons: [
        'Cancelar',
        {
          text: 'Eliminar',
          handler: () => {
            //console.log('Agree clicked');
            this._listaDeseos.eliminarLista(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();

  }

}
