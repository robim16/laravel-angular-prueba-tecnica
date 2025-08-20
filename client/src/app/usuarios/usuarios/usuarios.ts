import { Component, inject, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuario-service';
import { Usuario } from '../../model/usuario';


@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class Usuarios implements OnInit {

  usuarioService: UsuarioService = inject(UsuarioService)

  usuarios: Usuario[] = [];
  loading: boolean = true;
  error: string = '';

  constructor() { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar usuarios';
        this.loading = false;
      }
    });
  }

}
