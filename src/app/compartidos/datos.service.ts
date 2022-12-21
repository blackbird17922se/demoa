import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  // AQUI AGREGAMOS LOS DATOS DE LA APP
  private datos = [
    {
      id: 1,
      nombre: 'zapatos xe',
      categoria: 'calzado',
      descripcion: 'zaatos feos',
      precio: 45550
    },
    {
      id: 2,
      nombre: 'huevos',
      categoria: 'alimento',
      descripcion: 'fritos o revueltos',
      precio: 500
    },
    {
      id: 3,
      nombre: 'Coca-Cola',
      categoria: 'bebida',
      descripcion: 'para aflojar tuercas',
      precio: 2000
    }
  ]


  // CREAMOS METODOS
  getDatos(){
    return this.datos
  }

  getDatoById(id: number){
    console.log(typeof id);
    let datosx = this.datos.filter( (producto) => producto.id === id );
    console.log(datosx);
    
    return this.datos.filter( (producto) => producto.id === id );
  }


}
