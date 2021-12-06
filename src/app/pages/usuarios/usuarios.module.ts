import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoriaService } from 'src/app/services/CategoriaService';
import { UsuarioService } from 'src/app/services/UsuarioService';



@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: UsuariosComponent }]),
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuariosModule { }
