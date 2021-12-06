import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { Usuario } from 'src/app/models/Usuario';
import { CategoriaService } from 'src/app/services/CategoriaService';
import { FornecedorService } from 'src/app/services/FornecedorService';
import { UsuarioService } from 'src/app/services/UsuarioService';

@Component({
  selector: 'app-add-fornecedor',
  templateUrl: './add-fornecedores.component.html',
  styleUrls: ['./add-fornecedores.component.scss']
})
export class AddFornecedorComponent implements OnInit {

  fornecedor: Fornecedor = new Fornecedor();
 
  isEditing: boolean = false;

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let fornecedor = history.state.fornecedor;

    if(fornecedor) {
      this.fornecedor = fornecedor
      this.isEditing = true
    }
  }

  submit() {
    if(this.fornecedor.name == '' || this.fornecedor.email == null || this.fornecedor.cnpj == null || this.fornecedor.telefone == null) {
        alert("Preencha todos os campos")
    } else {
      let forn:any = {}

      forn.name = this.fornecedor.name
      forn.corporateName = this.fornecedor.name
      forn.cnpj = this.fornecedor.cnpj
      forn.phoneNumber = this.fornecedor.telefone
      forn.email = this.fornecedor.email

      forn.address = {
        "street": "Rua Provider",
        "number": 1,
        "neighborhood": "Bairro Provider",
        "state": "SP",
        "city": "São Paulo",
        "cep": "00000-00"
      }


      this.fornecedorService.addFornecedor(forn)
      .subscribe(prod => {
        alert("Fornecedor Cadastrado com sucesso")
        this.router.navigate(['/fornecedores'])
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
    this.fornecedorService.deletarFornecedor(this.fornecedor)
    .subscribe(prod => {
      alert("Fornecedor Excluído com Sucesso")
      this.router.navigate(['/fornecedores'])
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

  edit() {
    if(this.fornecedor.name == '' || this.fornecedor.email == null || this.fornecedor.cnpj == null || this.fornecedor.telefone == null) {
      alert("Preencha todos os campos")
  } else {
    let forn:any = {}

    forn.id = this.fornecedor.id
    forn.name = this.fornecedor.name
    forn.corporateName = this.fornecedor.name
    forn.cnpj = this.fornecedor.cnpj
    forn.phoneNumber = this.fornecedor.telefone
    forn.email = this.fornecedor.email

    forn.address = {
      "street": "Rua Provider",
      "number": 1,
      "neighborhood": "Bairro Provider",
      "state": "SP",
      "city": "São Paulo",
      "cep": "00000-00"
    }


    this.fornecedorService.updateFornecedor(forn)
    .subscribe(prod => {
      alert("Fornecedor alterado com sucesso")
      this.router.navigate(['/fornecedores'])
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
}
