import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFornecedorComponent } from './add-fornecedores.component';
import { RouterModule } from '@angular/router';
import { CategoriaService } from 'src/app/services/CategoriaService';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from 'src/app/services/UsuarioService';
import { FornecedorService } from 'src/app/services/FornecedorService';



@NgModule({
  declarations: [
    AddFornecedorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AddFornecedorComponent }]),
    FormsModule 
  ],
  providers: [
    FornecedorService
  ]
})
export class AddFornecedorModule { }
