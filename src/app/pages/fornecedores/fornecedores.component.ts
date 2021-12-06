import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/services/CategoriaService';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/UsuarioService';
import { FornecedorService } from 'src/app/services/FornecedorService';
import { Fornecedor } from 'src/app/models/Fornecedor';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.scss']
})
export class FornecedoresComponent implements OnInit {

  fornecedores: Fornecedor[] = []
  faPencil = faPencilAlt;

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.fornecedorService.getFornecedores()
    .subscribe(forns => {
      
      this.fornecedores = forns.map((c:any) => {
        let f = new Fornecedor()
        f.id = c.id
        f.email = c.email
        f.name = c.name
        f.telefone = c.phoneNumber
        f.cnpj = c.cnpj
        return f
      })
      
    })
    
  }

  addFornecedor() {
    this.router.navigate(['/add-fornecedor'])
  }

  editFornecedor(fornecedor: Fornecedor) {
    this.router.navigate(['/add-fornecedor'], { state: { fornecedor }})
  }
}
