import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { Produto } from 'src/app/models/Produto';
import { CategoriaService } from 'src/app/services/CategoriaService';
import { ProdutoService } from 'src/app/services/ProdutoService';
import { faChevronLeft, faChevronRight, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  faPencil = faPencilAlt;

  produtos: Produto[] = []
  categorias: Categoria[] = []

  faLeft = faChevronLeft
  faRight = faChevronRight
  currentPage = 1;
  pages: number | null = null
  itemsPerPage = 5; 
  
  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.categoriaService.getCategorias()
    .subscribe(cats => {
      this.categorias = cats.map((c:any) => {
        return new Categoria(c.id, c.name)
      })

      this.produtoService.getProdutos()
      .subscribe(prod => {
        this.produtos = prod.map((p:any) => {
          var produto = new Produto();

          produto.id = p.id;
          produto.name = p.name;
          produto.price = p.price;
          produto.quantity = p.quantity;
          produto.createdAt = p.createdAt;
          produto.updatedAt = p.updatedAt;
          produto.categoria = this.categorias.find(c => c.id === p.categoryId)
          produto.categoryId = p.categoryId
          
          return produto;

        })

        this.pages = Math.ceil(this.produtos.length/this.itemsPerPage)
        this.getItensPage()

      }, err => {
        if(err.status == 401) this.router.navigate(['/login'])
      })
      
    }, err => {
      if(err.status == 401) this.router.navigate(['/login'])
    })
    
  }

  addProduct() {
    this.router.navigate(['/add-produto'])
  }

  editProduct(produto: Produto) {
    this.router.navigate(['/add-produto'], { state: { produto }})
  }

  getNextPage() {
    if(this.pages) {
      if (this.currentPage < this.pages) {
        this.currentPage++
      }
    }
  }

  getPrevPage() {
    if(this.pages) {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    }
  }

  getItensPage() {
    let page = this.currentPage
    var minIdx = 0;
    var maxIdx = 0;

    if(page == 1) {
      minIdx = 0
      maxIdx = (this.itemsPerPage - 1)
    } else {
      minIdx = ((page-1) * this.itemsPerPage)
      maxIdx = ((page * this.itemsPerPage) - 1)
    }
    
    return this.produtos?.filter((v,i) => minIdx <= i && i <= maxIdx)
  }
}
