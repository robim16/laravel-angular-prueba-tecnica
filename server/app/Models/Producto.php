<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Producto extends Model
{
    const ACTIVO = 'activo';
    const INACTIVO = 'inactivo';

    protected $fillable = ['nombre', 'estado', 'categoria_id', 'subcategoria_id'];

    public function subcategoria(): BelongsTo
    {
        return $this->belongsTo(Subcategoria::class);
    }


    public function categoria(): BelongsTo
    {
        return $this->belongsTo(Categoria::class);
    }
}
