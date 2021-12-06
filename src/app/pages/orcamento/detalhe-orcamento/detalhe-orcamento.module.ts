import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheOrcamentoComponent } from './detalhe-orcamento.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VendaService } from 'src/app/services/VendaService';
import { ProdutoService } from 'src/app/services/ProdutoService';



@NgModule({
  declarations: [
    DetalheOrcamentoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DetalheOrcamentoComponent }]),
    FormsModule,
  ],
  providers: [
    VendaService,
    ProdutoService
  ]
})
export class DetalheOrcamentoModule { }
