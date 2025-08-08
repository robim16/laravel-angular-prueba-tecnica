import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../category-service';
import { Category } from '../../model/category';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categorias',
  imports: [RouterLink],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class Categorias implements OnInit {

  categoryService:CategoryService = inject(CategoryService)

  categorias: Category[] = [];
  loading: boolean = true;
  error: string = '';

  constructor() {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (data) => {
        this.categorias = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar categorías';
        this.loading = false;
      }
    });
  }
}
