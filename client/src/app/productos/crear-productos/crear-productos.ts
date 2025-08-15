import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoService } from '../../producto-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-productos',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crear-productos.html',
  styleUrl: './crear-productos.css'
})
export class CrearProductos {

  fb: FormBuilder = inject(FormBuilder);
  productoService:ProductoService = inject(ProductoService)

  productoForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    estado: ['', [Validators.required]],
  });

  successMessage = '';
  errorMessage = '';

  constructor() {}

  onSubmit(): void {
    if (this.productoForm.valid) {
      const newProducto = { nombre: this.productoForm.value.nombre!, estado:  this.productoForm.value.estado!};

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
