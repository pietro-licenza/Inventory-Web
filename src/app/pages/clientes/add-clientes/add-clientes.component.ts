import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/ClienteService';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-clientes.component.html',
  styleUrls: ['./add-clientes.component.scss']
})
export class AddClientesComponent implements OnInit {

  cliente: Cliente = new Cliente()

  isEditing: boolean = false;

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }
 
  ngOnInit(): void {
    let cliente = history.state.cliente;

    if(cliente) {
      this.cliente = cliente
      this.isEditing = true
    }
  } 

  submit() {
    if(this.cliente.name == '' || this.cliente.email == null || this.cliente.phoneNumber == null) {
        alert("Preencha todos os campos")
    } else {

      let cli:any = {}

      cli.name = this.cliente.name
      cli.email = this.cliente.email
      cli.phoneNumber = this.cliente.phoneNumber
      cli.clientAddress = "Endereco Exemplo"
      
      this.clienteService.addCliente(cli)
      .subscribe(prod => {
        alert("Cliente cadastrado com sucesso")
        this.router.navigate(['/clientes'])
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
    this.clienteService.deletarCliente(this.cliente)
    .subscribe(prod => {
      alert("Cliente Excluído com Sucesso")
      this.router.navigate(['/clientes'])
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
    if(this.cliente.name == '' || this.cliente.email == null || this.cliente.phoneNumber == null) {
        alert("Preencha todos os campos")
    } else {

      let cli:any = {}

      cli.id = this.cliente.id
      cli.name = this.cliente.name
      cli.email = this.cliente.email
      cli.phoneNumber = this.cliente.phoneNumber
      cli.clientAddress = "Endereco Exemplo"
      
      this.clienteService.updateCliente(cli)
      .subscribe(cli => {
        alert("Cliente alterado com sucesso")
        this.router.navigate(['/clientes'])
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
