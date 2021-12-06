import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Cliente } from 'src/app/models/Cliente';
import { Produto } from 'src/app/models/Produto';
import { Venda } from 'src/app/models/Venda';
import { VendaProduto } from 'src/app/models/VendaProduto';
import { ClienteService } from 'src/app/services/ClienteService';
import { ProdutoService } from 'src/app/services/ProdutoService';
import { VendaService } from 'src/app/services/VendaService';

@Component({
  selector: 'app-add-venda',
  templateUrl: './add-venda.component.html',
  styleUrls: ['./add-venda.component.scss']
})
export class AddVendaComponent implements OnInit {

  faPlus = faPlus;
  faMinus = faMinus;
  clientes: Cliente[] = []
  produtos: Produto[] = []

  venda: Venda = new Venda()

  constructor(
    private router: Router,
    private vendaService: VendaService,
    private clienteService: ClienteService,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {

    let vp = new VendaProduto();
    vp.quantity = 1;
    vp.produto = new Produto();
    this.venda.vendaProdutos = [vp]

    this.clienteService.getClientes()
    .subscribe(cs => {
      this.clientes = cs.map((c:any) => {
        let cl = new Cliente()

        cl.id = c.id;
        cl.name = c.name

        return cl
      })
    })

    this.produtoService.getProdutos()
    .subscribe(cs => {
      this.produtos = cs.map((c:any) => {
        let cl = new Produto()

        cl.id = c.id;
        cl.name = c.name
        cl.price = c.price

        return cl
      })
    })
  }

  removeProd(vp: VendaProduto, i: number) {
    this.venda.vendaProdutos = this.venda.vendaProdutos?.filter((vp,idx) => idx != i)
  }

  addProduto() {

    let vp = new VendaProduto()
    vp.quantity = 1
    this.venda.vendaProdutos?.push(vp)
   
  }

  submit() {
    if(this.venda.clientId == 0 || this.venda.clientId == null
      || this.venda.paymentMethod == '' || this.venda.paymentMethod == null) {
        alert("Preencha todos os campos")
    } else {

    
      let venda:any = {}

      venda['clientId'] = this.venda.clientId
      venda['paymentMethod'] = this.venda.paymentMethod

      venda['products'] = []

      let hasNegative = false;

      this.venda.vendaProdutos?.map(vp => {
        if(vp.quantity != undefined && vp.quantity != null && vp.quantity <= 0) {
          hasNegative = true
        }
       venda.products.push({
         'id': vp.productId,
         'quantity': vp.quantity
       })
      })

      if(hasNegative) {
        alert("Insira valores maiores que zero")
        return 
      }
      venda['isSaleComplete'] = true

      this.vendaService.criarVenda(venda)
      .subscribe(prod => {
        alert("Venda Cadastrada com sucesso")
        this.router.navigate(['/vendas'])
      },
      err => {
        if(err.status == 401) {
          alert("Sessão expirada")
          this.router.navigate(['/login'])
        } else {
          if (err.error.error == "PRODUCT_NOT_FOUND") alert("Produto Incorreto")
          else if (err.error.error == "INVALID_QUANTITY") alert("Quantidade excede estoque disponível")
          else alert(JSON.stringify(err.error))
        }
      })
    }
  }

  qtdChanged(event:any, vp: VendaProduto, t:number) {
    /*if(t == 1) {
      vp.productId = event.target.value
    } else if (t == 2) {
      vp.quantity = event.target.value
    } */

    if(vp.productId && vp.quantity != undefined && vp.quantity != null) {
      let prod = this.produtos.find(p => p.id == parseInt(vp.productId + ''))

      if(vp.quantity <= 0) {
        alert("Insira valores maiores que zero")
        return 
      }

      if(prod && prod.price) {
        vp.price = prod?.price * vp.quantity
        console.log(vp.price)
      }
    } else {
      vp.price = 0;
    }

    let newTotalPrice = 0

    this.venda.vendaProdutos?.forEach(vp => {
      if(vp.price)
      newTotalPrice += vp.price
    })

    this.venda.finalPrice = newTotalPrice
  }
}
