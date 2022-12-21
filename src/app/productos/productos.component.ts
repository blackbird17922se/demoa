import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  //Definimos una propiedad
  /**
   * usuarios
   */
  public usuarios = [
    {
      nombre: 'David',
      ciudad: 'Barcona'
    },
    {
      nombre: 'Dominic',
      ciudad: ''
    },
    {
      nombre: 'Maria',
      ciudad: 'Madrid'
    }
  ]

}
