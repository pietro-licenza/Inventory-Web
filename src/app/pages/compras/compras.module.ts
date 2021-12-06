import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprasComponent } from './compras.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CompraService } from 'src/app/services/CompraService';
import { FornecedorService } from 'src/app/services/FornecedorService';
import { ProdutoService } from 'src/app/services/ProdutoService';



@NgModule({
  declarations: [
    ComprasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ComprasComponent }]),
    FormsModule,

    FontAwesomeModule
  ],
  providers: [
    CompraService,
    FornecedorService,
    ProdutoService
  ]
})
export class ComprasModule { }
