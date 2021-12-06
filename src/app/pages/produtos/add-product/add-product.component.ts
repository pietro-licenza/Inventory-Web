import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { Produto } from 'src/app/models/Produto';
import { CategoriaService } from 'src/app/services/CategoriaService';
import { ProdutoService } from 'src/app/services/ProdutoService';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  produto:Produto = new Produto();
  categorias:Categoria[] = []

  isEditing: boolean = false;

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    let produto = history.state.produto;

    if(produto) {
      this.produto = produto
      this.isEditing = true
    }
    this.categoriaService.getCategorias()
    .subscribe(cats => {
      this.categorias = cats.map((c:any) => {
        return {
          id: c.id,
          name: c.name
        }
      })
    })
  }

  submit() {
    if(this.produto.name == '' || this.produto.name == null
      || this.produto.quantity == 0 || this.produto.quantity == null
      || this.produto.categoryId == 0 || this.produto.categoryId == null
      || this.produto.price == 0 || this.produto.price == null) {
        alert("Preencha todos os campos")
    } else {

      if(this.produto.quantity <= 0 || this.produto.price <= 0) {
        alert("Insira valores maiores que zero")
        return
      }

      this.produtoService.cadProduto(this.produto)
      .subscribe(prod => {
        alert("Produto Cadastrado com Sucesso")
        this.router.navigate(['/produtos'])
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
    if(this.produto.name == '' || this.produto.name == null
      || this.produto.quantity == 0 || this.produto.quantity == null
      || this.produto.categoryId == 0 || this.produto.categoryId == null
      || this.produto.price == 0 || this.produto.price == null) {
        alert("Preencha todos os campos")
    } else {
      this.produtoService.alterarProduto(this.produto)
      .subscribe(prod => {
        alert("Produto Alterado com Sucesso")
        this.router.navigate(['/produtos'])
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
    this.produtoService.deletarProduto(this.produto)
      .subscribe(prod => {
        alert("Produto Excluído com Sucesso")
        this.router.navigate(['/produtos'])
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
