import { Routes } from '@angular/router';
import { Categorias } from './categorias/categorias/categorias';
import { CreateCategorias } from './categorias/create-categorias/create-categorias';
import { Subcategorias } from './subcategorias/subcategorias/subcategorias';
import { CreateSubcategorias } from './subcategorias/create-subcategorias/create-subcategorias';

export const routes: Routes = [
    {
        path: 'categorias',
        component: Categorias
    },
    {
        path: 'categorias/create',
        component: CreateCategorias
    },
    {
        path: 'subcategorias',
        component: Subcategorias
    },
    {
        path: 'subcategorias/create',
        component: CreateSubcategorias
    },
];
