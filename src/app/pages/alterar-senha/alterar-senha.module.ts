import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlterarSenhaComponent } from './alterar-senha.component';
import { RouterModule } from '@angular/router';
import { CategoriaService } from 'src/app/services/CategoriaService';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from 'src/app/services/UsuarioService';



@NgModule({
  declarations: [
    AlterarSenhaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AlterarSenhaComponent }]),
    FormsModule 
  ],
  providers: [
    UsuarioService
  ]
})
export class AlterarSenhaModule { }
