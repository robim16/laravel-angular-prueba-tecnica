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
        Schema::create('subcategorias', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->enum('estado', [
                \App\Models\Subcategoria::ACTIVA,\App\Models\Subcategoria::INACTIVA
            ])->default(\App\Models\Subcategoria::ACTIVA);
            $table->integer('total_productos')->default(0);
            $table->foreignId('categoria_id')
                ->constrained('categorias')
                ->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subcategorias');
    }
};
