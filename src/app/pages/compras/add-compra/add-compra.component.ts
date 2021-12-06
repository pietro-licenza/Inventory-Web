import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Categoria } from 'src/app/models/Categoria';
import { Cliente } from 'src/app/models/Cliente';
import { Compra } from 'src/app/models/Compra';
import { CompraProduto } from 'src/app/models/CompraProduto';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { Produto } from 'src/app/models/Produto';
import { Venda } from 'src/app/models/Venda';
import { VendaProduto } from 'src/app/models/VendaProduto';
import { CategoriaService } from 'src/app/services/CategoriaService';
import { ClienteService } from 'src/app/services/ClienteService';
import { CompraService } from 'src/app/services/CompraService';
import { FornecedorService } from 'src/app/services/FornecedorService';
import { ProdutoService } from 'src/app/services/ProdutoService';
 
@Component({
  selector: 'app-add-compra',
  templateUrl: './add-compra.component.html',
  styleUrls: ['./add-compra.component.scss']
})
export class AddCompraComponent implements OnInit {

  faPlus = faPlus;
  faMinus = faMinus;
  fornecedores: Fornecedor[] = []
  produtos: Produto[] = []
  categorias: Categoria[] = []

  compra: Compra = new Compra()

  constructor(
    private router: Router,
    private compraService: CompraService,
    private fornecedorService: FornecedorService,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {

    let vp = new CompraProduto();
    vp.quantity = 1;
    vp.produto = new Produto();
    vp.produto.price = 0
    vp.produto.name = ''
    this.compra.compraProdutos = [vp]

    this.categoriaService.getCategorias()
    .subscribe(cats => {
      this.categorias = cats.map((c:any) => {
        let cat = new Categoria()
        cat.id = c.id
        cat.name = c.name

        return cat
      })
    })
 
    this.fornecedorService.getFornecedores()
    .subscribe(cs => {
      this.fornecedores = cs.map((c:any) => {
        let cl = new Fornecedor()

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


  removeProd(vp: CompraProduto, i: number) {
    this.compra.compraProdutos = this.compra.compraProdutos?.filter((vp,idx) => idx != i)
  }

  addProduto() {
    let cp = new CompraProduto()
    cp.quantity = 1;
    cp.produto = new Produto()
    cp.produto.price = 0
    cp.produto.name = ''
    this.compra.compraProdutos?.push(cp)

  }

  submit() {
    if(this.compra.providerId == 0 || this.compra.providerId == null) {
        alert("Preencha todos os campos")
    } else {

      let compra:any = {}

      compra['providerId'] = this.compra.providerId

      compra['products'] = []

      var hasNegative = false

      this.compra.compraProdutos?.map(vp => {

        if((vp.quantity != null && vp.quantity != undefined && vp.quantity <= 0) || (!vp.productId && (vp.produto != null && vp.produto != undefined && vp.produto.price != null && vp.produto.price != undefined && vp.produto.price <= 0))) {
          hasNegative = true 
        }
       compra.products.push({
         'id': vp.productId,
         'quantity': vp.quantity,
         'name': vp.produto?.name,
         'categoryId': vp.produto?.categoryId,
         'price': vp.produto?.price
       })
      })

      if(hasNegative) {
        alert("Insira valores maiores que zero")
        return;
      }
     
      this.compraService.criarCompra(compra)
      .subscribe(prod => {
        alert("Compra Cadastrada com sucesso")
        this.router.navigate(['/compras'])
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

  qtdChanged(vp: VendaProduto) {
        
    if(vp.productId && vp.quantity != null && vp.quantity != undefined) {
      if(vp.quantity <= 0) {
        alert("Insira valores maiores que zero")
        return;
      }
      if(vp.productId == 99999 && vp.produto && vp.produto.price) {
        vp.price = vp.produto.price * vp.quantity
      } else {
        let prod = this.produtos.find(p => p.id == parseInt(vp.productId + ''))

        if(prod && prod.price) {
          vp.price = prod?.price * vp.quantity
        }
      }
    } else {
      vp.price = 0;
    }

    let newTotalPrice = 0

    this.compra.compraProdutos?.forEach(vp => {
      if(vp.price)
      newTotalPrice += vp.price
    })

    this.compra.finalPrice = newTotalPrice
  }
  
}
