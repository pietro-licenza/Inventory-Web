import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheComprasComponent } from './detalhe-compras.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from 'src/app/services/ProdutoService';



@NgModule({
  declarations: [
    DetalheComprasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DetalheComprasComponent }]),
    FormsModule,
  ],
  providers: [
    ProdutoService
  ]
})
export class DetalheComprasModule { }
