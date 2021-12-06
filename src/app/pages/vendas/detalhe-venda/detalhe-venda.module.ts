import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheVendaComponent } from './detalhe-venda.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from 'src/app/services/ProdutoService';



@NgModule({
  declarations: [
    DetalheVendaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DetalheVendaComponent }]),
    FormsModule,
  ],
  providers: [
    ProdutoService
  ]
})
export class DetalheVendaModule { }
