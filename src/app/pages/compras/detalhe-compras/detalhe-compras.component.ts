import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/Compra';
import { Produto } from 'src/app/models/Produto';
import { Venda } from 'src/app/models/Venda';
import { ProdutoService } from 'src/app/services/ProdutoService';

@Component({
  selector: 'app-detalhe-compras',
  templateUrl: './detalhe-compras.component.html',
  styleUrls: ['./detalhe-compras.component.scss']
})
export class DetalheComprasComponent implements OnInit {

  compra: Compra = new Compra();
  constructor(
   
  ) { }

  ngOnInit(): void {
    let compra = history.state.compra;

    if(compra)
      this.compra = compra


      this.compra.compraProdutos?.map(vp => {
        if(vp.produto && vp.produto.id && vp.produto.price && vp.quantity) {
          vp.price = vp.produto.price * vp.quantity
          if(vp.price && this.compra && this.compra.finalPrice != undefined) this.compra.finalPrice += vp.price
        }
      })

  }


}
