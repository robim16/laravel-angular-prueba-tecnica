import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SubcategoryService } from '../../subcategory-service';
import { Category } from '../../model/category';
import { CategoryService } from '../../category-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-subcategorias',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-subcategorias.html',
  styleUrl: './create-subcategorias.css'
})
export class CreateSubcategorias implements  OnInit {
  fb: FormBuilder = inject(FormBuilder);
  subcategoryService: SubcategoryService = inject(SubcategoryService)
  categoryService:CategoryService = inject(CategoryService)

  categorias: Category[] = [];

  categoryForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    categoria_id: ['', [Validators.required]],
    estado: ['', [Validators.required]],
  });

  successMessage = '';
  errorMessage = '';

  constructor() { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (data) => {
        this.categorias = data;
       
      },
      error: (err) => {
        console.log('Error al cargar categorías', err);
      }
    });
  }

  onSubmit(): void {
    if (this.categoryForm.valid) {
      const newCategory = { nombre: this.categoryForm.value.nombre!, 
        categoria_id: this.categoryForm.value.categoria_id!, estado: this.categoryForm.value.estado! };

      this.subcategoryService.createSubcategory(newCategory).subscribe({
        next: (res) => {
          this.successMessage = `Subcategoría creada : ${res.nombre}`;
          this.categoryForm.reset();
        },
        error: (err) => {
          this.errorMessage = 'Error al crear la Subcategoría';
          console.error(err);
        }
      });
    }
  }


}
