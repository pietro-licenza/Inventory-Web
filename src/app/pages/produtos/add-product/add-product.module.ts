import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from 'src/app/services/CategoriaService';
import { ProdutoService } from 'src/app/services/ProdutoService';



@NgModule({
  declarations: [
    AddProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AddProductComponent }]),
    FormsModule
  ],
  providers: [
    CategoriaService,
    ProdutoService
  ]
})
export class AddProductModule { }
