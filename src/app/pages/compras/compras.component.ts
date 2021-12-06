import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronLeft, faChevronRight, faInfo } from '@fortawesome/free-solid-svg-icons';
import { Cliente } from 'src/app/models/Cliente';
import { Compra } from 'src/app/models/Compra';
import { CompraProduto } from 'src/app/models/CompraProduto';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { Produto } from 'src/app/models/Produto';
import { Venda } from 'src/app/models/Venda';
import { VendaProduto } from 'src/app/models/VendaProduto';
import { CompraService } from 'src/app/services/CompraService';
import { FornecedorService } from 'src/app/services/FornecedorService';
import { ProdutoService } from 'src/app/services/ProdutoService';
import { VendaService } from 'src/app/services/VendaService';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {

  compras: Compra[] = []
  faInfo = faInfo;
  fornecedores: Fornecedor[] = []
  produtos: Produto[] = []
  role:string = ''
  
  faLeft = faChevronLeft
  faRight = faChevronRight
  currentPage = 1;
  pages: number | null = null
  itemsPerPage = 5; 
  
  constructor(
    private router: Router,
    private compraService: CompraService
  ) { }
  
  ngOnInit(): void {

    this.role = localStorage.getItem('inventory-role') + ''

    this.compraService.getCompras()
    .subscribe((compras:any) => {

      this.compras = compras.map((c:any) => {
        let compra = new Compra()

        compra.id = c.id
        compra.providerId = c.providerId
        compra.data = c.updatedAt
        compra.fornecedor = new Fornecedor()
        compra.fornecedor.id = c.provider.id
        compra.fornecedor.name = c.provider.name
        compra.fornecedor.email = c.provider.email
        
        let compraProdutos = c.products.map((vp:any) => {
          let compraProduto = new CompraProduto()
          compraProduto.quantity = vp.quantity;
          
          let produto = new Produto();
          produto.id = vp.product.id;
          produto.name = vp.product.name;
          produto.price = vp.product.price;
          produto.quantity = vp.product.quantity;
          produto.createdAt = vp.product.createdAt;
          produto.updatedAt = vp.product.updatedAt;
          produto.categoryId = vp.product.categoryId

          compraProduto.produto = produto

          return compraProduto
        })

        compra.compraProdutos =  compraProdutos;

        return compra
        
      })

      this.pages = Math.ceil(this.compras.length/this.itemsPerPage)
      this.getItensPage()
    }, err => {
      if(err.status == 401) this.router.navigate(['/login'])
    
      
    })
  }

  goToDetail(compra: Compra) {
    this.router.navigate(['/detalhe-compra'], { state: { compra }})
  }

  addCompra() {
    this.router.navigate(['/add-compra'])
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
    
    return this.compras?.filter((v,i) => minIdx <= i && i <= maxIdx)
  }

}
