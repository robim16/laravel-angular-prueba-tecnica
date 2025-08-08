import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './model/category';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = environment.apiUrl;

  http = inject(HttpClient);

  constructor() {}

  createCategory(category: Omit<Category, 'id'>): Observable<Category> {
    return this.http.post<Category>(`${this.baseUrl}/categorias`, category);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/categorias`);
  }
}
