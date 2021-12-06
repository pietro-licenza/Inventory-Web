import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { Venda } from 'src/app/models/Venda';
import { ProdutoService } from 'src/app/services/ProdutoService';

@Component({
  selector: 'app-detalhe-venda',
  templateUrl: './detalhe-venda.component.html',
  styleUrls: ['./detalhe-venda.component.scss']
})
export class DetalheVendaComponent implements OnInit {

  venda: Venda = new Venda();
  produtos: Produto[] = []
  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
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

}
