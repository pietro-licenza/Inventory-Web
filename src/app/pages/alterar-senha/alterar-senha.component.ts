import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { Usuario } from 'src/app/models/Usuario';
import { CategoriaService } from 'src/app/services/CategoriaService';
import { UsuarioService } from 'src/app/services/UsuarioService';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.scss']
})
export class AlterarSenhaComponent implements OnInit {

  usuario: Usuario = new Usuario()

  confirmPwd:string = ''
 

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuario.role = localStorage.getItem('inventory-role') + ''
    this.usuario.name = localStorage.getItem('inventory-user') + ''
    this.usuario.id = localStorage.getItem('inventory-user-id') + ''
  }

  submit() {
    if(this.usuario.password == '' || this.usuario.password == null || this.confirmPwd == '' || this.confirmPwd == null) {
        alert("Preencha os campos")
    } else if(this.usuario.password != this.confirmPwd) {
      alert("As senhas não coincidem")
    } else {
      this.usuarioService.resetPwd(this.usuario)
      .subscribe(prod => {
        alert("Sua senha foi alterada com sucesso")
        this.router.navigate(['/dashboard'])
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
