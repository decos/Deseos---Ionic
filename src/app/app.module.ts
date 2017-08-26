import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//import { AboutPage } from '../pages/about/about';
//import { ContactPage } from '../pages/contact/contact';
//import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
//Import Pendientes
import { PendientesComponent } from '../pages/pendientes/pendientes.component';
//Import Terminados
import { TerminadosComponent } from '../pages/terminados/terminados.component';
//Import Agregar
import { AgregarComponent } from '../pages/agregar/agregar.component';
//Import Servicios
import { ListaDeseosService } from './services/lista-deseos.service';
//Import Pipe
import { PlaceholderPipe } from './pipes/placeholder.pipe';
//Import DetalleComponent
import { DetalleComponent } from '../pages/detalle/detalle.component';
//Import Pipe
import { PendientesPipe } from './pipes/pendientes.pipe';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    //AboutPage,
    //ContactPage,
    //HomePage,
    TabsPage,
    PendientesComponent,  //Added
    TerminadosComponent,  //Added
    AgregarComponent, //Added
    DetalleComponent, //Added
    PlaceholderPipe,  //Added Pipe
    PendientesPipe    //Added Pipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //AboutPage,
    //ContactPage,
    //HomePage,
    TabsPage,
    PendientesComponent, //Added
    TerminadosComponent, //Added
    DetalleComponent, //Added
    AgregarComponent, //Added
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaDeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
