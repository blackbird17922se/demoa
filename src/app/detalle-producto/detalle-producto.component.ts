import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../compartidos/datos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})


// 1. implementar OnInit y agregar el metodo ngOnInit
export class DetalleProductoComponent implements OnInit{

  public producto: any = {};

  // 2. pasamos al constructor un ActivatedRoute
  // 3. y le inyectamos el servicio
  constructor(private ruta:ActivatedRoute, private dataService: DatosService){}

  


  ngOnInit(): void {
    //3. con la propiedad usamos snapshot.paramMap.get('  NOMBRE DEL PARAMETRO  ')
      const productId = this.ruta.snapshot.paramMap.get('id');
      console.log(productId);
      
      // colocamos este destructuring [] para q mande los datos recibidos por id a la vista
      [this.producto] = this.dataService.getDatoById(Number(productId));

      console.log('this.producto', this.producto);
  }

}
