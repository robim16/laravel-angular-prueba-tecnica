import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subcategory } from './model/subcategory';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  
  private baseUrl = environment.apiUrl;

  http = inject(HttpClient);

  constructor() {}

  createSubcategory(subcategory: Omit<Subcategory, 'id'>): Observable<Subcategory> {
    return this.http.post<Subcategory>(`${this.baseUrl}/subcategorias`, subcategory);
  }

  getSubcategories(): Observable<Subcategory[]> {
    return this.http.get<Subcategory[]>(`${this.baseUrl}/subcategorias`);
  }
  
}
