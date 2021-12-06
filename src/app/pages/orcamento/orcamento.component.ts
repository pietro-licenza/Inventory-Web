import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronLeft, faChevronRight, faInfo } from '@fortawesome/free-solid-svg-icons';
import { Cliente } from 'src/app/models/Cliente';
import { Produto } from 'src/app/models/Produto';
import { Venda } from 'src/app/models/Venda';
import { VendaProduto } from 'src/app/models/VendaProduto';
import { VendaService } from 'src/app/services/VendaService';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.scss']
})
export class OrcamentoComponent implements OnInit {

  vendas: Venda[] = []
  faInfo = faInfo;
  role:string = ''
  
  faLeft = faChevronLeft
  faRight = faChevronRight
  currentPage = 1;
  pages: number | null = null
  itemsPerPage = 5;
  
  constructor(
    private router: Router,
    private vendaService: VendaService
  ) { }
  
  ngOnInit(): void {

    this.role = localStorage.getItem('inventory-role') + ''

    this.vendaService.getVendas()
    .subscribe((vendas:any) => {
      
      vendas = vendas.filter((v:any) => !v.isSaleComplete)

      this.vendas = vendas.map((v:any) => {
        let venda = new Venda()

        venda.id = v.id;
        venda.paymentMethod = v.paymentMethod;
        venda.createdAt = v.createdAt;
        venda.updatedAt = v.updatedAt;

        let cliente = new Cliente()
        cliente.id = v.client.id
        cliente.name = v.client.name
        cliente.email = v.client.email

        venda.cliente = cliente;

        let vendaProdutos = v.products.map((vp:any) => {
          let vendaProduto = new VendaProduto()
          vendaProduto.quantity = vp.quantity;
          
          let produto = new Produto();
          produto.id = vp.product.id;
          produto.name = vp.product.name;
          produto.price = vp.product.price;
          produto.quantity = vp.product.quantity;
          produto.createdAt = vp.product.createdAt;
          produto.updatedAt = vp.product.updatedAt;
          produto.categoryId = vp.product.categoryId

          vendaProduto.produto = produto

          return vendaProduto
        })

        venda.vendaProdutos =  vendaProdutos;
        return venda
      })

      this.pages = Math.ceil(this.vendas.length/this.itemsPerPage)
      this.getItensPage()
    }, err => {
      if(err.status == 401) this.router.navigate(['/login'])
    
      
    })
  }

  goToDetail(venda: Venda) {
    this.router.navigate(['/detalhe-orcamento'], { state: { venda }})
  }

  addVenda() {
    this.router.navigate(['/add-orcamento'])
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
    
    return this.vendas?.filter((v,i) => minIdx <= i && i <= maxIdx)
  }
}
