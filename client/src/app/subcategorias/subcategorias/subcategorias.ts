import { Component, inject } from '@angular/core';
import { SubcategoryService } from '../../subcategory-service';
import { Subcategory } from '../../model/subcategory';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-subcategorias',
  imports: [RouterLink],
  templateUrl: './subcategorias.html',
  styleUrl: './subcategorias.css'
})
export class Subcategorias {
  subcategoryService: SubcategoryService = inject(SubcategoryService)

  subcategorias: Subcategory[] = [];
  loading: boolean = true;
  error: string = '';

  constructor() { }

  ngOnInit(): void {
    this.subcategoryService.getSubcategories().subscribe({
      next: (data) => {
        this.subcategorias = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar subcategorías';
        this.loading = false;
      }
    });
  }
}
