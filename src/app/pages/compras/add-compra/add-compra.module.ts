import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCompraComponent } from './add-compra.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VendaService } from 'src/app/services/VendaService';
import { ClienteService } from 'src/app/services/ClienteService';
import { ProdutoService } from 'src/app/services/ProdutoService';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FornecedorService } from 'src/app/services/FornecedorService';
import { Compra } from 'src/app/models/Compra';
import { CompraService } from 'src/app/services/CompraService';
import { CategoriaService } from 'src/app/services/CategoriaService';



@NgModule({
  declarations: [
    AddCompraComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AddCompraComponent }]),
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    FornecedorService,
    ProdutoService,
    CompraService,
    CategoriaService
  ]
})
export class AddCompraModule { }
