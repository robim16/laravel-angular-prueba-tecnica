import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../../category-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-categorias',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-categorias.html',
  styleUrl: './create-categorias.css'
})
export class CreateCategorias {
  fb: FormBuilder = inject(FormBuilder);
  categoryService:CategoryService = inject(CategoryService)

  categoryForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    estado: ['', [Validators.required]],
  });

  successMessage = '';
  errorMessage = '';

  constructor() {}

  onSubmit(): void {
    if (this.categoryForm.valid) {
      const newCategory = { nombre: this.categoryForm.value.nombre!, estado:  this.categoryForm.value.estado!};

      this.categoryService.createCategory(newCategory).subscribe({
        next: (res) => {
          this.successMessage = `Categoría creada : ${res}`;
          this.categoryForm.reset();
        },
        error: (err) => {
          this.errorMessage = 'Error al crear la categoría';
          console.error(err);
        }
      });

    }
  }

}
