import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from 'src/app/services/ProdutoService';
import { CategoriaService } from 'src/app/services/CategoriaService';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ProdutosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ProdutosComponent }]),
    FormsModule,

    FontAwesomeModule
  ],
  providers: [
    ProdutoService,
    CategoriaService
  ]
})
export class ProdutosModule { }
