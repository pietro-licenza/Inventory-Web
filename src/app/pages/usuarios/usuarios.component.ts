import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/services/CategoriaService';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/UsuarioService';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [] 

  constructor(
    private usuarioService:UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.usuarioService.getUsuarios()
    .subscribe(cats => {
      
      this.usuarios = cats.map((c:any) => {
        let user = new Usuario()
        user.id = c.id
        user.email = c.email
        user.name = c.name
        user.role = c.role
        return user
      })
      
    })
    
  }

  addUsuario() {
    this.router.navigate(['/add-usuario'])
  }

  editCategoria(categoria: Categoria) {
    this.router.navigate(['/add-categoria'], { state: { categoria }})
  }

  resetPwd(usuario:any) {
    this.usuarioService.resetPwd(usuario)
    .subscribe(prod => {
      alert("Senha alterada para padrão: teste123")
      this.router.navigate(['/usuarios'])
    },
    err => {
      if(err.status == 401) {
        alert("Sessão expirada")
        this.router.navigate(['/login'])
      } else {
        alert("Ocorreu um erro")
        alert(err.message)
      }
    })
  }
}
