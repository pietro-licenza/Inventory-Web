import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/services/CategoriaService';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.scss']
})
export class AddCategoriaComponent implements OnInit {

  categoria:Categoria = new Categoria()

  isEditing: boolean = false;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    let categoria = history.state.categoria;

    if(categoria) {
      this.categoria = categoria
      this.isEditing = true
    }
   
  }

  submit() {
    if(this.categoria.name == '' || this.categoria.name == null) {
        alert("Preencha o nome da categoria")
    } else {
      this.categoriaService.cadCategoria(this.categoria)
      .subscribe(prod => {
        alert("Categoria Cadastrada com Sucesso")
        this.router.navigate(['/categorias'])
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

  edit() {
    if(this.categoria.name == ''  || this.categoria.name == null) {
        alert("Preencha o nome da categoria")
    } else {
      this.categoriaService.alterarCategoria(this.categoria)
      .subscribe(prod => {
        alert("Categoria Alterada com Sucesso")
        this.router.navigate(['/categorias'])
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

  delete() {
    this.categoriaService.deletarCategoria(this.categoria)
      .subscribe(prod => {
        alert("Categoria Excluída com Sucesso")
        this.router.navigate(['/categorias'])
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
