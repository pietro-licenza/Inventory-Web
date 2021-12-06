import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compra } from 'src/app/models/Compra';
import { Produto } from 'src/app/models/Produto';
import { Venda } from 'src/app/models/Venda';
import { CompraService } from 'src/app/services/CompraService';
import { ProdutoService } from 'src/app/services/ProdutoService';
import { VendaService } from 'src/app/services/VendaService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  totalProd = 0
  totalCompras = 0
  totalVendas = 0
  totalOrcamentos = 0

  totalValorCompras = 0
  totalValorVendas = 0
  totalValorOrcamentos = 0

  constructor(
    private produtoService: ProdutoService,
    private compraService: CompraService,
    private vendaService: VendaService,
    private router: Router
  ) { }

  
  ngOnInit(): void {
    this.produtoService.getProdutos()
    .subscribe(prods => {
      this.totalProd = prods.length
    }, err => {
      if(err.status == 401) this.router.navigate(['/login'])
    })

    this.vendaService.getVendas()
    .subscribe((vendas:any) => {
      vendas.map((v:any)=> {
        if(v.isSaleComplete) {
          this.totalVendas++
          this.totalValorVendas += this.getValue(v.products)
        } else {
          this.totalOrcamentos++
          this.totalValorOrcamentos += this.getValue(v.products)
        }
      })
    }, err => {
      if(err.status == 401) this.router.navigate(['/login'])
    })

    this.compraService.getCompras()
    .subscribe((vendas:any) => {
      vendas.map((v:any)=> {
        this.totalCompras++
          this.totalValorCompras += this.getValue(v.products)
      })
    }, err => {
      if(err.status == 401) this.router.navigate(['/login'])
    })

    this.produtoService.getProdutos()
    .subscribe((vendas:any) => {
      vendas.map((v:any)=> {
        this.totalProd++ 
      })
    }, err => {
      if(err.status == 401) this.router.navigate(['/login'])
    })
  }

  getValue(produtos:any) {
    let finalPrice = 0
    produtos.map((vp:any) => {
      finalPrice += parseInt(vp.quantity) * vp.product.price
    })

    return finalPrice
  }

}
