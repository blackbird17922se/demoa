import { Component, OnInit } from '@angular/core';
import { DatosService } from '../compartidos/datos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit{

  public productos: any = [];

  constructor(private dataService: DatosService){}

  ngOnInit(): void {
    this.productos = this.dataService.getDatos();
      
  }

}
