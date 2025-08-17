import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoService } from '../../producto-service';
import { CommonModule } from '@angular/common';
import { Subcategory } from '../../model/subcategory';
import { SubcategoryService } from '../../subcategory-service';

@Component({
  selector: 'app-crear-productos',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crear-productos.html',
  styleUrl: './crear-productos.css'
})
export class CrearProductos implements OnInit {

  fb: FormBuilder = inject(FormBuilder);
  productoService:ProductoService = inject(ProductoService)
  subcategoryService = inject(SubcategoryService)

  categorias: Subcategory[] = [];

  productoForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    subcategoria_id: ['', [Validators.required]],
    estado: ['', [Validators.required]],
  });

  successMessage = '';
  errorMessage = '';

  constructor() {}

  ngOnInit(): void {
    this.subcategoryService.getSubcategories().subscribe({
      next: (data) => {
        this.categorias = data;
      },
      error: (err) => {
        console.log('Error al cargar subcategorías', err);
      }
    });
  }

  onSubmit(): void {
    if (this.productoForm.valid) {
      const newProducto = { nombre: this.productoForm.value.nombre!, subcategoria_id: this.productoForm.value.subcategoria_id!,  estado:  this.productoForm.value.estado!};

      this.productoService.createProducto(newProducto).subscribe({
        next: (res) => {
          this.successMessage = `Producto creado : ${res}`;
          this.productoForm.reset();
        },
        error: (err) => {
          this.errorMessage = 'Error al crear el producto';
          console.error(err);
        }
      });

    }
  }

}
