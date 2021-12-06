import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/ClienteService';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = []
  faPencil = faPencilAlt;

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.clienteService.getClientes()
    .subscribe(cats => {
      
      this.clientes = cats.map((c:any) => {
        let cli = new Cliente()
        cli.id = c.id
        cli.email = c.email
        cli.name = c.name
        cli.phoneNumber = c.phoneNumber
        return cli
      })
      
    })
    
  }

  addCliente() {
    this.router.navigate(['/add-cliente'])
  }

  editCliente(cliente: Cliente) {
    this.router.navigate(['/add-cliente'], { state: { cliente }})
  }

}
