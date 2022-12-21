import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { Error404Component } from './error404/error404.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductosComponent } from './productos/productos.component';

// Aqui ponemos nuestras rutas
// path: ruta o url
// component: nombre del componente
const routes: Routes = [

  // Cuando dejamos path vacio, indicamos q es el home
  {path: '', component: HomePageComponent},

  {path: 'productos', component: ProductosComponent},
  {path: 'productos/:id', component: DetalleProductoComponent},

  // Cuando ponemos **, quiere decir q es cuando no encuentra la ruta, importante q este de ultimas
  {path: '**', component: Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
