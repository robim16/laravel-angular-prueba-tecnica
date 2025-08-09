import { Component, inject, OnInit } from '@angular/core';
import { Producto } from '../../model/producto';
import { ProductoService } from '../../producto-service';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos implements OnInit {

  subcategoryService: ProductoService = inject(ProductoService)

  productos: Producto[] = [];
  loading: boolean = true;
  error: string = '';

  constructor() { }

  ngOnInit(): void {
    this.subcategoryService.getSubcategories().subscribe({
      next: (data) => {
        this.productos = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar productos';
        this.loading = false;
      }
    });
  }

}
