<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Subcategoria extends Model
{
    const ACTIVA = 'activa';
    const INACTIVA = 'inactiva';

    protected $fillable = ['nombre', 'estado', 'categoria_id'];

    public function categoria(): BelongsTo
    {
        return $this->belongsTo(Categoria::class);
    }
}
