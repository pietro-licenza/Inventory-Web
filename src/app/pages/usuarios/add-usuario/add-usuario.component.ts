import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { Usuario } from 'src/app/models/Usuario';
import { CategoriaService } from 'src/app/services/CategoriaService';
import { UsuarioService } from 'src/app/services/UsuarioService';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.scss']
})
export class AddUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario()

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  submit() {
    if(this.usuario.name == '' || this.usuario.email == null) {
        alert("Preencha os campos")
    } else {
      this.usuario.password = 'teste123'
      this.usuarioService.cadUsuario(this.usuario)
      .subscribe(prod => {
        alert("Usuário cadastrado com senha padrão: teste123")
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

  
}
