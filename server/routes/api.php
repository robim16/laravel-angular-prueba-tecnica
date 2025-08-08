<?php

use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\SubcategoriaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::resource('productos', ProductoController::class);

Route::resource('categorias', CategoriaController::class);

Route::resource('subcategorias', SubcategoriaController::class);