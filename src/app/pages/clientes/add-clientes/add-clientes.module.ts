import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientesComponent } from './add-clientes.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClienteService } from 'src/app/services/ClienteService';



@NgModule({
  declarations: [
    AddClientesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AddClientesComponent }]),
    FormsModule 
  ],
  providers: [
    ClienteService
  ]
})
export class AddClienteModule { }
