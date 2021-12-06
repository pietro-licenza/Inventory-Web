import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUsuarioComponent } from './add-usuario.component';
import { RouterModule } from '@angular/router';
import { CategoriaService } from 'src/app/services/CategoriaService';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from 'src/app/services/UsuarioService';



@NgModule({
  declarations: [
    AddUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AddUsuarioComponent }]),
    FormsModule 
  ],
  providers: [
    UsuarioService
  ]
})
export class AddUsuarioModule { }
