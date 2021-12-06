import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVendaComponent } from './add-venda.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VendaService } from 'src/app/services/VendaService';
import { ClienteService } from 'src/app/services/ClienteService';
import { ProdutoService } from 'src/app/services/ProdutoService';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AddVendaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AddVendaComponent }]),
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    ClienteService,
    ProdutoService,
    VendaService
  ]
})
export class AddVendaModule { }
