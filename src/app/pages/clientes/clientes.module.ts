import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoriaService } from 'src/app/services/CategoriaService';
import { UsuarioService } from 'src/app/services/UsuarioService';
import { ClienteService } from 'src/app/services/ClienteService';

 

@NgModule({
  declarations: [
    ClientesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ClientesComponent }]),
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClientesModule { }
