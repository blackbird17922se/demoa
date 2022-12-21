import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Error404Component } from './error404/error404.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    HomePageComponent,
    Error404Component,
    DetalleProductoComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
