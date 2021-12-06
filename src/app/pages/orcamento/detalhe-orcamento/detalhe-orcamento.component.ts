import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { Venda } from 'src/app/models/Venda';
import { ProdutoService } from 'src/app/services/ProdutoService';
import { VendaService } from 'src/app/services/VendaService';

@Component({
  selector: 'app-detalhe-orcamento',
  templateUrl: './detalhe-orcamento.component.html',
  styleUrls: ['./detalhe-orcamento.component.scss']
})
export class DetalheOrcamentoComponent implements OnInit {

  venda: Venda = new Venda();
  produtos: Produto[] = []
  role:string = ''

  constructor(
    private vendaService: VendaService,
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {

    this.role = localStorage.getItem('inventory-role') + ''
    
    let venda = history.state.venda;

    if(venda)
      this.venda = venda

      this.produtoService.getProdutos()
      .subscribe(cs => {
        this.produtos = cs.map((c:any) => {
          let cl = new Produto()
  
          cl.id = c.id;
          cl.name = c.name
          cl.price = c.price
  
          return cl
        })

        this.venda.vendaProdutos?.map(vp => {
          if(vp.produto && vp.produto.id) {
            let prod = this.produtos.find(p => p.id == vp.produto?.id)
            if(prod && prod.price && vp.quantity)
            vp.price = prod.price * vp.quantity
            if(vp.price && this.venda && this.venda.finalPrice != undefined) this.venda.finalPrice += vp.price
          }
        })

        
      })
  }

  translatePayment(txt: any) {
    switch (txt) {
      case 'CARTAO_DEBITO':
        return 'Cartão de Débito'
      case 'CARTAO_CREDITO':
        return 'Cartão de Crédito'
      case 'CARTAO_BOLETO':
        return 'Boleoto'
      default:
        return txt
    }
  }

  efetuarVenda() {
    this.vendaService.efetuarVenda(this.venda)
      .subscribe(prod => {
        alert("Venda Efetuada com sucesso")
        this.router.navigate(['/vendas'])
      },
      err => {
        if(err.status == 401) {
          alert("Sessão expirada")
          this.router.navigate(['/login'])
        } else {
          if (err.error.error == "SALE_NOT_FOUND") alert("Código de Venda inválido")
          else alert(JSON.stringify(err.error))
        }
      })
  }
}
