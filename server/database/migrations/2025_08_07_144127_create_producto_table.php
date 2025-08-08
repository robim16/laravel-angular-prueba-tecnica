<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->enum('estado', [
                \App\Models\Producto::ACTIVO,\App\Models\Producto::INACTIVO
            ])->default(\App\Models\Producto::ACTIVO);
            $table->foreignId('categoria_id')
                ->constrained('categorias')
                ->cascadeOnDelete();
            $table->foreignId('subcategoria_id')
                ->constrained('subcategorias')
                ->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('productos');
    }
};
